import { Component } from '@angular/core';

import { cards, Card } from '../cards';

import { ListStorageService } from '../list-storage.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.css']
})
export class AppListItemComponent {
  cards = cards;
  
  // constructor() { }

  constructor(private loggingService: ListStorageService) { }

  removeCard(card: Card): void {
    this.loggingService.remove(card.id);
    // cards.splice(cards.findIndex((x: { id: number; }) => x.id == card.id), 1);
    // localStorage.setItem("saved", JSON.stringify(this.cards));
  }
}
