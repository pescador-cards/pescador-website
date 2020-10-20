import React from "react";
import { ContainerProps } from "../../api/ContainerProps";
import "./Container.css";

export function Container({ children }: ContainerProps) {
    return <div className="container">{children}</div>;
}
