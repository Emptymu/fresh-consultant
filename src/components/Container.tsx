import React, { FC, ReactNode } from "react";
import { css } from "@emotion/core";

interface ContainerPropsType {
    children: ReactNode;
    cssStyles?: string;
}

const Container: FC<ContainerPropsType> = ({ children, cssStyles = `` }) => (
    <div
        css={css`
            max-width: 75rem;
            margin-bottom: 1.5rem;
            margin: 0 auto;
            ${cssStyles}
        `}
    >
        {children}
    </div>
);

export default Container;
