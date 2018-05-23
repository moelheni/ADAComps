import React from 'react'
import PropTypes from 'prop-types'

const Navbar = ({children}) => (
  <div style={styles.Navbar}>
    <div style={styles.Navbar.Logo}>
      ada.
    </div>
    <div style={styles.Navbar.RightSection}>
      {
        children
      }
    </div>
  </div>
)

Navbar.propTypes = {
  children: PropTypes.node
}

const styles = {
  Navbar: {
    backgroundColor: 'white',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    color: 'white',
    padding: '0 40px',
    boxSizing: 'border-box',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
    zIndex: 9,
    Logo: {
      fontSize: '1.4em',
      color: '#2a7bdb',
      fontWeight: 'bold'
    }
  }
}

export default Navbar
