/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/core";

import Header from "./Header";
import Footer from "./Footer";

import { globalStyles } from "./styles/global";

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Global styles={globalStyles} />
            <Header siteTitle={data.site.siteMetadata.title} />
            <div
                css={css`
                    padding: 0 1.0875rem 1.45rem;
                `}
            >
                <main
                    css={css`
                        margin-bottom: 3rem;
                    `}
                >
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
