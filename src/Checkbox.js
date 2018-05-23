import React from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  color: #c8c9c5;
  cursor: pointer;
  &:hover{
    color: #879597;
  }
`

const CheckboxCheckedContainer = styled.div`
  color: #879597;
  cursor: pointer;
`

const CheckboxLabelContainer = styled.div`
  margin-left: 5px;
  display: inline;
`

// take 2 props: checked and onChange(checked)
class Checkbox extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: props.checked || false
    }

    this.onClick = this.onClick.bind(this)
  }
  onClick () {
    this.setState({
      checked: !this.state.checked
    }, () => this.props.onChange && this.props.onChange(this.state.checked))
  }
  renderInside () {
    const { children } = this.props
    return (
      <React.Fragment>
        <i className={this.state.checked ? 'fas fa-circle' : 'far fa-circle'} />
        <CheckboxLabelContainer>
          {children}
        </CheckboxLabelContainer>
      </React.Fragment>
    )
  }
  render () {
    if (this.state.checked) {
      return <CheckboxCheckedContainer onClick={this.onClick}>
        {
          this.renderInside()
        }
      </CheckboxCheckedContainer>
    }
    return (
      <CheckboxContainer onClick={this.onClick}>
        {
          this.renderInside()
        }
      </CheckboxContainer>
    )
  }
}

export default Checkbox
