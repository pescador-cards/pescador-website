import React from "react";
import "./Card.css";

export function Card() {
    return (
        <div className="card">
            <div className="header">Card Header</div>
            <div className="body">
                Card Body with some useless content, which could be interesting
            </div>
        </div>
    );
}
