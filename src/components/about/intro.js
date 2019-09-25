import React, { useState } from 'react'
import { render } from 'react-dom'
import { useTrail, animated } from 'react-spring'
import '../../css/about/intro.scss'

const items = [" and I'm a Front-end developer student at Nackademin Stockholm Solna.", "Mypassion lies in developing products for costumer use,", "working on projects and make myself a great developer"]
const config = { mass: 7, tension: 100, friction: 100, easing: 'ease in-out'}

const Intro = () => {
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div className="intro-container">
      <div>
        <h4>Hello! My name is Martin</h4>
        {trail.map(({ x, height, ...rest }, index) => (
            <animated.div
            key={items[index]}
            className="text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default Intro