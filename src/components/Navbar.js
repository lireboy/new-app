import React, {useState} from 'react';
import PopupMenu from './PopupMenu';
import '../css/Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [popup, setPopup] = useState(true);
    const togglePopup = () => setPopup(!popup);
    const twoFunctions = () =>{
      togglePopup();
      handleClick();
    }
  return (
    <><PopupMenu popup={popup} closePopup={twoFunctions}/>
    <div className="Navbar">
      <div className="menu-icon" onClick={twoFunctions}>
        <i class={click ? 'fas fa-bars hidden' : 'fas fa-bars'}></i>
      </div>
    </div></>
  );
}

export default Navbar;