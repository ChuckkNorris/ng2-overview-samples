import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyService {

  constructor(private _http: Http) { }

  convertCurrency(inputAmount: number, outputCurrencyCode: string, baseCurrencyCode = 'USD'): Observable<number> {
    return Observable.create(obs => {
      this._http.get('http://api.fixer.io/latest?base=' + baseCurrencyCode).subscribe(rateResponse => {
        if (rateResponse.ok) {
            let rateToConvertTo:number = rateResponse.json().rates[outputCurrencyCode];
            let convertedNumber = inputAmount * rateToConvertTo;
            obs.next(convertedNumber);
        }
        else obs.next(null);
      });
    });
  }

}


