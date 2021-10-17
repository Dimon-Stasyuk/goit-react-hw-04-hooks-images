import PropTypes from "prop-types";
import React from "react";
// import shortid from "shortid";
import "./ImageGalleryItem.css";

class ImageGalleryItem extends React.Component {
  render() {
    return (
      <>
        {this.props.images.map(({ webformatURL, largeImageURL, id }) => {
          return (
            <li
              className='ImageGalleryItem'
              key={id}
              onClick={() => {
                this.props.onModalOpen();
                this.props.ongetImg(largeImageURL);
              }}>
              <img
                src={webformatURL}
                alt=''
                className='ImageGalleryItem-image'
              />
            </li>
          );
        })}
      </>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ),
};
