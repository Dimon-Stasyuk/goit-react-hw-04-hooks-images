import PropTypes from "prop-types";
import { useEffect } from "react";
import "./Modal.css";

export default function Modal({ onClose, img, OnModalClose }) {
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      OnModalClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className='Overlay' onClick={onClose}>
      <div className='Modal'>
        <img src={img} alt='' />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  OnModalClose: PropTypes.func.isRequired,
};
