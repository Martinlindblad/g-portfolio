import React from "react"
import { Spring } from "react-spring/renderprops"
import { useSpring, animated } from "react-spring"

const LandingPage = () => {
  const render = useSpring({
    // delay: 2000,
    transform: "translate3d(0px,0,0) scale(1) rotateX(360deg)",
    boxShadow: "0px 10px 20px 0px rgba(0,0,0,0.4)",
    borderBottom: "10px solid #2D3747",
    color: "blue", 
    shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
    textShadow: '0px 5px 15px rgba(255,255,255,0.5)',
    config: { delay: 3500 }
  })

  const wave = () => (
    <animated.div className="hej" style={render}>
      こんにちは
    </animated.div>
  )

  return (
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
      config={{ duration: 500 }, { delay: 1500 }}
    >
      {render => (
        <div style={render}>
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
          {wave()}
        </div>
      )}
    </Spring>
  )
}

export default LandingPage
