import React, { useState } from "react";
import { connect } from "react-redux";
import { searchImages } from "../actions";

const App = ({ images, searchImages }) => {
  const [value, setValue] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
    searchImages(event.target.value);
  };

  const renderImages = images => {
    return images.map(photo => {
      const { farm, server, secret, id } = photo;
      return (
        <div key={photo.id}>
          <img
            src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
            key={id}
            className="image"
          />
        </div>
      );
    });
  };

  return (
    <div className="input-container">
      <input
        value={value}
        onChange={handleChange}
        className="input"
        placeholder="photos"
      />
      {images && renderImages(images)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    images: state.images.data.photo
  };
};
export default connect(mapStateToProps, { searchImages })(App);
