import './css/Contact.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const Contact = () => {
  return (
    <div className="Contact">
      <div className="content">
      <h1>Contact page!</h1>
      <Link to="/">go to Home</Link>
      </div>
    </div>
  );
}

export default Contact;