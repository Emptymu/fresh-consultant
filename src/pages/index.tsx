/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Container from "../components/Container";
import Search from "../components/Search";

const IndexPage = () => {
    const images = useStaticQuery(graphql`
        query {
            allFile(filter: { relativePath: { regex: "/auto/" } }) {
                nodes {
                    childImageSharp {
                        fluid(maxWidth: 300, maxHeight: 250, fit: COVER) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `);

    const data = [
        {
            title: `Crown Coachworks Auto Body & Paint`,
            description: `Auto Collision Repair Facility`,
            address_components: [
                {
                    long_name: `2122`,
                    short_name: `2122`,
                    types: [`street_number`]
                },
                {
                    long_name: `South Sepulveda Boulevard`,
                    short_name: `S Sepulveda Blvd`,
                    types: [`route`]
                },
                {
                    long_name: `West Los Angeles`,
                    short_name: `West Los Angeles`,
                    types: [`neighborhood`, `political`]
                },
                {
                    long_name: `Los Angeles`,
                    short_name: `Los Angeles`,
                    types: [`locality`, `political`]
                },
                {
                    long_name: `Los Angeles County`,
                    short_name: `Los Angeles County`,
                    types: [`administrative_area_level_2`, `political`]
                },
                {
                    long_name: `California`,
                    short_name: `CA`,
                    types: [`administrative_area_level_1`, `political`]
                },
                {
                    long_name: `United States`,
                    short_name: `US`,
                    types: [`country`, `political`]
                },
                {
                    long_name: `90025`,
                    short_name: `90025`,
                    types: [`postal_code`]
                }
            ],
            geometry: {
                location: {
                    lat: 34.041218,
                    lng: -118.438261
                }
            }
        },
        {
            title: `Crown Coachworks Auto Body & Paint`,
            description: `Auto Collision Repair Facility`
        },
        {
            title: `Crown Coachworks Auto Body & Paint`,
            description: `Auto Collision Repair Facility`
        },
        {
            title: `Crown Coachworks Auto Body & Paint`,
            description: `Auto Collision Repair Facility`
        }
    ];

    return (
        <Layout>
            <SEO title="Home" description="Welcome to Gatsby" />
            <Container
                cssStyles={`
                    padding: 3rem 0;
                    margin-bottom: 1.5rem;
                    text-align: center;
                `}
            >
                <h2>Find the best repair facilities near you.</h2>
                <p>Let&#39;s uncover the best auto body shops and auto mechanics nearest you.</p>
                <Search />
            </Container>
        </Layout>
    );
};

export default IndexPage;
