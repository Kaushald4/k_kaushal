import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import Header from "./header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // const blogPath = `${__PATH_PREFIX__}/blog/`

    return (
      <>
        <Header />
        <Wrapper>
          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(34),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              color: "var(--textNormal)",
            }}
          >
            <main>{children}</main>
          </div>
          <Footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </Footer>
        </Wrapper>
      </>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
  color: var(--textNormal);
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
