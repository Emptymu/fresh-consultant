import React, { FC } from "react";
import { css } from "@emotion/core";

import Container from "./Container";
import { colorGray, colorWhite } from "./styles/config";

const Footer: FC<{}> = () => (
    <footer
        css={css`
            color: ${colorWhite};
            background-color: ${colorGray};
        `}
    >
        <Container
            cssStyles={`
            padding: 3rem;
            text-align: center;
        `}
        >
            <p>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>
            </p>
        </Container>
    </footer>
);

export default Footer;
