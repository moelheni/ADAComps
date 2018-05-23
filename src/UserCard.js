import React from 'react'

const UserCard = ({children, picture, pictureSize, horizontal}) => {
  return <div style={horizontal ? {...styles.UserHorizontalCard, flexDirection: 'row'} : styles.UserHorizontalCard}>
    <div
      style={
        pictureSize
        ? {...styles.UserPicture, height: pictureSize, width: pictureSize, backgroundImage: `url(${picture})`}
        : {...styles.UserPicture, backgroundImage: `url(${picture})`}
      } />
    <div style={horizontal ? {textAlign: 'left'} : {textAlign: 'center'}}>
      {children}
    </div>
  </div>
}

const styles = {
  UserHorizontalCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  UserPicture: {
    height: '70px',
    width: '70px',
    backgroundSize: 'cover',
    marginRight: '10px',
    borderRadius: '50%'
  }
}

export default UserCard
