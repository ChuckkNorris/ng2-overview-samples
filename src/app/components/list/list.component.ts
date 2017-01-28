import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() items: any[];
  @Input() displayProperty: string;
  @Input() valueProperty: string;
  @Input() title: string;

  @Input() selectedValues:any[] = [];
  @Output() selectedValuesChange: EventEmitter<any[]> = new EventEmitter();

  onChange(event) {
    if (!this.selectedValues)
      this.selectedValues = [];
    if (event.target.checked)
      this.selectedValues.push(event.target.value);
    else {
       let index = this.selectedValues.indexOf(event.target.value);
       this.selectedValues.splice(index, 1);
    }
    this.selectedValuesChange.emit(this.selectedValues);
  }

}
