import { Injectable } from '@angular/core';
import { Shell } from 'src/app/Interfaces/Shell';


@Injectable({
  providedIn: 'root'
})
export class ShellService {

  ShellObj:Shell[];
  prompt:string;
  stdin:string|null;
  Handler!:Function;
  historyIndex:number;


  constructor() {
    this.ShellObj = [];
    this.prompt = "Ubuntu[2.1.1]>";
    this.stdin = "";
    this.historyIndex = 0;
  }

   initShell = (Handler:Function)=>{
     this.Handler = Handler;
   }

   CommandHandler = ()=>{
      var input = this.stdin;
      var output = this.Handler(input);
      if(output == true){
          return;
      }
      else{

        if(output != null){
          this.ShellObj.push({
            prompt:this.prompt,
            output:output,
            input:input
          });
        }
        this.stdin = "";
        this.historyIndex = 0;

      }
      }

      History = ()=>{
        if((this.ShellObj.length -1)-this.historyIndex >= 0){
          this.stdin = this.ShellObj[(this.ShellObj.length -1)-this.historyIndex].input;
          this.historyIndex++;
        }
      }

      pipeline = (stdin:string|null,stdout:string)=>{
        this.stdin = stdin != null ? stdin : this.stdin;
        if(stdout){
          this.ShellObj.push({
            input:this.stdin,
            output:stdout,
            prompt:this.prompt
          });
          this.stdin = "";
          this.historyIndex = 0;
        }
      }

}
