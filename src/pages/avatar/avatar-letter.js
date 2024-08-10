import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    gap: '12px',
  },
  imageContainer: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  images: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    width: "100%",
    height: "100%",
    fontWeight: 700
  }
}

const AvatarLetter = () => {
  const images = [
    { letter: "C", color: "#f1f1f1" },
    { letter: "H", color: "#efdcaa" },
    { letter: "I", color: "#cccbbb" },
    { letter: "U", color: "#8ba0a4" },
  ];
  return (
    <div style={styles.container}>
      {images.map((item) => {
        return (
          <div key={item} style={styles.imageContainer}>
            <p style={{ ...styles.images, background: item.color }}>{item.letter}</p>
          </div>
        )
      })}
    </div>
  )
}

export default AvatarLetter
