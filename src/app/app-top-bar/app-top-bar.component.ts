import { Component } from '@angular/core';
import { cards, Card } from '../cards';

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
    localStorage.setItem("savedList", JSON.stringify(this.cards));
  }

  sortCards() {
    this.cards.sort((a: { cardNumber: number; }, b: { cardNumber: number; }) => a.cardNumber - b.cardNumber);
    localStorage.setItem("savedList", JSON.stringify(this.cards));
  }
}
