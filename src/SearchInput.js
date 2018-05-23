import React from 'react'
import {Input} from './Inputs'
import Button from './Button'

class SearchInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange (e) {
    this.setState({
      value: e.target.value
    })
  }
  onSubmit (e) {
    e.preventDefault()
    this.props.onSearch(this.state.value)
  }
  render () {
    let {filled, placeholder} = this.props
    return <form onSubmit={this.onSubmit}>
      {
        filled &&
        <div style={styles.SearchInput}>
          <Input placeholder={placeholder} onChange={this.onChange} style={{border: 'none'}} />
          <Button filled style={{width: '45px'}}>
            <i className='fas fa-search' />
          </Button>
        </div>
      }
      {
        !filled &&
        <div style={styles.SearchInputBordered}>
          <Input placeholder={placeholder} onChange={this.onChange} style={{border: 'none'}} />
          <Button righty style={{width: '45px', margin: '4px 0'}}>
            <i className='fas fa-search' />
          </Button>
        </div>
      }
    </form>
  }
}

const styles = {
  SearchInput: {
    display: 'flex',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  SearchInputBordered: {
    display: 'flex',
    border: 'none',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  }
}

export default SearchInput
