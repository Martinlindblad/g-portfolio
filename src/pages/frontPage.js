import React, { Component } from "react";
import SvgLogo from "../components/svg/logoSvg.js"
import BurgerMenu from "../components/burgerMenu/burgerMenu.js"
import About from "../components/about/about.js"
import Me from "../components/about/me.js"
import RollingBackground from "../components/banner/rollingBackground.js";
import '../css/frontPage.scss'
import '../css/burgerMenu.scss'
import '../css/tiles.scss'
import '../css/rollingBackground.scss'
import Contact from "../components/contact/contact.js";

function hide() {

    if(window.screen.width> 700) {
        document.querySelector(".tile-container").classList.add('hide')
    }
}



class FrontPage extends Component {
    constructor() {
        super();
        this.state = {
            post: false,
        };
    }
    setPostTrue() {
        if (this.state.post !== true) { this.setState({ post: true }) }
      }
      
      setPostFalse() {
        if (this.state.post !== false) { this.setState({ post: false }) }
      }
      isAboutIn() {
        window.addEventListener('scroll', () => {
          console.log(this.state.post);
          let scrollY = window.scrollY;
          let screenWidth = window.screen.width;
          if (screenWidth > 1200 && scrollY > window.innerHeight * 0.2) {
            this.setPostTrue();
          } else if (screenWidth < 1200 && screenWidth > 992 && scrollY > window.innerHeight * 0.2) {
            this.setPostTrue();
          }
          else if (screenWidth < 992 && screenWidth > 700 && scrollY > window.innerHeight * 0.2) {
            this.setPostTrue();
          }
          else if (screenWidth < 700 && scrollY >  100) {
            this.setPostTrue();
          } else {
            this.setPostFalse();
          }
        });
      }
      componentDidMount() {
        this.isAboutIn();
      }
    render() {
        return (
            <div>
                <SvgLogo />
                <BurgerMenu />
                <div id="Home" className="SpaceMaker"></div>
                <RollingBackground />
                {this.state.post
                    ? <About />
                    : null
                }
                <Me />
                <Contact />
            </div>
        )
    }

}

export default FrontPage