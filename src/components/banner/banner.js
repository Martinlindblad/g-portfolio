import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Tiles extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      click: false,
    }
  }
  handleClick() {
    this.setState({ click: !this.state.click })
  }

  render() {
    const styles = {
      container: {
        height: "40vh",
        width: "60vw",
        margin: "0% auto",
        display: "flex",
        justifyContent: "center",
        animation: ".3s ease-in-out both fade-in",
        flexDirection: "row",
        cursor: "pointer",
        position: 'relative',
        bottom: '7vh'
      },
    }
    let tooSmall = window.screen.width;
    const title = ["About", "Me", "Contact"]
    const titels = title.map((val, index) => {
      return (
        
        <TileItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick()
          }}
        >
          {val}
        </TileItem>
      )
    })
    return <div  className="tile-container" style={styles.container}>{titels}</div>
  }
}

class TileItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      click: false,
    }
  }

  render() {
    const styles = {
      tiles: {
        animation: '.4s cubic-bezier(.25, .25, .25, 1.25) both fade-in',
        background: "#e6e6e6",
        borderRadius: "4px",
        width: "18vw",
        height: "20vh",
        margin: "0 auto",
        textAlign: "center",
        boxShadow: '0px 1px 0px'

      },
      titles:{
        fontSize: "2rem",
        transform: 'translateY(5vh)',
      }
    }
    return (
      <div style={styles.tiles}>
        <AnchorLink href={'#'+this.props.children}>
        <h2 style={styles.titles}className="tile">{this.props.children}</h2>
      </AnchorLink>
      </div>
    )
  }
}

export default Tiles
