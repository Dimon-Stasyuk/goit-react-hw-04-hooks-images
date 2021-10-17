import { ToastContainer } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");

  return (
    <>
      <Searchbar getName={setName} />
      <ImageGallery searchName={name} />
      <ToastContainer />
    </>
  );
}

App.propTypes = {
  name: PropTypes.string,
};
