import React from 'react'
import styled, {css} from 'styled-components'

import {Separator} from './Utils'
import Button from './Button'

const AlertContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  opacity: 0;
  ${props => props.isVisible && css`
    z-index: 99999;
    opacity: 1;
  `}
`
const AlertBox = styled.div`
  width: 300px;
  background: linear-gradient(to right, #4675aa 0%,#385b96 100%);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  transition: all 0.5s ease;
  opacity: 0;
  margin-top: 200px
  ${props => props.isVisible && css`
    opacity: 1;
    margin-top: 0;
  `}
`
const AlertIcon = styled.div`
  font-size: 2em;
  margin-top: 30px;
`
const AlertButton = styled.div`
  display: flex;
  justifyContent: ;flex-end;
  width: 100%;
  margin-top: 30px;
  justify-content: flex-end;
`

class Alert extends React.Component {
  render () {
    const {
      children,
      isVisible,
      kind,
      message,
      title,
      onClose,
      onConfirm
    } = this.props
    return <AlertContainer isVisible={isVisible} onClick={onClose}>
      <AlertBox isVisible={isVisible} onClick={(e) => e.stopPropagation()}>
        <AlertIcon>
          {
            kind === 'success' && <i className='far fa-check-square' />
          }
        </AlertIcon>
        <div>
          <h1>{title}</h1>
        </div>
        <Separator color='white' />
        <div>
          {
            message || children
          }
        </div>
        <AlertButton>
          <Button lightColor onClick={onConfirm}>Confirm</Button>
        </AlertButton>
      </AlertBox>
    </AlertContainer>
  }
}

export default Alert
