import { toast } from "react-toastify";
import { useState } from "react";
import "./Searchbar.css";

export default function Searchbar({ getName }) {
  const [name, setName] = useState("");

  const reset = () => {
    setName("");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === "") {
      toast.error("Enter the name of the picture");
      return;
    }
    reset();
    getName(name);
  };

  return (
    <header className='Searchbar'>
      <form className='SearchForm' onSubmit={onSubmit}>
        <button type='submit' className='SearchForm-button'>
          <span className='SearchForm-button-label'>Search</span>
        </button>

        <input
          value={name}
          onChange={handleNameChange}
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
