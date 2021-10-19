import PropTypes from "prop-types";
import shortid from "shortid";
import "./ImageGalleryItem.css";

export default function ImageGalleryItem({ onModalOpen, ongetImg, images }) {
  return (
    <>
      {images.map(({ webformatURL, largeImageURL }) => {
        return (
          <li
            className='ImageGalleryItem'
            key={shortid.generate()}
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
