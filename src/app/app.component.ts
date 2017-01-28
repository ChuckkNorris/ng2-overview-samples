import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myItems = [
    { name: "Jeff", id: 23, isDeveloper: true },
    { name: "Hank", id: 19, isDeveloper: false },
    { name: "Ted", id: 34, isDeveloper: true }
  ];

}
