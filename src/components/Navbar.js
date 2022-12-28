import React, {useState} from 'react';
import PopupMenu from './PopupMenu';
import '../css/Navbar.css';
import { Button } from 'react-bootstrap';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [popup, setPopup] = useState(true);
    const togglePopup = () => setPopup(!popup);
    const twoFunctions = () =>{
      togglePopup();
      handleClick();
    }
  return (
    <div className="Navbar">
      <PopupMenu popup={popup} closePopup={twoFunctions}/>
      <div className="logo">
        <Button variant='light'>Logo</Button>
      </div>
      <div className="menu-icon" onClick={twoFunctions}>
        <i class={click ? 'fas fa-bars hidden' : 'fas fa-bars'}></i>
      </div>
    </div>
  );
}

export default Navbar;