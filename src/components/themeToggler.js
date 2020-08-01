import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { IoMdMoon, IoIosSunny } from "react-icons/io"

class ToggleTheme extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label htmlFor="theme">
            <input
              name="theme"
              id="theme"
              style={{ display: "none" }}
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
            />
            {theme === "dark" ? (
              <IoIosSunny color="yellow" size={28} />
            ) : (
              <IoMdMoon size={28} />
            )}
          </label>
        )}
      </ThemeToggler>
    )
  }
}
export default ToggleTheme
