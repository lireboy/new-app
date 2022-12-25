import './css/Contact.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Link} from 'react-router-dom';

function Contact() {
  return (
    <div className="Contact">
      <h1>Contact page!</h1>
      <Link to="/">go to Home</Link>
    </div>
  );
}

export default Contact;