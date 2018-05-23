import styled from 'styled-components'
import c from './Checkbox'

export const Checkbox = c

export const Input = styled.input`
  border: solid 1px #d8d9d5;
  padding: 7px;
  fontSize: 16px;
  width: 100%;
  transition: 'all .3s';
  box-sizing: border-box;
  &:focus{
    outline: none;
    border: solid 1px #879597;
  }
`

export const Textarea = styled.textarea`
  border: solid 1px #d8d9d5;
  padding: 7px;
  fontSize: 16px;
  width: 100%;
  transition: 'all .3s';
  box-sizing: border-box;
  &:focus{
    outline: none;
    border: solid 1px #879597;
  }
`
