import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Spinner from "../Loader/Loader";
import "./ImageGallery.css";
// import apiServise from "../../api/apiServise";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";

export default function ImageGallery({ searchName }) {
  const [page, setPage] = useState(null);
  const [image, setImage] = useState(null);
  const [modal, setModal] = useState(false);
  const [largeImg, setLargeImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btn, setBtn] = useState(false);

  const onFatch = () => {
    const key = "23097756-2661a8d66efd3b5956221c710";
    setLoading(true);
    setBtn(false);
    setTimeout(() => {
      fetch(
        `https://pixabay.com/api/?q=${searchName}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then((response) => response.json())
        .then((response) =>
          setImage((prev) => {
            console.log("fetch");
            return [...prev, ...response.hits];
          }),
        );

      setBtn(true);
      setLoading(false);
    }, 500);
  };

  const pageIncrement = () => {
    setPage((prev) => prev + 1);
    console.log("Increment");
  };

  const modalTogle = () => {
    setModal((prev) => !prev);
  };

  const ovarlayClose = (event) => {
    if (event.target === event.currentTarget) {
      modalTogle();
    }
  };

  const scrollPage = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 1000);
  };

  const onBtnClick = () => {
    pageIncrement();
    scrollPage();
  };

  useEffect(() => {
    if (!searchName) {
      return;
    }

    if (page === 1) {
      onFatch();
    }

    setPage(1);
    setImage([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName]);

  useEffect(() => {
    if (!page) {
      return;
    }
    onFatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <ul className='ImageGallery'>
        {image && (
          <ImageGalleryItem
            images={image}
            onModalOpen={modalTogle}
            ongetImg={setLargeImg}
          />
        )}
      </ul>
      {btn && <Button OnBtn={onBtnClick} />}
      {loading && <Spinner />}
      {modal && (
        <Modal
          onClose={ovarlayClose}
          OnModalClose={modalTogle}
          img={largeImg}
        />
      )}
    </>
  );
}

ImageGallery.propTypes = {
  searchName: PropTypes.string.isRequired,
};
