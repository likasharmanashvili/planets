import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header">
     <div><h1>THE PLANETS</h1></div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
       
      </div>
      
      <ul className={`menu ${isOpen ? 'open' : ''}`}>
        <li onClick={closeMenu}>
          <Link to="/">EARTH </Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/jupiter">JUPITER</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/mars">MARS</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/mercury">MERCURY</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/neptune">NEPTUNE</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/saturn">SATURN</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/uranus">URANUS</Link>
        </li>
        <li onClick={closeMenu}>
          <Link to="/venus">VENUS</Link>
        </li>
      </ul>
      <hr className='row'></hr>
    </div>
  );
};

export default Header;
