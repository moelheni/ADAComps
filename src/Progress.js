import React from 'react'

const Progress = ({value, background, progressBackground, height}) => {
  return <div style={background ? {...styles.Progress, background, height: (height || '15px')} : {...styles.Progress, height}}>
    <div style={progressBackground
      ? {...styles.ProgressBar, height: (height || '15px'), width: (value || 0) + '%', background: progressBackground}
      : {...styles.ProgressBar, height: (height || '15px'), width: (value || 0) + '%'}} />
  </div>
}

const styles = {
  Progress: {
    background: '#ececeb',
    height: '15px',
    width: '100%'
  },
  ProgressBar: {
    background: 'linear-gradient(to right, #385b97 0%,#4780b3 100%)',
    height: '15px'
  }
}

export default Progress
