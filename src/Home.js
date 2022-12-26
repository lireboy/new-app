import './css/Home.css';
import { Link } from 'react-router-dom';
import Cards from './components/Cards';
function Homepage() {
  return (
    <div className="Homepage">
      <h1>Home page!</h1>
      <Link to="/contact">go to contact</Link>
      <Cards/>
    </div>
  );
}

export default Homepage;