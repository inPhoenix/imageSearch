import React from "react";
import { array, func } from "prop-types";

const Images = ({ images, onImageSelect }) => {
  return images.map(image => {
    const { farm, server, secret, id } = image;

    return (
      <div onClick={() => onImageSelect(image)} key={id}>
        <img
          src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
          alt="searched"
          className="images"
        />
      </div>
    );
  });
};

Images.propTypes = {
  images: array.isRequired,
  onImageSelect: func.isRequired
};

export default Images;
