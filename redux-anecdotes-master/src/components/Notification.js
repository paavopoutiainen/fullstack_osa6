import React from 'react'
import { connect } from "react-redux"

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const notification = props.notification
  
  if(notification){
    return (
      <div style={style}>
        {notification}
      </div>
    )
  } else {
    return null
  }  
}

const mapStateToProps = (state) => {
  return { notification: state.notification }
}

export default connect(mapStateToProps)(Notification)