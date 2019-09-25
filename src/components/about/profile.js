import React from 'react'

import Delay from 'react-delay-render';

// import { useSpring, animated } from "react-spring"
import '../../css/about/profile.css'
import Media from '../../media/img/profil.jpg'

const Profile = () => {

    return(
        <div className="profile">
            <img src={Media}/> 
        </div>
        )
    }
    export default Delay({delay: 700, onRender: Profile})(Profile)
