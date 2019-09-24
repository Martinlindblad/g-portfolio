import React from "react"
// import { Spring } from "react-spring/renderprops"
import { useSpring, animated } from "react-spring"
import "../css/landingPage.scss"

const LandingPage = () => {
  // const spin = useSpring({
  //   to: [
  //     {
  //       transform: "translate3d(0px,0,0) scale(5) rotate(3600deg)",
  //       config: { duration: 300 },
  //       boxShadow: "0px 0px 0px #fdec6e",
  //       opacity: "0",
  //     },
  //   ],
  //   from: {
  //     transform: "translate3d(0px,0,0) scale(0) rotate(0deg)",
  //     boxShadow: "0px 0px 30px #fdec6e",
  //     opacity: "1",
  //     easing: "easeOutExpo",
  //   },
  // })
  const spinDouble = useSpring({
    to: [
      { opacity: "1", transform: "rotate(500deg)", config: { duration: 2000 } },
    ],
    from: { opacity: "0.1", transform: "rotate(40deg)", easing: "easeOutExpo" },
  })
  const spinKanji = useSpring({
    to: [{ transform: "rotate(30deg)", config: { duration: 600 } }],
    from: { transform: "rotate(0deg)", easing: "easeOutExpo" },
    delay: 1500,
  })
  const goldCircleFade = useSpring({
    to: [{ opacity: "1", config: { duration: 1000 } }],
    from: { opacity: "0", easing: "easeOutExpo" },
    delay: 300,
  })
  const textPopAnimation = useSpring({
    to: async next => {
      await next({ opacity: 1 })
      await next({ transform: "scale(0.9)" })
      await next({ fontWeight: "small" })
      await next({ transform: "scale(1.1)" })
      await next({ fontWeight: "bolder" })
      await next({ transform: "scale(1)" })
    },
    from: {
      fontWeight: "bolder",
      opacity: 0,
      transform: "scale(1)",
      easing: "ease-in-out",
    },
    config: { duration: 300 },
    delay: 1000,
  })

  return (
    <div className="wrapper">
      <animated.div>
        <animated.h1 className="ml8">
          <animated.span className="letters-container">
            <animated.span
              style={textPopAnimation}
              className="letters letters-left"
            >
              M
              <animated.span style={spinKanji} className="letters bang">
              マーチン
              </animated.span>
              L
            </animated.span>
          </animated.span>
          <animated.span className="circle circle-white"></animated.span>
          <animated.span
            style={goldCircleFade}
            className="circle circle-dark"
          ></animated.span>
          <animated.span className="circle circle-container">
            <animated.span
              style={spinDouble}
              className="circle circle-dark-dashed"
            ></animated.span>
          </animated.span>
        </animated.h1>
      </animated.div>
    </div>
  )
}

export default LandingPage
