import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyClientService {

  constructor(private httpClient: HttpClient) {
  }

  public getCurrencyGBP(): Observable<RootObject> {
    return this.httpClient.get<RootObject>('https://api.exchangeratesapi.io/latest?base=GBP');
  }

  public getCurrencyPLN(): Observable<RootObject> {
    return this.httpClient.get<RootObject>('https://api.exchangeratesapi.io/latest?base=PLN');
  }

  public getCurrencyNBP(): Observable<RootObject> {
    return this.httpClient.get<RootObject>('https://api.nbp.pl/api/exchangerates/tables/a/');
  }

}

export interface Rates {
  CAD: number;
  HKD: number;
  ISK: number;
  PHP: number;
  DKK: number;
  HUF: number;
  CZK: number;
  GBP: number;
  RON: number;
  SEK: number;
  IDR: number;
  INR: number;
  BRL: number;
  RUB: number;
  HRK: number;
  JPY: number;
  THB: number;
  CHF: number;
  EUR: number;
  MYR: number;
  BGN: number;
  TRY: number;
  CNY: number;
  NOK: number;
  NZD: number;
  ZAR: number;
  USD: number;
  MXN: number;
  SGD: number;
  AUD: number;
  ILS: number;
  KRW: number;
  PLN: number;
}

export interface RootObject {
  rates: Rates;
  base: string;
  date: string;
}
