import React from "react"
import LandingPage from "../components/landingPage/landingPage.js"
import FrontPage from "../components/frontPage/frontPage.js"
import "../css/style.scss"
// import ReactDOM from "react-dom"

// import "../css/style.css";

// ReactDOM.render(<LandingPage />)
class Load extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isLandingPage: true};
    }
    }

function landingPageToFrontPage() {
this.interval = setTimeout(() => this.state({isLandingPage: false}), 5000);
  if (isLandingPage) {
    return (
      <div className="wrapper">
        <LandingPage />
        <Load />
      </div>
    )
  }
  return <FrontPage />
}

export default () => landingPageToFrontPage()
