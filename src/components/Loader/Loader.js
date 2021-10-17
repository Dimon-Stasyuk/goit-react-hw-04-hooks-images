import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loader.css";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className='loader-container'>
      <Loader type='ThreeDots' color='#3f51b5' height={60} width={60} />
    </div>
  );
};

export default Spinner;
