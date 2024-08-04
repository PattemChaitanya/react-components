import Mansory from "../images/mansory";

export const jsonToDisplay = [
  {
    component: <Mansory />,
    open: false,
    toDisplay: `
import React from 'react';
import "./mansory.css";
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
    <div className="masonry-container">
      {images.map((src, index) => (
        <div className="masonry-item" key={index}>
          <img src={src} alt={img- index} />
        </div>
      ))}
    </div>
  )
}

export default Mansory

    `
  }
]