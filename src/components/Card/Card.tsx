import React from "react";
import { css } from "@emotion/core";
import { colorBorder } from "../styles/config";

import shadows from "../styles/shadow";

interface Props {
    children: React.ReactNode;
    raised?: boolean;
}

const Card = ({ children, raised = false }: Props) => {
    return (
        <div
            css={css`
                display: flex;
                border: 1px solid ${colorBorder};
                border-radius: 3px;
                box-shadow: ${raised ? shadows[8] : shadows[1]};
            `}
        >
            {children}
        </div>
    );
};

export default Card;
