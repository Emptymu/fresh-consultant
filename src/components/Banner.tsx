import React, { FC, ReactNode } from "react";
import { GatsbyImageProps } from "gatsby-image";
import { css } from "@emotion/core";
import Image from "./Image";
import Box from "./Box";
import { colorWhite, colorBlack } from "./styles/config";

interface Props {
    title: string;
    description: string;
    imgProps: GatsbyImageProps;
}

const styles = css`
    position: absolute;
`;

const Banner: FC<{ props: Props }> = ({ title, description, imgProps }) => {
    console.log(imgProps);
    return (
        <Box>
            <Image {...imgProps} />
            <div
                css={css`
                    background-color: ${colorBlack};
                    opacity: 0.2;
                `}
            ></div>
            <div
                css={css`
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;

                    h1,
                    p {
                        max-width: 800px;
                        color: ${colorWhite};
                    }
                `}
            >
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </Box>
    );
};

export default Banner;
