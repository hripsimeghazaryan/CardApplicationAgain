import { Injectable } from '@angular/core';

export interface Card {
  id: number,
  cardNumber: number;
}

@Injectable({
  providedIn: 'root'
})
export class ListStorageService {
  cards: Card[];

  constructor() { 
    this.cards = JSON.parse(localStorage.getItem("saved") || "[]");
  }

  get() {
    return this.cards;
  }

  set() {
    localStorage.setItem("saved", JSON.stringify(this.cards));
    return this.get();
  }

  add(id: number) {
    this.cards.push({id: id, cardNumber: Math.floor(Math.random() * 100)});
    this.set();
  }

  sort() {
    this.cards.sort((a: { cardNumber: number; }, b: { cardNumber: number; }) => a.cardNumber - b.cardNumber);
    this.set();
  }

  remove(id: number) {
    this.cards.splice(this.cards.findIndex((x: { id: number; }) => x.id == id), 1);
    console.log(this.cards);
    this.set();
  }
}
