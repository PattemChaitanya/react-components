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
  const imagesHeight = ["200px", "160px", "210px", "140px", "200px", "120px", "180px"]
  return (
    <div style={styles.masonryWithColumns}>
      {images.map((src, index) => (
        <div key={index} style={{ ...styles.masonryWithColumnsDiv, height: imagesHeight[index] }}>
          <img src={src} alt={`img-${index}`} style={{ height: imagesHeight[index] }} />
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
