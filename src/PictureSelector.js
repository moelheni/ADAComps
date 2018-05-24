import React from 'react'
import styled from 'styled-components'

const PictureSelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
`

const PictureCircle = styled.div`
  height: 100px;
  width: 100px;
  background-color: #dcded9;
  color: #b8c1be;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 2em;
  font-weight: bold;
  cursor: pointer;
  &:hover{
    background-color: #c5c7c2;
    color: white;
  }
`

class PictureSelector extends React.Component {
  render () {
    return <PictureSelectorContainer>
      <PictureCircle>+</PictureCircle>
    </PictureSelectorContainer>
  }
}

export default PictureSelector
