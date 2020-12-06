import React from "react";
import { css } from "@emotion/core";

interface Props {
    children: React.ReactNode;
    styles?: string;
}

const CardContent = ({ children, cssStyles = `` }: Props) => {
    return (
        <div
            css={css`
                flex: 1 1 0;
                padding: 0.75rem;
                ${cssStyles};
            `}
        >
            {children}
        </div>
    );
};

export default CardContent;
