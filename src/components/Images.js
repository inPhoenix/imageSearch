import React from "react";

const Images = ({ images }) => {
  if (images) {
    return images.map(image => {
      const { farm, server, secret, id } = image;
      return (
        <img
          src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
          key={id}
          className="images"
        />
      );
    });
  }
};

export default Images;
