import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    position: "relative"
  },
  bubbleTop: {
    position: "absolute",
    top: "25%",
    left: "50.5%",
    background: "#90CAF9",
    padding: "1px",
    minWidth: "20px",
    height: "fit-content",
    borderRadius: "10px",
    color: "white",
    textAlign: "center",
    lineHeight: "20px",
    fontSize: "16px"
  }
}

const NumberBadge = () => {
  return (
    <div style={styles.container}>
      <NotificationsIcon />
      <p style={styles.bubbleTop}>1</p>
    </div>
  )
}

export default NumberBadge
