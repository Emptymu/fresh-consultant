import { css } from "@emotion/core";
import React from "react";
import { Link } from "gatsby";

import { colorPrimary, colorWhite } from "./styles/config";
import Container from "./Container";

interface Props {
    siteTitle: string;
}

const Header = ({ siteTitle }: Props) => (
    <header
        css={css`
            background: ${colorPrimary};
            color: ${colorWhite};
        `}
    >
        <Container
            cssStyles={`
                padding: 1.25rem 1rem;
            `}
        >
            <Link
                to="/"
                css={css`
                    font-size: 2rem;
                    font-style: italic;
                    font-weight: bold;
                `}
            >
                {siteTitle}
            </Link>
        </Container>
    </header>
);

export default Header;
