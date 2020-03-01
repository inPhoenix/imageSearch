import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchImages, selectImage } from "../actions";
import debounce from "../utils/debounce";
import Pagination from "./Pagination";
import Images from "./Images";
import Modal from "./Modal";
import Header from "./Header";

const App = ({
  images,
  searchImages,
  selectImage,
  selectedImage,
  isLoading,
  error
}) => {
  useEffect(() => {
    searchImages("landscapes");
  }, [searchImages]);

  const delayedSearch = useCallback(
    debounce(q => searchImages(q), 300),
    []
  );

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
    delayedSearch(event.target.value);
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
      <Header />
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
        {isLoading && <> Loading... </>}
        {error && <> {error} </>}
        {images && (
          <Images images={currentImage} onImageSelect={handleImageSelect} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    images: state.images.data.photo,
    selectedImage: state.images.selected,
    isLoading: state.images.isLoading,
    error: state.images.error
  };
};

export default connect(mapStateToProps, { searchImages, selectImage })(App);
