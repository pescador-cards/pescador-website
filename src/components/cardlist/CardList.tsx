import React from "react";
import { Card } from "../card/Card";
import "./CardList.css";

export function CardList() {
    const cards = [];

    for (let i = 0; i < 21; i++) {
        cards.push(
            <Card
                header="Card Header"
                body="Some long body text, which might be interesting"
            />
        );
    }
    return (
        <div className="card-list-container">
            <div className="card-list">{cards}</div>
        </div>
    );
}
