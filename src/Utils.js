import React from 'react'
import styled from 'styled-components'

const SeparatorContainer = styled.div`
  border: solid 1px #c8c9c5;
  margin: 15px 0;
  width: 100%;
  box-sizing: border-box
`

export const Separator = ({color}) => (
  <SeparatorContainer style={{border: `solid 1px ${color}`}} />
)
