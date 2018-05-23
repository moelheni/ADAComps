import React from 'react'

class DropdownButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showHeaderMenu: false
    }
    this.toggleHeaderMenu = this.toggleHeaderMenu.bind(this)
  }

  toggleHeaderMenu () {
    this.setState({
      showHeaderMenu: !this.state.showHeaderMenu
    })
  }

  render () {
    let {menuButton, menu, inverseColor} = this.props
    return <div style={styles.DropdownButton}>
      <button
        onClick={this.toggleHeaderMenu}
        style={inverseColor ? { ...styles.MenuButton, color: 'white' } : styles.MenuButton}>
        {menuButton ? menuButton() : '...'}
      </button>
      {
        <div
          style={this.state.showHeaderMenu ? { ...styles.Menu, ...styles.MenuShowed } : styles.Menu}>
          {
            menu()
          }
        </div>
      }
    </div>
  }
}

const styles = {
  DropdownButton: {
    position: 'relative',
    display: 'inline-block'
  },
  MenuButton: {
    fontWeight: 'bold',
    fontSize: '1.4em',
    color: '#7e827f',
    position: 'relative'
  },
  Menu: {
    position: 'absolute',
    top: '35px',
    right: '0',
    backgroundColor: 'white',
    minWidth: '150px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.12)',
    opacity: 0,
    display: 'block',
    transition: 'all .5s',
    color: '#7e827f',
    zIndex: 9
  },
  MenuShowed: {
    opacity: 1
  }
}

export default DropdownButton
