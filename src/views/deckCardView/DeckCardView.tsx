import React from "react";
import { CardList } from "../../components/cardlist/CardList";
import { DeckCard } from "../../components/deckCard/DeckCard";
import { v4 as uuid } from "uuid";

import "./DeckCardView.css";

/**
 * View for representing the overview (cards) of all decks.
 */
export function DeckCardView() {
    const cards = [];

    for (let i = 0; i < 21; i++) {
        cards.push(
            <DeckCard key={uuid()} header="Card Header" description="Some long body text, which might be interesting" />
        );
    }

    return (
        <div className="deck-card-view">
            <CardList cards={cards} />
        </div>
    );
}
