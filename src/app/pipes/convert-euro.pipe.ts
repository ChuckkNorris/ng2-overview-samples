import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';


@Pipe({
  name: 'convertEuro',
  pure: false
})
export class ConvertEuroPipe implements PipeTransform {
  constructor(private _http: Http) {}
  private convertedCurrencyValue: string;
  private didRun: boolean;
  transform(value: number, outputCurrency:string, inputCurrency = 'USD'): string {
    if (!this.didRun) {
      this._http.get('http://api.fixer.io/latest').subscribe(rates => {
        let rate = rates.json().rates.USD;
        let converted = value / rate;
        this.convertedCurrencyValue = "EURO " + converted.toFixed(2);
      });
      console.log(outputCurrency);
      console.log(inputCurrency);
    }
    return this.convertedCurrencyValue;
  }

}
