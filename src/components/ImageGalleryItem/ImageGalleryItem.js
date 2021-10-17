import PropTypes from "prop-types";

import "./ImageGalleryItem.css";

export default function ImageGalleryItem({ onModalOpen, ongetImg, images }) {
  return (
    <>
      {images.map(({ webformatURL, largeImageURL, id }) => {
        return (
          <li
            className='ImageGalleryItem'
            key={id}
            onClick={() => {
              onModalOpen();
              ongetImg(largeImageURL);
            }}>
            <img src={webformatURL} alt='' className='ImageGalleryItem-image' />
          </li>
        );
      })}
    </>
  );
}

ImageGalleryItem.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      largeImageURL: PropTypes.string,
    }),
  ),
};
