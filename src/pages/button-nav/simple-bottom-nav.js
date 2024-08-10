import React from "react";

const styles = {
  container: {
    width: "80%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: "10px 0",
    marginInline: "auto",
    borderRadius: "4px",
  },
  textCenter: {
    textAlign: "center",
  },
  svgSize: { width: "24px", height: "24px" },
};

const SimpleBottomNav = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textCenter}>
        <svg viewBox="0 0 24 24" style={styles.svgSize}>
          <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        <div>Home</div>
      </div>
      <div style={styles.textCenter}>
        <svg viewBox="0 0 24 24" style={styles.svgSize}>
          <path
            fill="currentColor"
            d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
        <div>Search</div>
      </div>
      <div style={styles.textCenter}>
        <svg viewBox="0 0 24 24" style={styles.svgSize}>
          <path
            fill="currentColor"
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
        </svg>
        <div>Profile</div>
      </div>
    </div>
  );
};

export default SimpleBottomNav;
