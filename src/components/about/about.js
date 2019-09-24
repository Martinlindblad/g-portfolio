import React from 'react'

// import { useSpring, animated } from "react-spring"
import Profile from './profile.js'
import DoughnutChartJS from '../about/chart/chartJS.js'
import DoughnutChartHTMLCSS from '../about/chart/chartHCSS.js'
import DoughnutChartOther from '../about/chart/chartOther.js'
import '../../css/about/about.css'

const About = () => {
    return(
        <div className="about-container">
            <h3>Front-end Experience</h3>
            <Profile />
            <DoughnutChartJS />
            <DoughnutChartHTMLCSS />
            <DoughnutChartOther />
        </div>

    )
}

export default About