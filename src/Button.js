import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  border: solid 2px #3f6ea5;
  padding: 7px;
  color: #3f6ea5;
  transition: 'all .3s';
  &:hover{
    color: white;
    background-color: #3f6ea5;
  }
`

const ButtonInverseContainer = styled.button`
  border: solid 2px #3f6ea5;
  color: white;
  background-color: #3f6ea5;
  padding: 7px;
  transition: 'all .3s';
  &:hover{
    color: white;
    background-color: #3e6da4;
  }
`

const ButtonLightContainer = styled.button`
  border: solid 2px white;
  color: white;
  background-color: transparent;
  padding: 7px;
  transition: 'all .3s';
  &:hover{
    color: #3f6ea5;
    background-color: white;
  }
`

const ButtonRightContainer = styled.button`
  border-left: solid 1px #d3d3d2;
  color: #d3d3d2;
  background-color: transparent;
  padding: 7px;
  transition: 'all .3s';
  &:hover{
    color: #3f6ea5;
  }
`

const Button = ({children, filled, lightColor, righty, onClick, style}) => {
  if (filled) {
    return <ButtonInverseContainer onClick={onClick} style={style}>
      {children}
    </ButtonInverseContainer>
  }
  if (lightColor) {
    return <ButtonLightContainer onClick={onClick} style={style}>
      {children}
    </ButtonLightContainer>
  }
  if (righty) {
    return <ButtonRightContainer onClick={onClick} style={style}>
      {children}
    </ButtonRightContainer>
  }
  return <ButtonContainer onClick={onClick} style={style}>
    {children}
  </ButtonContainer>
}

export default Button
