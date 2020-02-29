import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchImages } from "../actions";
import Pagination from "./Pagination";

const App = ({ images, searchImages }) => {
  useEffect(() => {
    searchImages("landscapes");
  }, []);

  const [value, setValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(20);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImage = images && images.slice(indexOfFirstImage, indexOfLastImage);
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
            className="images"
          />
        </div>
      );
    });
  };

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
      {images && renderImages(currentImage)}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    images: state.images.data.photo
  };
};
export default connect(mapStateToProps, { searchImages })(App);
