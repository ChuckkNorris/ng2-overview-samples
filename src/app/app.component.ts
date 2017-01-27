import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  myItems = [
    { name: "Jeff", age: 23, isEnrolled: true },
    { name: "Hank", age: 19, isEnrolled: true },
    { name: "Ted", age: 34, isEnrolled: false }
  ];
}
