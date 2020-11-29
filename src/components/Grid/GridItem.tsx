import React, { FC, ReactNode } from "react";
import { css } from "@emotion/core";

interface GridItemPropsType {
    children: ReactNode;
    cssStyles?: string;
}

const GridItem: FC<GridItemPropsType> = ({ children, cssStyles = `` }) => (
    <div
        css={css`
            ${cssStyles}
        `}
    >
        {children}
    </div>
);

export default GridItem;
