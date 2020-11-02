import React from "react";
import { CardProps } from "../../api/CardProps";

import "./Card.css";

/**
 * Card, containing a header and a body, which can be filled with custom JSX.Elements.
 */
export function Card({ header, children }: CardProps) {
    return (
        <div className="card">
            <div className="header">{header}</div>
            <div className="body">{children}</div>
        </div>
    );
}
