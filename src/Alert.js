import React from 'react'

import {Separator} from './Utils'
import Button from './Button'

class Alert extends React.Component {
  render () {
    let {kind, title, message, onConfirm, closeFunction, showen} = this.props
    return <div style={{
      ...styles.AlertContainer,
      opacity: showen ? '1' : '0',
      zIndex: showen ? '99999' : '-1'
    }} onClick={closeFunction}>
      <div style={{
        ...styles.Alert,
        opacity: showen ? '1' : '0',
        marginTop: showen ? 0 : '200px'
      }} onClick={(e) => e.stopPropagation()}>
        <div style={styles.AlertIcon}>
          {
            kind === 'success' && <i className='far fa-check-square' />
          }
        </div>
        <div style={styles.AlertTitle}>
          <h1>{title}</h1>
        </div>
        <Separator color='white' />
        <div style={styles.AlertMessage}>
          {
            message
          }
        </div>
        <div style={styles.AlertButton}>
          <Button lightColor onClick={onConfirm}>Confirm</Button>
        </div>
      </div>
    </div>
  }
}

const styles = {
  AlertContainer: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 10
  },
  Alert: {
    width: '300px',
    background: 'linear-gradient(to right, #4675aa 0%,#385b96 100%)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px',
    transition: 'all 0.5s ease'
  },
  AlertIcon: {
    fontSize: '2em',
    marginTop: '30px'
  },
  AlertButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    marginTop: '30px'
  }
}

export default Alert
