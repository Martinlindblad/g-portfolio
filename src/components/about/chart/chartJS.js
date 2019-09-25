import React from "react"


import '../../../css/about/chart.css'

var Chart = require("chart.js")


class DoughnutChartJS extends React.Component {
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
        labels: ["REACT", "JQUERY", "VANILLAJS", "OTHER"],
        datasets: [
          {
            data: [2.1, 3.4, 4.8, 0.8],
            backgroundColor: [
              "	#8B0000",
              "rgb(115,180,190)",
              '#f3e5ab',
              "#C3C3C3",
              "#4B4B4B",
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
      <div className="chartJS">
        <canvas ref={this.canvasRef} />
      </div>
    )
  }
}

export default DoughnutChartJS
