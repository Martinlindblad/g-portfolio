import React from 'react'

import '../../css/about/intro.scss'
import Media from '../../media/img/PNG/GitHub-Mark-120px-plus.png'
import { useSpring, animated } from "react-spring"


const GithubLink = () => {
    const goldCircleFade = useSpring({
        to: [{ opacity: "1", config: { duration: 1000 } }],
        from: { opacity: "0", easing: "easeOutExpo" },
        delay: 300,
      })
    return(
        <animated.div style={goldCircleFade} className="githubLink">
            <img src={Media}></img>
        </animated.div>
    )
}
export default GithubLink