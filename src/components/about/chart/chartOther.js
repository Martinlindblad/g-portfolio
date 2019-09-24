import React from "react"

import '../../../css/about/chart.css'

var Chart = require("chart.js")


class DoughnutChartOther extends React.Component {
  constructor(props) {
    super(props)
    this.canvasRef = React.createRef()
  }

  componentDidMount() {
    this.myDnChart = new Chart(this.canvasRef.current, {
      type: "doughnut",
      options: {
        maintainAspectRatio: true,
        legend: {
          position: "left",
        },
      },
      data: {
        labels: ["MySQL", "PHP", "NODEJS"],
        datasets: [
          {
            data: [5,4,1],
            backgroundColor: [
                "#C3C3C3",
                "rgb(115,180,190)",
                "#fff",
                "#8B0000",
              '#f3e5ab',
            ],
            fontColor: "#f1f1f1",
            borderWidth: 0,
          },
        ],
      },
    })
  }

  render() {
    return (
      <div className="chartOther">
        <canvas ref={this.canvasRef} />
      </div>
    )
  }
}

export default DoughnutChartOther