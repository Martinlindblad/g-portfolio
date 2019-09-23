import React from 'react';

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
      gridContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr'
      },
      container: {
        left: '50%',
        position: 'relative',
        top: '50%',
        // transform: 'translateY(-50%) translateX(-50%)',
        width: '330px',
      },
  
    }
    const title = ['About', 'Me', 'Contact']
    const titels = title.map((val, index) => {
      return (
        <div style={styles.gridContainer}>

        <div style={styles.container}>
        <TileItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick()
          }}
          >
        </TileItem>
          {val}
        </div>
        </div> // grid container
      )
    })
    return(
      <h1 >
        {titels}
      </h1>
    )
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
        animation: '.3s ease-in-out both fade-in',
        background: '#cfcfdf',
        borderRadius: '4px',
        float: 'left',
        height: '30vh',
        margin: ' 5px',
        width: '20vw',
      }
    }
    return (
      <div className="tile"
        style={styles.tiles}
      >
        <h1>
        {this.props.child}
        </h1>
      </div>
    )
  }
}


export default Tiles