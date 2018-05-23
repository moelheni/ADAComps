import React from 'react'

const List = ({children, striped, width}) => {
  return <ul style={{...styles.List, width}}>
    {
      React.Children.map(children, (child, i) => <li style={i % 2 === 0 && striped ? {...styles.ListItem, backgroundColor: '#f2f1f1'} : styles.ListItem}>{child}</li>)
    }
  </ul>
}

const styles = {
  List: {
    margin: '0',
    padding: '0',
    listStyle: 'none'
  },
  ListItem: {
    margin: '0',
    padding: '10px'
  }
}

export default List
