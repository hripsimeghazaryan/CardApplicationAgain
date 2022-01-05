import { Component } from '@angular/core';
import { cards } from '../cards';

@Component({
  selector: 'app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrls: ['./app-top-bar.component.css']
})
export class AppTopBarComponent {
  cardId = 1;
  cards = cards;
  constructor() { }

  addCard() {
    this.cards.push({id: ++this.cardId, cardNumber: Math.floor(Math.random() * 100)});
  }

  sortCards() {
    this.cards.sort((a, b) => a.cardNumber - b.cardNumber);
  }

}
