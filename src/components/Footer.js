import React, {useState} from 'react';
import '../css/Footer.css';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png';


const Footer = () => {
  return (
    <div className="Footer">
      <div className="logo">
          <Image src={logo} width="80px" roundedCircle/>
          <h1>Company name</h1>
      </div>
      <div className="infos">
        <div className="info">
          <h3>"Wite a nice slogan"</h3>
        </div>
        <div className="info">bla</div>
        <div className="info">
          <div className="socials">
            <h3>Follow us:</h3>
            <div className="icons">
              <div className="icon">1</div>
              <div className="icon">2</div>
              <div className="icon">3</div>
            </div>
          </div>
          <div className="contact">
            <h3>Contact us:</h3>
            <p>(030)-55555555</p>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="copyright">@copyright</div>
        <div className="policies">
          <div className="policy">privacy policy</div>
          <div className="policy">terms & conditions</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;