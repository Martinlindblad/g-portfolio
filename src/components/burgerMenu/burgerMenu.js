import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }
  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }
  handleLinkClick() {
    this.setState({ menuOpen: false })
  }
  render() {
    // ;<div class="burger">
    //   <div class="hamburger">

    //   </div>
    // </div>
    const styles = {
      burger: {
        position: "fixed",
        width: "80px",
        height: "60px",
        top: "20px",
        right: "20px",
        zIndex: "10",
        display: "flex",
      },
    }
    const menu = ['Home','About', 'Me', 'Contact']
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick()
          }}
        >
          {val}
        </MenuItem>
      )
    })
    return (
      (
        <div style={styles.burger} onClick={()=> {this.handleMenuClick()}}>
          <MenuButton
            open={this.state.menuOpen}
            onClick={function(){ this.handleLinkClick()}} // Burger Lines
          ></MenuButton>
          <Menu open={this.state.menuOpen}>{menuItems}</Menu>
         
        </div>
      )
    )
  }
}

class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }

  handleHover() {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    const styles = {
      navLi: {
        // color: '#ffffff',
        fontFamily: "Raleway",
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: "1.5rem",
        display: "block",
        letterSpacing: "5px",
        fontWeight: "600",
        padding: "10px 0",
        transition: "all 0.3s ease",
        color: this.state.hover ? "#b7ac7f" : "white",
      },
    }
    return (
       <AnchorLink href={'#'+this.props.children}> <li
        style={styles.navLi}
        onMouseEnter={() => {
          this.handleHover()
        }}
        onMouseLeave={() => {
          this.handleHover()
        }}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </li> </AnchorLink> 
    )
  }
}

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open ? this.props.open : false,
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open })
    }
  }

  render() {
    const styles = {
      nav: {
        backgroundColor: "#2a2a2ad0",
        position: "fixed",
        zIndex: "9",
        top: "0",
        height: "100%",
        maxWidth: "515px",
        width: "100%",
        padding: "100px 40px 60px 40px",
        overflowY: "auto",
        transition: "transform 0.55s cubic-bezier(0.785, 0.135, 0.15, 0.86)",
        transform: this.state.open? "translateX(0%)": "translateX(100%)",
      },
      ul: {
        listStyleType: "none",
      },
    }
    return (
      <nav style={styles.nav} >
        {this.state.open ? (
          <ul style={styles.ul}>
            {this.props.children}
          </ul>
        ) : (
          null
        )}
      </nav>
    )
  }
}

class MenuButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.open ? this.props.open : "#b7ac7f",
    }

    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open })
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const styles = {
      hamburger: {
        display: "flex",
        alignSelf: "center",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100px",
        height: "40px",
        cursor: "pointer",
      },
      line: {
        alignSelf: "flex-end",
        height: "4px",
        width: "100%",
        background: "#3E4651",
        zIndex: '100'
      },
      line1: {
        backgroundColor: "#b7ac7f",
        width: "100%",
        animation: "burger-hover 3s infinite",
      },
      line2: {
        backgroundColor: "#b7ac7f",
        width: "35%",
        transition: "all 600ms ease-in-out",
        animation:
          "burger-hover 3s infinite ease-in-out alternate forwards 200ms",
      },
      line3: {
        backgroundColor: "#b7ac7f",
        width: "50%",
        transition: "all 600ms ease-in-out",
        animation:
          "burger-hover 3s infinite ease-in-out alternate forwards 400ms",
      },
      line4: {
        backgroundColor: "#b7ac7f",
        width: "75%",
        transition: "all 600ms ease-in-out",
        animation:
          "burger-hover 3s infinite ease-in-out alternate forwards 600ms",
      },
    }
    return (
      <div
        style={styles.hamburger}
        onClick={this.handleClick}
      >
        <div style={{ ...styles.line, ...styles.line4 }}></div>
        <div style={{ ...styles.line, ...styles.line3 }}></div>
        <div style={{ ...styles.line, ...styles.line2 }}></div>
        <div style={{ ...styles.line, ...styles.line1 }}></div>
      </div>
    )
  }
}

export default BurgerMenu
