import React from "react"
import Particles from "react-particles-js"

const Particle = () => {
  return (
    <Particles
      style={{ position: "absolute" }}
      params={{
        particles: {
          number: {
            value: 10,
          },
          color: {
            value: ["#ffdeb3", "#563d7c", "#f31c47", "#fa3e6b"],
          },
          size: {
            value: 10,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  )
}

export default Particle
