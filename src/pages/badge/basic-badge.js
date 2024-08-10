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
    top: "32%",
    left: "50.5%",
    background: "#90CAF9",
    width: "10px",
    height: "10px",
    borderRadius: "50%"
  }
}
const BasicBadge = () => {
  return (
    <div style={styles.container}>
      <NotificationsIcon />
      <div style={styles.bubbleTop} />
    </div>
  )
}

export default BasicBadge
