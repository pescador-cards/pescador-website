import React from "react";
import { CardListProps } from "../../api/CardListProps";

import "./CardList.css";

/**
 * List for cards.
 */
export function CardList({ cards }: CardListProps) {
    return (
        <div className="card-list-container">
            <div className="card-list">{cards}</div>
        </div>
    );
}
