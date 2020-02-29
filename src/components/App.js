import React, { useState } from "react";
import { connect } from "react-redux";
import { searchImages } from "../actions";
import Pagination from "./Pagination";

const App = ({ images, searchImages }) => {
  const [value, setValue] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(20);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImage = images.slice(indexOfFirstImage, indexOfLastImage);
  const paginate = pageNumber => setCurrentPage(pageNumber);

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
      <Pagination
        imagesPerPage={imagesPerPage}
        totalPosts={images.length}
        paginate={paginate}
      />
      <input
        value={value}
        onChange={handleChange}
        className="input"
        placeholder="photos"
      />
      {images && renderImages(currentImage)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    images: state.images.data.photo
  };
};
export default connect(mapStateToProps, { searchImages })(App);
