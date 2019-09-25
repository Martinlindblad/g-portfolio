import React from 'react'

// import Delay from 'react-delay-render';

import { useSpring, animated } from "react-spring"
import '../../css/about/profile.css'
import Media from '../../media/img/profil.jpg'
import '../../css/about/about.css'


const Profile = () => {
    const goldCircleFade = useSpring({
        to: [{ opacity: "1", config: { duration: 1000 } }],
        from: { opacity: "0", easing: "easeOutExpo" },
        delay: 300,
      })

    return(
        <animated.div style={goldCircleFade} className="profile">
            <img src={Media}/> 
        </animated.div>
        )
    }
    export default Profile
