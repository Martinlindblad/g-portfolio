import React, { useState } from 'react'
import { render } from 'react-dom'
import { useTrail, animated } from 'react-spring'

import JapaneseDoughnut from '../about/chart/JapaneseChart.js'
import '../../css/about/me.scss'


const items = ["I've been working as a care assistant (2015)", "Working parttime at CCEP (2016)-(now)", "Right now I'm a front-end developer student at Nackademin Stockholm Solna", "Swedish - Native Language" ,"English - Fluent","Japanese - A2-2 Level JLPT(3-4)"]
const config = { mass: 5, tension: 1000, friction: 600, easing: 'ease in-out'}

const Intro = () => {
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 60 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
      <ul>
        {trail.map(({ x, height, ...rest }, index) => (
            <animated.li
            key={items[index]}
            className="text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.li>
        ))}
      </ul>
  )
}


class Me extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: false};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
          <div className="me-container">
              <button onClick={this.handleClick}>
                  ...
            </button>
            <div className="content">
            {this.state.isToggleOn ?<div className="content"> <JapaneseDoughnut /><Intro /></div> : null }
            </div>
        </div>
      );
    }
  }
  
export default Me