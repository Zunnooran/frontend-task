import './Unknown.css'
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import error from "../../assets/error2.png";

const Unknown = () => {
  const navigate=useNavigate();
  const handleButtonClick = () => {
    navigate(-1);
  };
  return (
    <div className='section'>
      <img src={error} alt="" className="image" />
      <div className='rightSection'>
        <h1 className='headerText'>Looks like you are lost!</h1>
        <Button btnClasses={'bg-red-400 text-white p-2 rounded-md hover:bg-red-700'} btnText="Go Back"  btnClick={handleButtonClick} />
      </div>
    </div>
  )
}

export default Unknown