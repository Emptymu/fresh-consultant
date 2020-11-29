import React from "react";
import { css } from "@emotion/core";

interface Props {
    children: React.ReactNode;
    width?: string;
}

const CardMedia = ({ children, width }: Props) => {
    const widthValue = width ? width : `40%`;
    return (
        <div
            css={css`
                flex: 0 0 ${widthValue};
                max-width: ${widthValue};
            `}
        >
            {children}
        </div>
    );
};

export default CardMedia;
