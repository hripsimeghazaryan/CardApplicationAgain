import { Component } from '@angular/core';
import { cards, Card } from '../cards';
import { ListStorageService } from '../list-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrls: ['./app-top-bar.component.css']
})
export class AppTopBarComponent {
  cardId = 1;
  cards = cards;
  constructor(private loggingService: ListStorageService) { }

  addCard() {
    this.loggingService.add(++this.cardId);
    // this.cards.push({id: ++this.cardId, cardNumber: Math.floor(Math.random() * 100)});
    // localStorage.setItem("saved", JSON.stringify(this.cards));
  }

  sortCards() {
    this.cards.sort((a: { cardNumber: number; }, b: { cardNumber: number; }) => a.cardNumber - b.cardNumber);
    localStorage.setItem("saved", JSON.stringify(this.cards));
  }
}
