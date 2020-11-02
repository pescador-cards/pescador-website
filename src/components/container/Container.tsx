import React from "react";
import { ContainerProps } from "../../api/ContainerProps";

import "./Container.css";

/**
 * Component representing the container of the web application.
 */
export function Container({ children }: ContainerProps) {
    return <div className="container">{children}</div>;
}
