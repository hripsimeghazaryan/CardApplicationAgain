export interface Card {
    id: number,
    cardNumber: number;
}

export const cards: Card[] = JSON.parse(localStorage.getItem("savedList") || "[]");