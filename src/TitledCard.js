import React from 'react'

import TitleAndSub from './TitleAndSub'

class TitledCard extends React.Component {
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

  hideHeaderMenu () {
    this.setState({
      showHeaderMenu: false
    })
  }

  render () {
    let {title, subTitle, menu, content, width, background, inverseColor, menuButton} = this.props
    let color = '#7e827f'
    if (inverseColor) {
      color = 'white'
    }
    return (
      <div style={{...styles.TitledCard, width, background: (background || 'white'), color}}>
        <header style={styles.TitledCard.Header}>
          <TitleAndSub title={title} subTitle={subTitle} color={color} />
          {
            menu &&
            <React.Fragment>
              <button
                onClick={this.toggleHeaderMenu}
                style={inverseColor ? { ...styles.TitledCard.Header.MenuButton, color: 'white' } : styles.TitledCard.Header.MenuButton}>
                {menuButton ? menuButton() : '...'}
              </button>
              {
                <div
                  style={this.state.showHeaderMenu ? { ...styles.TitledCard.Header.Menu, ...styles.TitledCard.Header.MenuShowed } : styles.TitledCard.Header.Menu}>
                  {
                    menu()
                  }
                </div>
              }
            </React.Fragment>
          }
        </header>
        <main style={styles.TitledCard.Main}>
          {
            content && content()
          }
        </main>
      </div>
    )
  }
}

const styles = {
  TitledCard: {
    padding: '20px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    display: 'inline-block',
    margin: '20px',
    position: 'relative',
    maxHeight: '100%',
    verticalAlign: 'top',
    background: 'white',
    zIndex: 0,
    Header: {
      borderBottom: 'solid 1px currentColor',
      paddingBottom: '20px',
      MenuButton: {
        position: 'absolute',
        top: '10px',
        right: '20px',
        fontWeight: 'bold',
        fontSize: '1.4em',
        color: '#7e827f'
      },
      Menu: {
        position: 'absolute',
        top: '40px',
        right: '20px',
        backgroundColor: 'white',
        minWidth: '150px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.12)',
        opacity: 0,
        transition: 'all .5s',
        color: '#7e827f'
      },
      MenuShowed: {
        opacity: 1
      }
    },
    Main: {
      margin: '20px 0'
    }
  }
}

export default TitledCard
