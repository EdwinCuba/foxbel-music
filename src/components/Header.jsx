import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <header>
      <FontAwesomeIcon icon={faBars} id="open-nav" />

      <div className="search">
        <input type="text" placeholder="Buscar" />
        <FontAwesomeIcon icon={faSearch} id="search-logo" />
      </div>

      <FontAwesomeIcon icon={faUser} id="user-logo" />
    </header>
  );
}

export default Header;