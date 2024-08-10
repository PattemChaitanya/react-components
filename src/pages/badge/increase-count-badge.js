import React, { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "30px",
    paddingBottom: "30px",
    position: "relative"
  },
  bubbleTop: {
    position: "absolute",
    top: "15%",
    left: "50.5%",
    background: "#90CAF9",
    padding: "2px",
    minWidth: "20px",
    height: "fit-content",
    borderRadius: "10px",
    color: "white",
    textAlign: "center",
    lineHeight: "20px",
    fontSize: "16px"
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  buttonItem: {
    padding: "6px 20px",
    fontSize: "14px",
    border: "0.5px solid #ddd",
    borderRadius: "8px"
  }
}

const IncreaseCountBadge = () => {
  const [count, setCount] = useState(0);
  console.log(count)
  return (
    <div style={styles.container}>
      <div>
        <NotificationsIcon />
        {count > 0 && <p style={styles.bubbleTop}>{count <= 10 ? count : "10+"}</p>}
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.buttonItem} onClick={() => setCount((prev) => prev > 0 && prev - 1)}>-</button>
        <button style={styles.buttonItem} onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  )
}

export default IncreaseCountBadge
