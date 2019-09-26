import React, { Component } from 'react'
import LandingPage from './landingPage';
import FrontPage from "./frontPage.js"

class Index extends Component {
  constructor() {
    super();
    this.state = {
        post: false,
    }
} 

    didRender() {
      setTimeout(function(){ 
        this.setState({ post: true })
    }.bind(this), 3000);
  }
    
    componentDidMount() {
      this.didRender()
  }
  render() {
    return(

      <div className="indexContainer">
       {this.state.post ? <FrontPage />: <LandingPage />}
 
    </div>
                  )
  }
  }

export default Index