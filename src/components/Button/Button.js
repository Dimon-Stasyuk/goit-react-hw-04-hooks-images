import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ OnBtn }) => {
  return (
    <button type='button' className='Button' onClick={OnBtn}>
      Load More
    </button>
  );
};

export default Button;

Button.propTypes = {
  OnBtn: PropTypes.func.isRequired,
};
