import React, { useState } from 'react';
import { connect } from 'react-redux';
import { search } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './NavigationBar';
import searching from '../assets/utils/searching';
import '../assets/styles/components/Header.scss';

const Header = props => {
  let [isOpen, setIsOpen] = useState(false);
  let [input, setInput] = useState('');
  const handleInput = event => {
    setInput(event.target.value);
  }
  const handleSubmit = async () => {
    const results = await searching(input);
    props.search(results.data);
  }

  return (
    <>
      <header>
        <FontAwesomeIcon
          icon={faBars}
          id="open-nav"
          onClick={() => setIsOpen(true)}
        />

        <div className="search">
          <input type="text" placeholder="Buscar" onChange={handleInput} />
          <FontAwesomeIcon icon={faSearch} id="search-logo" onClick={handleSubmit} />
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

const mapDispatchToProps = {
  search
};

export default connect(null, mapDispatchToProps)(Header);