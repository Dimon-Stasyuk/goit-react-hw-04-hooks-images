import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Spinner from "../Loader/Loader";
import "./ImageGallery.css";
import apiServise from "../../api/apiServise";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Modal from "../Modal/Modal";

export default function ImageGallery({ searchName }) {
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [largeImg, setLargeImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [btn, setBtn] = useState(false);

  const onFetch = () => {
    setLoading(true);
    setBtn(false);

    setTimeout(() => {
      apiServise(searchName, page).then((res) => {
        setImage((prev) => [...prev, ...res.hits]);
        setBtn(true);
        setLoading(false);
        setPage((prev) => prev + 1);
      });
    }, 300);
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
    }, 600);
  };

  const onBtnClick = () => {
    onFetch();

    scrollPage();
  };

  useEffect(() => {
    if (!searchName) {
      return;
    }
    setPage(1);
    setImage([]);
    onFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName]);

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
