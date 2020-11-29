import React, { FC, ReactNode } from "react";
import { css } from "@emotion/core";
import { up } from "../styles/breakPoints";
interface GridPropsType {
    children: ReactNode;
    cssStyles?: string;
    lg?: number;
    md?: number;
    sm?: number;
    xs?: number;
}

const Grid: FC<GridPropsType> = ({ children, cssStyles = ``, lg = 2, md = 2, sm = 1, xs = 1 }) => (
    <div
        css={css`
            display: flex;
            flex-wrap: wrap;
            justify-content: left;
            margin-left: -0.5rem;
            margin-right: -0.5rem;

            & > div {
                padding: 0.5rem;
            }
            ${up(
                `sm`,
                `& > div {
                flex: 0 0 calc(${100 / xs}%);`
            )}
            ${up(
                `sm`,
                `& > div {
                flex: 0 0 calc(${100 / sm}%);`
            )}
            ${up(
                `md`,
                `& > div {
                flex: 0 0 calc(${100 / md}%);`
            )}
            ${up(
                `lg`,
                `& > div {
                flex: 0 0 calc(${100 / lg}%);`
            )}

            ${cssStyles}
        `}
    >
        {children}
    </div>
);

export default Grid;
