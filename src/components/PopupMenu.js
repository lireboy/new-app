import React, {useState, useEffect, useRef} from 'react';
import '../css/PopupMenu.css'
import { Link } from 'react-router-dom'

function PopupMenu({popup, closePopup}) {
    let closeRef = useRef();
    useEffect(() =>{
        if(!popup){
            document.addEventListener("mousedown", (event)=>{
                if ((!closeRef.current.contains(event.target))){
                    closePopup();
                }
            })

        }
    })
  return (
    <div ref={closeRef} className={popup ? 'popup-container hidden' : 'popup-container'}>
        <div className="close-button">
            <i className='fas fa-times' onClick={closePopup}></i>
        </div>
        <div className="navigations">
            <div className="navigation" onClick={closePopup}>
                <Link to="/">Home</Link>
            </div>
            <div className="navigation" onClick={closePopup}>
            <Link to="/projects">Projects</Link>
            </div>
            <div className="navigation" onClick={closePopup}>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default PopupMenu