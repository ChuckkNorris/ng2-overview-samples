import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() items: any[];
  @Input() header: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

  getPropertyValue(object: any, propertyName: string): any {
    return object[propertyName];
  }

}
