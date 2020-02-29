import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { searchImages, selectImage } from "../actions";
import Pagination from "./Pagination";
import Images from "./Images";

const App = ({ images, searchImages, selectImage, selectedImage }) => {
  useEffect(() => {
    searchImages("landscapes");
  }, [searchImages]);

  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(20);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImage =
    images && images.slice(indexOfFirstImage, indexOfLastImage);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleChange = event => {
    setValue(event.target.value);
    searchImages(event.target.value);
  };

  const handleImageSelect = photo => {
    selectImage(photo);
  };

  console.log("%c selectedImage", "background: red", selectedImage);
  return (
    <div className="wrapper">
      <Pagination
        imagesPerPage={imagesPerPage}
        totalPosts={images && images.length}
        paginate={paginate}
      />

      <div className="input-container">
        <input
          value={value}
          onChange={handleChange}
          className="input"
          placeholder="photos"
        />
      </div>
      <div className="item">
        {images && (
          <Images images={currentImage} onImageSelect={handleImageSelect} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  images: state.images.data.photo
});

export default connect(mapStateToProps, { searchImages, selectImage })(App);
