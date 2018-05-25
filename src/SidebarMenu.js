import React from 'react'
import styled, {css} from 'styled-components'

const SidebarHolder = styled.div`
  position: fixed;
  width: 310px;
  height: 100%;
  overflow: hidden;
  top: 0;
  right: 0;
  z-index: -1;
  ${props => props.isVisible && css`
    z-index: 999999;
  `}
`

const SidebarContainer = styled.div`
  position: absolute;
  right: -300px;
  top: 0;
  height: 100%;
  width: 300px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  position: absolute;
  ${props => props.isVisible && css`
    right: 0;
  `}
`

const FaTimes = styled.i`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  color: #aaa;
  &:hover{
    color: #333;
  }
`

class SidebarMenu extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isVisible: props.isVisible
    }
  }
  componentWillReceiveProps (props) {
    if (!props.isVisible) {
      setTimeout(() => {
        this.setState({isVisible: false})
      }, 500)
    } else {
      this.setState({isVisible: true})
    }
  }
  render () {
    let {children, isVisible, onClose} = this.props
    return <SidebarHolder isVisible={this.state.isVisible}>
      <SidebarContainer isVisible={isVisible}>
        <FaTimes onClick={onClose} className='fa fa-times' />
        {children}
      </SidebarContainer>
    </SidebarHolder>
  }
}

export default SidebarMenu
