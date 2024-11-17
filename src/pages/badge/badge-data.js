import BasicBadge from "./basic-badge";
import IncreaseCountBadge from "./increase-count-badge";
import NumberBadge from "./number-badge";

export const jsonToPageDisplay = {
  pageTitle: "Badge",
  description: "Variety of Badge",
  jsonToDisplay: [
    {
      title: "Basic badge",
      subTitle: "Basic badge",
      component: <BasicBadge />,
      open: false,
      toDisplay: `
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
          top: "30%",
          left: "50%",
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
    `,
    },
    {
      title: "Number badge",
      subTitle: "Number badge",
      component: <NumberBadge />,
      open: false,
      toDisplay: `
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
          minHeight: "20px",
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
    `,
    },
    {
      title: "Increase badge count",
      subTitle: "Increase badge count",
      component: <IncreaseCountBadge />,
      open: false,
      toDisplay: `
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
        {count > 0 && <p style={styles.bubbleTop}>{count <= 9 ? count :       "10+"}</p>}
            </div>
            <div style={styles.buttonContainer}>
        <button style={styles.buttonItem} onClick={() => setCount     ((prev) => prev > 0 && prev - 1)}>-</button>
        <button style={styles.buttonItem} onClick={() => setCount     ((prev) => prev + 1)}>+</button>
            </div>
          </div>
        )
      }

      export default IncreaseCountBadge
    `,
    },
  ],
};
