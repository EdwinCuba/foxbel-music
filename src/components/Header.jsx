import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './NavigationBar';
import '../assets/styles/components/Header.scss';

const Header = () => {
  let [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <header>
        <FontAwesomeIcon
          icon={faBars}
          id="open-nav"
          onClick={() => setIsOpen(true)}
        />

        <div className="search">
          <input type="text" placeholder="Buscar" />
          <FontAwesomeIcon icon={faSearch} id="search-logo" />
        </div>

        <FontAwesomeIcon icon={faUser} id="user-logo" />
      </header>

      {(isOpen) ? (
        <aside style={{ left: 0 }}>
          <NavigationBar
            setIsOpen={setIsOpen}
          />
        </aside>
      ) : (
        <aside style={{ left: -100 + "%" }}>
          <NavigationBar
            setIsOpen={setIsOpen}
          />
        </aside>
      )}

    </>
  );
}

export default Header;