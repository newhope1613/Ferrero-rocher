import '../App.css'
import { useNavigate } from "react-router-dom"
import { CHECK_REGISTRATION, PRE_GAME } from '../utils/endPoints';

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className='mainPage'>
      <p className='mainP'>Play for a chance to win a Ferrero Rocher pyramid</p>
      <div className='mainButton'>
        <button className='usualButton' onClick={() => navigate(PRE_GAME)}>Click to play</button>
        <button className='usualButton'  onClick={() => navigate(CHECK_REGISTRATION)}>Check registration</button>
      </div>
    </div>
  )
}

export default MainPage
