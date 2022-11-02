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
      command = command.toLowerCase();
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
        if(this.jwt.verifyUserBasic()){
          return "<h6 style='color:red;'>Already Logged In!</h6>";
        }
        else{
          this.displayModal = true;
        return true;
        }
        
      }
      else if(command == "logout"){
        this.jwt.logout();
        return "Logged out successfully!";
      }
      else if(command == ""){
        return "";
      }
      else if(command == "registe"){
        return "Will soon be available!"
      }
      else if(command == "help"){
        return `<h6><b>Welcome User, Here are some commands for you.</b></h6><br>&nbsp;&nbsp; 'hello' -  Command to print Hello world<br><br>&nbsp;&nbsp; 'login' -  Command to login in your account!<br><br>&nbsp;&nbsp; 'logout' -  Command to logout from your account!<br><br>&nbsp;&nbsp; 'dashboard' -  Command to enter in your account!<br><br>&nbsp;&nbsp; 'clear' -  Command to clear terminal!<br><br>`;
      }
      return "Command not found! (Type `help` if you need help with available commands!)";
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
