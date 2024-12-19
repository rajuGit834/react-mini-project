import React, { useState, useEffect } from "react";

const imageDataSet = [
  { id: 1, imagePath: "/images/cat1.webp" },
  { id: 2, imagePath: "/images/cat2.webp" },
  { id: 3, imagePath: "/images/cat3.webp" },
  { id: 4, imagePath: "/images/cat4.webp" },
];

const ImageGallery = ({ onGalleryLoad }) => {
  const [selectedImage, setSelectedImage] = useState("");

  const handleClick = (imagePath) => {
    setSelectedImage(imagePath);
  };

  useEffect(() => {
    if (onGalleryLoad) {
      document.title = "Image Gallery";
      onGalleryLoad();
    }
  }, [onGalleryLoad]);

  return (
    <>
      {/* <Navbar title={"Image Gallery"}/> */}
      <div style={styles.imageMainContainer}>
        <a style={{ textDecoration: "underline" }}>Click on an image!</a>
        <div style={styles.imageContainer}>
          {imageDataSet.map((item) => (
            <img
              className="img"
              key={item.id}
              style={styles.img}
              src={item.imagePath}
              alt=""
              onClick={() => handleClick(item.imagePath)}
            />
          ))}
        </div>
        {selectedImage !== "" && (
          <div style={styles.result}>
            <h2>Selected Image</h2>
            <img style={styles.resultImage} src={selectedImage} alt="" />
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  imageMainContainer: {
    textAlign: "center",
    margin: "40px",
  },
  imageContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  img: {
    height: "200px",
    width: "200px",
    borderRadius: "20px",
    boxShadow: "5px 5px 15px -15px black, -5px -5px 15px -15px black",
    cursor: "pointer",
    transition: "0.3s ease",
    objectFit: "cover",
  },
  result: {
    marginTop: "20px",
  },
  resultImage: {
    marginTop: "20px",
    borderRadius: "20px",
    boxShadow: "10px 10px 15px -12px black, -10px -10px 15px -12px black",
    objectFit: "cover",
  },
};

export default ImageGallery;
