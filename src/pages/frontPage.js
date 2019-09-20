import React,{ Component } from "react";
import SvgLogo from "../components/svg/logoSvg.js"
import BurgerMenu from "../components/burgerMenu/burgerMenu.js"
import '../css/frontPage.scss'
import '../css/burgerMenu.scss'


class FrontPage extends Component{
    constructor(props){
        super(props)
        this.state ={ 
          a:[{
            background: "green",
            color: "white",
            padding: "1.5rem"
          }],
          b:[{
              backgroundColor: "red"
          }] };
    
    }

    render(){
        
        return(
        //   this.state.a.map(e=>console.log(e.background))
        //     // this.state.a
        <div>
            <SvgLogo />
            <BurgerMenu />
        </div>
            )

}
}
export default FrontPage