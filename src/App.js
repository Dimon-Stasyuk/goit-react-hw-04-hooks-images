import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import "./styles.css";

class App extends React.Component {
  state = {
    name: "",
  };

  handleNameChange = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <>
        <Searchbar getName={this.handleNameChange} />
        <ImageGallery name={this.state.name} />
        <ToastContainer />
      </>
    );
  }
}

export default App;

App.propTypes = {
  name: PropTypes.string,
};
