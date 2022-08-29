import { Component, OnInit } from '@angular/core';
import { TerminalService } from 'primeng/terminal';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css'],
  providers: [TerminalService],
})
export class TerminalComponent implements OnInit {
  clearOutput: any;
  isClear: boolean;

  constructor(private terminalService: TerminalService) {
    this.isClear = false;
    this.terminalService.commandHandler.pipe(
      finalize(()=>{
        alert("j");
      })
    ).subscribe((command) => {
      if (command === 'date') {
        this.terminalService.sendResponse(new Date().toDateString());
      } else if (command == 'clear') {
        setTimeout(()=>{
          this.clearOutput();
        },0);
      } else {
        this.terminalService.sendResponse('Unknown Command!');
      }
    });
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
  }
}
