import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { CURRENCY_SYMBOLS } from '../constants/constants';

@Pipe({
  name: 'convertMoney',
  pure: false
})
export class ConvertMoneyPipe implements PipeTransform {
  constructor(private _currencyService: CurrencyService) {}
  private convertedCurrencyValue: string = '';
  private lastValue: number;

  transform(value: number, outputCurrencyCode:string, baseCurrencyCode = 'USD'): string {
    if (value != this.lastValue) {
      this.lastValue = value;
      this._currencyService.convertCurrency(value, outputCurrencyCode, baseCurrencyCode)
        .subscribe(convertedAmount => {
          if (convertedAmount) {
            this.convertedCurrencyValue = '';
            let currencySymbol = CURRENCY_SYMBOLS[outputCurrencyCode];
            if (currencySymbol !== undefined)
              this.convertedCurrencyValue += currencySymbol;
            this.convertedCurrencyValue += convertedAmount.toFixed(2);
          }
      });
    }
    return this.convertedCurrencyValue;
  }

}


