import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
  &:hover{
    background-color: #fafafa
  }
`

class SelectList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedItems: []
    }
  }
  toggleElement (el) {
    let elements = this.state.selectedItems.filter(e => e === el)
    if (elements.length === 0) {
      this.setState({
        selectedItems: this.state.selectedItems.concat(el)
      }, () => this.props.onChange(this.state.selectedItems))
    } else {
      this.setState({
        selectedItems: this.state.selectedItems.filter(e => e !== el)
      }, () => this.props.onChange(this.state.selectedItems))
    }
  }
  render () {
    let {children} = this.props
    let {selectedItems} = this.state
    return <ul style={styles.List}>
      {
        React.Children.map(children, (child, i) => (
          <Item
            onClick={() => this.toggleElement(child)}
            style={styles.ListItem}>
            {child}
            {
              selectedItems.indexOf(child) === -1 &&
              <i className='far fa-check-square' style={{color: '#aaa'}} />
            }
            {
              selectedItems.indexOf(child) !== -1 &&
              <i className='fas fa-check-square' style={{color: '#2a7bdb'}} />
            }
          </Item>
        ))
      }
    </ul>
  }
}

const styles = {
  List: {
    margin: '0',
    padding: '0',
    listStyle: 'none'
  },
  ListItem: {
    margin: '0',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: 'solid 1px #eee',
    cursor: 'pointer'
  }
}

export default SelectList
