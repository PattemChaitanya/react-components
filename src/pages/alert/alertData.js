import SimpleAlert from "./simple-alert";

export const jsonToPageDisplay = {
  pageTitle: "Alert",
  description: "Variety of Alert",
  jsonToDisplay: [
    {
      title: "Simple alert",
      subTitle: "Simple Alert",
      component: <SimpleAlert />,
      open: false,
      toDisplay: `
import React, { useState } from 'react';

const Alert = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('info'); // info, success, warning, error

  const showAlert = (msg, alertType = 'info') => {
    setMessage(msg);
    setType(alertType);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000); // Alert will disappear after 3 seconds
  };

  const handleShowInfo = () => showAlert('This is an info alert.', 'info');
  const handleShowSuccess = () => showAlert('This is a success alert.', 'success');
  const handleShowWarning = () => showAlert('This is a warning alert.', 'warning');
  const handleShowError = () => showAlert('This is an error alert.', 'error');

  return (
    <div style={styles.container}>
      <div>
        <button style={styles.button} onClick={handleShowInfo}>Show Info</button>
        <button style={styles.button} onClick={handleShowSuccess}>Show Success</button>
        <button style={styles.button} onClick={handleShowWarning}>Show Warning</button>
        <button style={styles.button} onClick={handleShowError}>Show Error</button>
      </div>
      {visible && (
        <div style={{ ...styles.alert, ...styles[type] }}>
          {message}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  button: {
    margin: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  alert: {
    marginTop: '20px',
    padding: '15px',
    borderRadius: '5px',
    color: 'white',
    textAlign: 'center',
  },
  info: {
    backgroundColor: '#2196F3',
  },
  success: {
    backgroundColor: '#4CAF50',
  },
  warning: {
    backgroundColor: '#FF9800',
  },
  error: {
    backgroundColor: '#F44336',
  },
};

export default Alert;
    `,
    },
  ],
};
