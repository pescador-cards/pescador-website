import React from "react";
import { HeaderProps } from "../../api/HeaderProps";
import "./Header.css";

/**
 * Component representing the header of the website (including navbar).
 */
export function Header({ nav }: HeaderProps) {
    return (
        <header className="header">
            <div className="navbar">
                {nav.map((n) => (
                    <div className="nav-item">{n}</div>
                ))}
            </div>
        </header>
    );
}
