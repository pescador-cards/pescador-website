import React from "react";
import { DeckCardProps } from "../../api/DeckCardProps";
import { Card } from "../card/Card";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

import "./DeckCard.css";

/**
 * Component representing card for a deck.
 */
export function DeckCard({ header, description }: DeckCardProps) {
    return (
        <Link className="deck-card-link" to={uuid()}>
            <Card key={uuid()} header={header}>
                {description}
            </Card>
        </Link>
    );
}
