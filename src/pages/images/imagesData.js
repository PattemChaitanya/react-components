import ImageCarousel from "./imageCarousel";
import ImageSlider from "./imageSlider";
import Mansory from "./mansory";
import ShuffleImage from "./shuffleImages";

export const jsonToDisplay = [
  {
    component: <ImageCarousel />,
    open: false,
    toDisplay: `
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
          alt="Slide"
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
`
  },
  {
    component: <ImageSlider />,
    open: false,
    toDisplay: `
import React, { useState, useEffect } from 'react';
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

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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
          alt="Slide"
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

export default ImageSlider;
`
  },
  {
    component: <Mansory />,
    open: false,
    toDisplay: `
import React from 'react';
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

const Mansory = () => {
  return (
    <div style={styles.masonryWithColumns}>
      {images.map((src, index) => (
        <div key={index} style={styles.masonryWithColumnsDiv}>
          <img src={src} alt="img" />
        </div>
      ))}
    </div>
  );
};

const styles = {
  masonryWithColumns: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
    gap: '10px',
    maxWidth: '100%',
  },
  masonryWithColumnsDiv: {
    flex: '1 1 auto',
    margin: '0 10px 10px 0',
    textAlign: 'center',
    fontFamily: 'system-ui',
    fontWeight: '900',
    fontSize: '2rem',
  },
}

export default Mansory;
`
  },
  {
    component: <ShuffleImage />,
    open: false,
    toDisplay: `
import React, { useState } from 'react';
import Flower1 from "../../assets/mansoryImages/1.jpg";
import Flower2 from "../../assets/mansoryImages/2.jpg";
import Flower3 from "../../assets/mansoryImages/3.jpg";
import Flower4 from "../../assets/mansoryImages/4.jpg";
import Flower5 from "../../assets/mansoryImages/5.jpg";
import Flower6 from "../../assets/mansoryImages/6.jpg";
import Flower7 from "../../assets/mansoryImages/7.jpg";

const initialImages = [
  Flower1,
  Flower2,
  Flower3,
  Flower4,
  Flower5,
  Flower6,
  Flower7,
];

const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const ImageGrid = () => {
  const [images, setImages] = useState(initialImages);

  const handleShuffle = () => {
    setImages(shuffleArray(images));
  };

  return (
    <div>
      <button onClick={handleShuffle} style={styles.button}>Shuffle</button>
      <div style={styles.gridContainer}>
        {images.map((src, index) => (
          <div key={index} style={styles.gridItem}>
            <img src={src} alt="img" style={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  button: {
    marginBottom: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  gridContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
  gridItem: {
    flex: '1 1 calc(33.333% - 10px)',
    boxSizing: 'border-box',
    position: 'relative',
    maxWidth: 'calc(33.333% - 10px)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
};

export default ImageGrid;
`
  }
]