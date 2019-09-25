import React from "react"



import '../../../css/about/chart.css'

var Chart = require("chart.js")


class DoughnutChartHTMLCSS extends React.Component {
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
        labels: ["SASS", "CSS", "HTML"],
        datasets: [
          {
            data: [3.3,3.3,3.4],
            backgroundColor: [
              "	#8B0000",
              "rgb(115,180,190)",
              "#fff",
              "#C3C3C3",
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
      <div className="chartHTMLCSS">
        <canvas ref={this.canvasRef} />
      </div>
    )
  }
}

export default DoughnutChartHTMLCSS