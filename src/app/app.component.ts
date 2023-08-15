import { Component } from '@angular/core';
import { MyService } from '../Services/Data.Service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  constructor(private DataService: MyService) {
    //DataService.count;
  }

  Increase() {
    this.DataService.count++;
  }

  Decrease() {
    this.DataService.count--;
  }
  Original() {
    this.DataService.count = 0;
  }
}
