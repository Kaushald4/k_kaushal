import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import ThemeToggle from "./themeToggler"

import { rhythm, scale } from "../utils/typography"

class Header extends React.Component {
  render() {
    const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // const blogPath = `${__PATH_PREFIX__}/blog/`

    return (
      <MyHeader>
        <div style={{ maxWidth: "1920px", margin: "auto" }}>
          <List>
            <Logo>
              <Link to="/">
                <h2 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  Kaushal Mehta
                </h2>
              </Link>
            </Logo>
            <NavigationMenu>
              <ListItem>
                <Link to="/blog" style={{ color: "inherit" }}>
                  Blog
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/blog" style={{ color: "inherit" }}>
                  Projects
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/about" style={{ color: "inherit" }}>
                  About
                </Link>
              </ListItem>
            </NavigationMenu>
            <ThemeSwitcherEl>
              <ThemeToggle />
            </ThemeSwitcherEl>
          </List>
        </div>
      </MyHeader>
    )
  }
}

const Logo = styled.div`
  display: flex;
  flex: 2;
  justify-content: flex-end;
`

const NavigationMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 4;
`

const ThemeSwitcherEl = styled.div`
  display: flex;
  flex: 2;
  justify-content: space-around;
`

const MyHeader = styled.div`
  height: 60;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
  padding: 0 20px;
  max-width: 100vw;
  background-color: var(--headerbgColor);
  position: relative;
  z-index: 1;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  margin-left: auto;
`

const ListItem = styled.li`
  padding: 0 40px;
  transition: 0.4s;
  border-radius: 2px;
  font-family: "Roboto";
  color: var(--textNormal);

  @media (max-width: 659px) {
    padding: 0 10px;
  }
`

export default Header
