import PropTypes from "prop-types";
import React from "react";
import Button from "../Button/Button";
import Spinner from "../Loader/Loader";
import "./ImageGallery.css";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";

export default class ImageGallery extends React.Component {
  state = {
    image: null,
    page: 1,
    modal: false,
    largeImg: null,
    loading: false,
    btn: false,
  };

  onFetch = () => {
    const key = "23097756-2661a8d66efd3b5956221c710";
    this.setState({ loading: true, btn: false });
    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?q=${this.props.name}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then((response) => response.json())
        .then((response) =>
          this.setState((prevState) => ({
            image: [...prevState.image, ...response.hits],
            btn: true,
          })),
        );

      this.pageIncrement();

      this.setState({ loading: false });
    }, 500);
  };

  modalTogle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  getLargeImg = (img) => {
    this.setState({ largeImg: img });
  };

  ovarlayClose = (event) => {
    if (event.target === event.currentTarget) {
      this.modalTogle();
    }
  };

  scrollPage = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 1000);
  };

  onBtnClick = () => {
    this.onFetch();
    this.scrollPage();
  };

  pageIncrement = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.name !== this.props.name) {
      this.setState({ image: [], page: 1 });
      this.onFetch();
    }
  }

  render() {
    return (
      <>
        <ul className='ImageGallery'>
          {this.state.image && (
            <ImageGalleryItem
              images={this.state.image}
              onModalOpen={this.modalTogle}
              ongetImg={this.getLargeImg}
            />
          )}
        </ul>
        {this.state.btn && <Button OnBtn={this.onBtnClick} />}
        {this.state.loading && <Spinner />}
        {this.state.modal && (
          <Modal
            onClose={this.ovarlayClose}
            OnModalClose={this.modalTogle}
            img={this.state.largeImg}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  name: PropTypes.string.isRequired,
};
