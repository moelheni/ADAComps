import React from 'react'

const TitleAndSub = ({title, subTitle, color}) => {
  return <div>
    <h1 style={color ? { ...styles.Title, color: color } : styles.Title}>{title}</h1>
    {
      subTitle &&
      <h2 style={color ? { ...styles.SubTitle, color: color } : styles.SubTitle}>{subTitle}</h2>
    }
  </div>
}

const styles = {
  Title: {
    color: '#9e9f9e',
    fontSize: '1.3em',
    lineHeight: '1.2',
    margin: '5px 0',
    fontWeight: 'normal'
  },
  SubTitle: {
    color: '#bfc0bf',
    fontSize: '1em',
    lineHeight: '1.2',
    margin: '5px 0',
    fontWeight: 'normal'
  }
}

export default TitleAndSub
