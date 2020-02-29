import React from "react";
import { array } from "prop-types";

const Images = ({ images }) => {
  return images.map(image => {
    const { farm, server, secret, id } = image;
    return (
      <img
        src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        key={id}
        alt='searched'
        className="images"
      />
    );
  });
};

Images.propTypes = {
  images: array.isRequired
};

export default Images;
