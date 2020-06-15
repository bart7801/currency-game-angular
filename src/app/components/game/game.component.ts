import {Component, OnInit} from '@angular/core';
import {CurrencyClientService, RootObject} from '../../services/currency-client.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  messageForUser: string;
  rootObject: RootObject;
  result: string;

  constructor(private currencyClientService: CurrencyClientService) {
  }

  ngOnInit(): void {
    this.currencyClientService.getCurrencyGBP().subscribe(value => {
      this.rootObject = value;
    });
  }

  sayHello(value: string) {
    this.messageForUser = 'HELLO ' + value + '!';
  }

  check(value: string) {
    if (value > this.rootObject.rates.PLN) {
      this.result = 'TOO MUCH';
    } else if (value < this.rootObject.rates.PLN) {
      this.result = 'NOT ENOUGH';
    } else {
      this.result = 'SUCCEEDED, CONGRATULATIONS!!!';
    }
  }
}
