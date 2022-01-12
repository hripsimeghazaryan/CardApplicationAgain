import { Component } from '@angular/core';
import { ListStorageService, Card } from '../list-storage.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './app-top-bar.component.html',
  styleUrls: ['./app-top-bar.component.css']
})
export class AppTopBarComponent {
  cards: Card[];

  constructor(private listService: ListStorageService) {
    this.cards = this.listService.get();
   }

  addCard() {
    this.listService.add(Date.now());
  }

  sortCards() {
    this.listService.sort();
  }
}
