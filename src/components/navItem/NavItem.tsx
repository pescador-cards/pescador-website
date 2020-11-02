import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { NavItemProps } from "../../api/NavItemProps";

import "./NavItem.css";

/**
 * Single item in the navigation bar.
 */
export function NavItem({ text, target }: NavItemProps) {
    const realTarget = target.startsWith("/") ? target : `/${target}`;
    return (
        <div key={uuid()} className="nav-item">
            <Link to={realTarget}>{text}</Link>
        </div>
    );
}
