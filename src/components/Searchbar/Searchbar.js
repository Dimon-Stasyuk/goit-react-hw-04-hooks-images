import React from "react";
import { toast } from "react-toastify";
import "./Searchbar.css";

export default class Searchbar extends React.Component {
  state = {
    name: "",
  };

  reset = () => {
    this.setState({
      name: "",
    });
  };

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.state.name.trim() === "") {
      toast.error("Enter the name of the picture");
      return;
    }
    this.reset();
    this.props.getName(this.state.name);
  };

  render() {
    return (
      <header className='Searchbar'>
        <form className='SearchForm' onSubmit={this.onSubmit}>
          <button type='submit' className='SearchForm-button'>
            <span className='SearchForm-button-label'>Search</span>
          </button>

          <input
            value={this.state.name}
            onChange={this.handleNameChange}
            className='SearchForm-input'
            type='text'
            autoComplete='off'
            autoFocus
            placeholder='Search images and photos'
          />
        </form>
      </header>
    );
  }
}
