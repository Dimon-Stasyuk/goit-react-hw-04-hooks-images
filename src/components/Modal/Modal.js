import PropTypes from "prop-types";
import React from "react";
import "./Modal.css";

class Modal extends React.Component {
  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.OnModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div className='Overlay' onClick={this.props.onClose}>
        <div className='Modal'>
          <img src={this.props.img} alt='' />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};
