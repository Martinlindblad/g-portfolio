import React, { Component, lazy, Suspense } from "react";
import SvgLogo from "../components/svg/logoSvg.js"
import BurgerMenu from "../components/burgerMenu/burgerMenu.js"
import Tiles from "../components/banner/banner.js"
import About from "../components/about/about.js"
import RollingBackground from "../components/banner/rollingBackground.js";
import '../css/frontPage.scss'
import '../css/burgerMenu.scss'
import '../css/tiles.scss'
import '../css/rollingBackground.css'



class FrontPage extends Component {
    constructor() {
        super();
        this.state = {
            post: false,
        };
    }
    renderAbout(){

        window.addEventListener('scroll', () => {
            const isTop = window.scrollY < window.innerHeight + 50;
            if(isTop){
                this.setState({
                    post: true,
                })
            }
        });
    }


    render() {


        return (
            <div>
                <SvgLogo />
                <BurgerMenu />
                <div className="SpaceMaker"></div>
                <RollingBackground />
                <About />
            </div>

        )
    }

}

export default FrontPage