import styled from 'styled-components'

const FormCard = styled.div`
  border-top: solid 4px #3f6ea5;
  padding: 30px;
  transition: all .3s;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  display: inline-block;
  margin: 20px;
  position: relative;
  width: 400px;
  max-height: 100%;
  vertical-align: top;
  text-align: center;
  z-index: 0;
  &:focus{
    outline: none;
    border: solid 2px #879597;
  }
`

export default FormCard
