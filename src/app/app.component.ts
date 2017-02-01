import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './services/currency.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CurrencyService]
})
export class AppComponent implements OnInit {
  myValue='Initial Value';
  
  constructor(private _currencyService: CurrencyService) {}
  ngOnInit() {
    this.convertToRupees();
  }

    myItems = [
    { name: "Jeff", id: 23, isDeveloper: true },
    { name: "Hank", id: 19, isDeveloper: false },
    { name: "Ted", id: 34, isDeveloper: true }
  ];

  myTitle: string = 'My Custom List';

  updateTitle() {
    console.log('Update title clicked');
    this.myTitle = 'Totally a different title';
  }

  addItems() {
    console.log('Add Item clicked!');
    this.myItems.push({name: 'Roger', id: 2, isDeveloper: false});
  }


  convertToRupees() {
    let rupeeCode = 'INR';
    let dollars = 124.79;
    this._currencyService.convertCurrency(dollars, rupeeCode).subscribe(amountAsRupees => {
      //console.log('$' + dollars + ' is worth ' + amountAsRupees + ' Rupees');
    });
  }
 
}


 // setInterval(() => this.price++, 1000);
  //  price: number = 1;

