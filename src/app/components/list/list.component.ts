import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnChanges {

  @Input() items: any[];
  @Input() displayProperty: string;
  @Input() valueProperty: string;
  @Input() title: string;

  @Input() selectedValues:any[] = [];
  @Output() selectedValuesChange: EventEmitter<any[]> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    console.log('On Changes Called!');
    console.log(changes);
  }

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
