import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string, ...args: unknown[]): unknown {
    if(value != "" && value != undefined){
      return this.sanitizer.bypassSecurityTrustHtml(value);
    }
    else{
      return "";
    }
  }

}
