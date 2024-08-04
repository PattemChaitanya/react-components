import React, { useState } from 'react';
import Flower1 from "../../assets/mansoryImages/1.jpg";
import Flower2 from "../../assets/mansoryImages/2.jpg";
import Flower3 from "../../assets/mansoryImages/3.jpg";
import Flower4 from "../../assets/mansoryImages/4.jpg";
import Flower5 from "../../assets/mansoryImages/5.jpg";
import Flower6 from "../../assets/mansoryImages/6.jpg";
import Flower7 from "../../assets/mansoryImages/7.jpg";

const images = [
  Flower1,
  Flower2,
  Flower3,
  Flower4,
  Flower5,
  Flower6,
  Flower7,
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={styles.slider}>
      <button style={{ ...styles.button, ...styles.prev }} onClick={goToPrevious}>
        ❮
      </button>
      <div style={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          style={styles.image}
        />
      </div>
      <button style={{ ...styles.button, ...styles.next }} onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

const styles = {
  slider: {
    position: 'relative',
    width: '500px',
    margin: 'auto',
    overflow: 'hidden',
    borderRadius: '10px'
  },
  imageContainer: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out'
  },
  image: {
    width: '500px',
    height: '300px'
  },
  button: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    color: 'white',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1
  },
  prev: {
    left: '10px'
  },
  next: {
    right: '10px'
  },
};

export default ImageCarousel;
