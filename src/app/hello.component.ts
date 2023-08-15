import { Component, Input } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { MyService } from '../Services/Data.Service';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{DataService.count}}!</h1> `,
  styles: [`h1 { font-family: Lato; }`],
  providers: [MyService],
})
export class HelloComponent {
  @Input() name: string;

  constructor(private DataService: MyService) {
    DataService.count++;
  }
  // @Input() name1: string;
}
