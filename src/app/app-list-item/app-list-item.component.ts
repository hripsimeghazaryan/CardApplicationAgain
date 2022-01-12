import { Component } from '@angular/core';

import { Card, ListStorageService } from '../list-storage.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.css']
})
export class AppListItemComponent {
  cards: Card[];
  
  constructor(private listService: ListStorageService) {
    this.cards = this.listService.get();
  }

  removeCard(card: Card): void {
    this.listService.remove(card.id);
  }
}
