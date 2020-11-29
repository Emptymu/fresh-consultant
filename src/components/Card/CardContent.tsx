import React from "react";
import { css } from "@emotion/core";

interface Props {
    children: React.ReactNode;
}

const CardContent = ({ children }: Props) => {
    return (
        <div
            css={css`
                flex: 1 1 0;
                padding: 0.75rem;
            `}
        >
            {children}
        </div>
    );
};

export default CardContent;
