import React, { FC, ReactNode } from "react";
import { css } from "@emotion/core";

interface BoxPropsType {
    children: ReactNode;
    ratio?: number;
    cssStyles?: string;
}

const Box: FC<BoxPropsType> = ({ children, ratio = 36.9, cssStyles = `` }) => (
    <div
        css={css`
            width: 100%;
            overflow: hidden;
            position: relative;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;

            &::after,
            &::before {
                content: "";
            }

            &::after {
                display: block;
                padding-top: ${ratio}%;
            }

            ${cssStyles}
        `}
    >
        <div
            css={css`
                position: absolute;
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                img {
                    object-fit: cover;
                    display: block;
                    height: 100%;
                    width: 100%;
                }

                > div {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                }
            `}
        >
            {children}
        </div>
    </div>
);

export default Box;
