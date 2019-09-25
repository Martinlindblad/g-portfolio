import React from 'react'
import DoughnutChartJS from './chartJS.js'
import DoughnutChartHTMLCSS from './chartHCSS.js'
import DoughnutChartOther from './chartOther.js'
import ReactDelayRender from 'react-delay-render';
import Intro from '../intro.js'
import GithubLink from '../githubLink.js'

const GatherChart = () => {


    return (
        <div className="about-container">
                <h3>Front-end Experience</h3>
            <DoughnutChartJS />
            <DoughnutChartHTMLCSS />
            <DoughnutChartOther />
            <Intro />
            <GithubLink />
        </div>
    )
}

export default ReactDelayRender({ delay: 1800 })(GatherChart);