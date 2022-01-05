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
    const item = window.document.getElementById((card.id).toString());
    item?.remove();
  }
}
