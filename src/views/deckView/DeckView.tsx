import React from "react";
import { useParams } from "react-router";

import "./DeckView.css";

interface DeckViewParams {
    deckId: string;
}

/**
 * View for representing a single deck.
 */
export function DeckView() {
    let { deckId } = useParams<DeckViewParams>();
    return <div>{deckId}</div>;
}
