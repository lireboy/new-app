import logo from './logo.svg';
import Homepage from './Home';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <><><Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects/>}/>
      </Routes></>
      <Footer /></>
  );
}

export default App;
