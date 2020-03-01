import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { searchImages, selectImage } from "../actions";
import Pagination from "./Pagination";
import Images from "./Images";
import Modal from "./Modal";

const App = ({ images, searchImages, selectImage, selectedImage }) => {
  useEffect(() => {
    searchImages("landscapes");
  }, [searchImages]);

  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(20);
  const [showModal, setShowModal] = useState(false);

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
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderModal = () => {
    const { farm, server, id, secret } = selectedImage;
    return (
      <Modal onDismiss={closeModal}>
        <img
          alt="selected"
          src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`}
        />
      </Modal>
    );
  };

  return (
    <div className="wrapper">
      {showModal && renderModal(images)}
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
          placeholder="search"
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
  images: state.images.data.photo,
  selectedImage: state.images.selected
});

export default connect(mapStateToProps, { searchImages, selectImage })(App);
