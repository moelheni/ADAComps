import React from 'react'

class Form extends React.Component {
  render () {
    let { children, alignCenter } = this.props
    return <div style={alignCenter ? { ...styles.Form, textAlign: 'center' } : styles.Form}>
      <form {...this.props}>
        {
            React.Children.map(children, (child, i) => (
              <div style={styles.InputGroup}>
                {
                  child
                }
              </div>
            ))
        }
      </form>
    </div>
  }
}

const styles = {
  Form: {
    textAlign: 'left'
  },
  InputGroup: {
    margin: '15px 0'
  }
}

export default Form
