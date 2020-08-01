import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Particle from "../components/Particle"

import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Gatsby Starter Personal Website"

    return (
      <>
        <Particle />
        <Layout location={this.props.location} title={siteTitle}>
          <SEO
            title="Home"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
          />
          <HomeLayout>
            <Composition>
              <img
                style={{
                  margin: 0,
                  width: "100%",
                  position: "relative",
                  zIndex: 1,
                }}
                src="./home-coder.svg"
                alt="k_kaushal"
              />
            </Composition>
            <Section>
              <h1
                style={{
                  fontWeight: "bold",
                  fontSize: "60px",
                  paddingBottom: "4px",
                }}
              >
                👨🏻‍💻HI! I'm Kaushal
              </h1>
              <h3
                style={{
                  fontWeight: "500",
                  fontSize: "30px",
                  paddingTop: "14px",
                  marginBottom: "14px",
                }}
              >
                I'm a computer science student & i write code ❤️
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam doloribus eos ab fugiat iure nostrum. Laborum
                laboriosam voluptate nobis aut.
              </p>
              <p>Lorem ipsum dolor sit amet.</p>
            </Section>
          </HomeLayout>
          <section>
            <h2>Projects that i'm working on</h2>
          </section>
        </Layout>
      </>
    )
  }
}

export default IndexPage

const HomeLayout = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  height: 50vh;

  & ${HomeLayout} > div {
    width: 600px !important;
    padding: 0 80px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 14px;
    height: 80vh;
    margin-top: -80px;

    & ${HomeLayout} > div {
      width: 400px !important;
    }
  }
`

const Composition = styled.div`
  width: 600px;
  margin-bottom: 20px;
`
const Section = styled.section`
  position: relative;
  z-index: 1;
`

// export const query = graphql`
//   query {
//     desktop: file(relativePath: { eq: "bg.jpg" }) {
//       childImageSharp {
//         fluid(quality: 90, maxWidth: 1920) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `
