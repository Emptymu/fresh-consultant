/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImageProps } from "gatsby-image";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Container from "../components/Container";
import Banner from "../components/Banner";
import { colorSecondary } from "../components/styles/config";

const IndexPage = () => {
    const images = useStaticQuery(graphql`
        query {
            allImageSharp {
                nodes {
                    fluid {
                        ...GatsbyImageSharpFluid
                        originalName
                    }
                }
            }
        }
    `)?.allImageSharp?.nodes?.map(({ fluid }: { fluid: {} }) => fluid);

    const bannerImageProps = images
        .filter(({ originalName }: { originalName: string }) => originalName === `banner.jpg`)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(({ originalName, ...props }: { originalName: string; props: GatsbyImageProps }) => props)[0];

    const bannerData = {
        title: `We are your personal gardening advisor`,
        description: `You have a garden that you grow in permaculture or we do and you would like to have the
        advice of a pro to widen your possibilities, get better results and better understand your
        garden?`,
        imgProps: bannerImageProps
    };

    return (
        <Layout>
            <SEO title="Home" description="Welcome to Gatsby" />
            <Banner {...bannerData} />
            <Container
                cssStyles={`
                    padding: 3rem 1rem;
                    margin-bottom: 1.5rem;

                    section {
                        margin-bottom: 1.5rem;
                    }

                    h2 {
                        color: ${colorSecondary};
                    }
                `}
            >
                <section>
                    <h2>Our Services</h2>
                    <h3>To individuals</h3>
                    <p>
                        Garden cultivation, design, monitoring, harvesting / Transition of seasons / Springtime
                        summer!Garden cultivation, design, monitoring, harvesting / Transition of seasons / Springtime
                        summer!
                    </p>
                    <p>
                        Gardening advice: You have a garden that you grow in permaculture or we do and you would like to
                        have the advice of a pro to widen your possibilities, get better results and better understand
                        your garden?
                    </p>
                    <p>
                        A system of harvesting and distribution of surplus vegetables to individuals at solidarity
                        prices for the benefit of vulnerable populations!
                    </p>
                    <h3>Communities and social landlords</h3>
                    <p>
                        Vegetation of public areas, via vegetable garden or open ground / reintroduction of agricultural
                        knowledge among urban populations, Permaculture Workshop / Awareness raising about soil life,
                        biodiversity and the growth process of vegetables! With the participation of the urban
                        populations via participative workcamps (social link, common production, living together).
                        Recycling of urban projects organic matter from the city (trees, etc.).
                    </p>
                </section>
                <section>
                    <h2>Contact Us</h2>
                    <p>Email: foo@gmail.com</p>
                    <p>xxx-123-456</p>
                </section>
            </Container>
        </Layout>
    );
};

export default IndexPage;
