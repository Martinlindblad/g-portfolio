import React from 'react'

import { useSpring, animated } from "react-spring"

// import { useSpring, animated } from "react-spring"
import Profile from './profile.js'

import GatherChart from '../about/chart/chartGather.js'
import '../../css/about/about.css'

const About = () => {
    const goldCircleFade = useSpring({
        to: [{ opacity: "1",transform: "scale(1)" , config: { duration: 1000 } }],
        from: { opacity: "0",transform: "scale(1.4)", easing: "easeOutExpo" },
        delay: 300,
      })
    return(
        
        <animated.div style={goldCircleFade} id="About" className="about-container">
        
            <Profile />
            <GatherChart />
        </animated.div>

    )
}

export default About