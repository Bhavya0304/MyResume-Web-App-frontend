import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TerminalService } from 'primeng/terminal';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';
import { ShellService } from 'src/app/Service/ITShell/shell.service';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  providers: [TerminalService],
})
export class TerminalComponent implements OnInit {
  clearOutput: any;
  isClear: boolean;
  displayModal:boolean;
  loginStatus:boolean;
  LoginDetails:{
    username:string,
    password:string
  };

  constructor(private router : Router,public shell:ShellService,private terminalService: TerminalService, private jwt:JWTService, private readonly changeDetector: ChangeDetectorRef,) {
    this.isClear = false;
    this.displayModal = false;
    this.loginStatus = false;
    this.LoginDetails = {
      username:"",
      password:""
    };

  }

  ngOnInit(): void {
    this.clearOutput = () => {
      const b = <HTMLElement>document.querySelector('.p-terminal-content');
      var child = b.lastElementChild;
      while (child) {
        b.removeChild(child);
        child = b.lastElementChild;
      }
    };
    this.shell.prompt = "linux@root>"
    this.shell.initShell((command:string)=>{
      if(command == "hello"){
        return "Hello World!"
      }
      else if(command == "clear"){
        this.shell.ShellObj = [];
        return null;
      }
      else if(command == "dashboard"){
        this.router.navigate(['dashboard']);
        return"";
      }
      else if(command == "login"){
        if(this.jwt.isLogged){
          return "<h6 style='color:red;'>Already Logged In!</h6>";
        }
        this.displayModal = true;
        return true;
      }
      return "";
  })

   


  }

  Login = ()=>{
    
    if(this.LoginDetails.username != "" && this.LoginDetails.password != ""){
       this.jwt.loginUser(this.LoginDetails.username,this.LoginDetails.password).then((res)=>{
        if(res){
          this.shell.pipeline(null,"Login done!");
        }else{
          this.shell.pipeline(null,"Login Failed, Try Again!");
        }
      });
     
    }
    else{
      this.shell.pipeline(null,"Don't Try to be smart and add details!");

    }
    this.displayModal = false;
  }
}
