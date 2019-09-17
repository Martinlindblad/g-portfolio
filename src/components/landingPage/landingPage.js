import React from "react"
import { Spring } from "react-spring/renderprops"
import { useSpring, animated } from "react-spring"

const LandingPage = () => (
  <Spring
    from={{
      opacity: 0,
      transform: "translate3d(0px,0,0) scale(2) rotateX(90deg)",
      boxShadow: "0px 100px 150px -10px #2D3747",
      textShadow: "0px 5px 0px white",
    }}
    to={{
      opacity: 1,
      transform: "translate3d(0px,0,0) scale(1) rotateX(0deg)",
      boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.4)",
      textShadow: "0px 5px 15px rgba(255,255,255,0.5)",
    }}
    config={{ duration: 500 }}
  >
    {props => (
      <div className="wrapper" style={props}>
        <h1 className="ml8">
          <span className="letters-container">
            <span className="letters letters-left">
              M<span className="letters bang">真灯</span>L
            </span>
          </span>
          <span className="circle circle-white"></span>
          <span className="circle circle-dark"></span>
          <span className="circle circle-container">
            <span className="circle circle-dark-dashed"></span>
          </span>
        </h1>
      </div>
    )}
  </Spring>
​
const props = useSpring({
  from: { width: 10, height: 10 },
  to: async next => {
    // Create a delayed animation
    next({ width: 100, height: 100, delay: 2000 }) // 2 seconds
    // Immediately override the width animation
    next({ width: 50 }) // This creates a new animation which starts immediately,
    // and it prevents the delayed animation from changing
    // the width. The height will still animate in 2 seconds.
  },
})
const wave = () => (
  <animated.div className="letters" style={props}>i will fade</animated.div>
  )
) 
export default LandingPage
