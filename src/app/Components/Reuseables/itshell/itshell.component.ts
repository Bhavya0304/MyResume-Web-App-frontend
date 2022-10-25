import { Component, OnInit } from '@angular/core';
import { JWTService } from 'src/app/Service/Authentication/jwt.service';
import { ShellService } from 'src/app/Service/ITShell/shell.service';

@Component({
  selector: 'app-itshell',
  templateUrl: './itshell.component.html',
  styleUrls: ['./itshell.component.css']
})
export class ITShellComponent implements OnInit {

  constructor(public shell:ShellService,private jwt:JWTService) {
    
   }

  ngOnInit(): void {
   
  }

}
