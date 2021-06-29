import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/" className="header__logo">
        <img src="./logo.png" alt="" className="header__logo__img" />
      </Link>
      <div className="header__buttons">
        <Link to="/" className="header__buttons__button">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Header;
