import React, { Component, lazy, Suspense } from "react";
import SvgLogo from "../components/svg/logoSvg.js"
import BurgerMenu from "../components/burgerMenu/burgerMenu.js"
import Tiles from "../components/banner/banner.js"
import About from "../components/about/about.js"
import Me from "../components/about/me.js"
import RollingBackground from "../components/banner/rollingBackground.js";
import '../css/frontPage.scss'
import '../css/burgerMenu.scss'
import '../css/tiles.scss'
import '../css/rollingBackground.scss'



class FrontPage extends Component {
    constructor() {
        super();
        this.state = {
            post: false,
        };
    }
    isAboutIn() {
        window.addEventListener('scroll', () => {
            const isTop = window.scrollY > window.innerHeight * 0.4;  
            if (isTop === true) {
                if (this.state.post !== true) {
                    this.setState({ post: true })
                }
            }
            else {
                if (this.state.post !== false) {
                    this.setState({ post: false })
                }
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
                <div className="SpaceMaker"></div>
                <RollingBackground />
                {this.state.post
                    ? <About />
                    : null
                }
                <Me />
            </div>

        )
    }

}

export default FrontPage