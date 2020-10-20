import React from "react";
import { CardProps } from "../../api/CardProps";
import "./Card.css";

export function Card({ header, body }: CardProps) {
    function handleOnClick() {
        console.log("clickyy");
    }

    return (
        <div className="card" onClick={handleOnClick}>
            <div className="header">{header}</div>
            <div className="body">{body}</div>
        </div>
    );
}
