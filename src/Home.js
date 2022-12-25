import './css/Home.css';
import { Link } from 'react-router-dom';
import PopupMenu from './components/PopupMenu';
function Homepage() {
  return (
    <div className="Homepage">
      <h1>Home page!</h1>
      <Link to="/contact">go to contact</Link>
    </div>
  );
}

export default Homepage;