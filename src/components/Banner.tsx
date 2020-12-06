import React, { FC } from "react";
import { GatsbyImageProps } from "gatsby-image";
import { css } from "@emotion/core";
import Image from "./Image";
import Box from "./Box";
import { colorWhite, colorBlack } from "./styles/config";
import { down } from "./styles/breakPoints";

interface Props {
    title: string;
    description: string;
    imgProps: GatsbyImageProps;
}

const Banner: FC<Props> = ({ title, description, imgProps }) => {
    return (
        <Box
            cssStyles={down(
                `sm`,
                `
                &::after {
                    padding-top: 100%;
                }
                `
            )}
        >
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
                    padding: 1rem;

                    ${down(
                        `md`,
                        `
                        h1 {
                            font-size: 1.5rem;
                        }
                        `
                    )}

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
