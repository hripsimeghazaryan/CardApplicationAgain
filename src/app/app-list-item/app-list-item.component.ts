import { Component, Input } from '@angular/core';

import { cards, Card } from '../cards';

@Component({
  selector: 'app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.css']
})
export class AppListItemComponent {
  cards = cards;
  
  constructor() { }

  removeCard(card: Card): void {
    cards.splice(cards.findIndex(x => x.id == card.id), 1);
  }
}
