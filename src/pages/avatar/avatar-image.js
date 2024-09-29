import React from "react";
import Flower1 from "../../assets/mansoryImages/1.jpg";
import Flower2 from "../../assets/mansoryImages/2.jpg";
import Flower3 from "../../assets/mansoryImages/3.jpg";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    gap: "12px",
  },
  imageContainer: {
    width: "50px",
    height: "50px",
  },
  images: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },
};

const AvatarImage = () => {
  const images = [Flower1, Flower2, Flower3];

  return (
    <div style={styles.container}>
      {images.map((item) => {
        return (
          <div key={item} style={styles.imageContainer}>
            <img src={item} alt="flower" style={styles.images} />
          </div>
        );
      })}
    </div>
  );
};

export default AvatarImage;
