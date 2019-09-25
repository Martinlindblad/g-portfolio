import React from "react"


import '../../../css/about/chart.css'

var Chart = require("chart.js")


class JapaneseDoughnut extends React.Component {
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
        labels: ["WRITING", "GRAMMAR", "COMMUNICATION", "LISTNING", "READING"],
        datasets: [
          {
            data: [1, 2, 5, 1.5, 1.5],
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
      <div className="japaneseChart">
        <canvas ref={this.canvasRef} />
        <h5> Japanese</h5>
      </div>
    )
  }
}

export default JapaneseDoughnut
