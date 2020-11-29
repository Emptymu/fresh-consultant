import React, { FC, ReactNode } from "react";
import { css } from "@emotion/core";

import { colorBorder, colorPrimary, colorPrimaryDark, colorWhite } from "./styles/config";

interface ButtonProps {
    children: ReactNode;
    type?: "primary" | "outline";
}

const buttonReset = `
    background-color: transparent;
    border: 1px solid ${colorBorder};
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
`;

const buttonStyles = {
    primary: css`
        ${buttonReset}
        background-color: ${colorPrimary};
        color: ${colorWhite};
        font-weight: bold;

        &:hover {
            background-color: ${colorPrimaryDark};
        }
    `,
    outline: css`
        ${buttonReset}
    `
};

const Button: FC<ButtonProps> = ({ children, type = `primary` }) => {
    return <button css={buttonStyles[type]}>{children}</button>;
};

export default Button;
