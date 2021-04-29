import React from 'react';
import Img from '../assets/static/test/adele-21.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/components/SearchResults.scss';

const SearchResults = () => {
  return (
    <div className="search-results">
      <h2>Resultados</h2>

      <div className="results">
        <div className="item">
          <div className="image">
            <img src={Img} alt="img" />
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div className="desc">
            <h3>Adele 21</h3>
            <h4>Adele</h4>
          </div>
        </div>

        <div className="item">
          <div className="image">
            <img src={Img} alt="img" />
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div className="desc">
            <h3>Adele 21</h3>
            <h4>Adele</h4>
          </div>
        </div>

        <div className="item">
          <div className="image">
            <img src={Img} alt="img" />
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div className="desc">
            <h3>Adele 21</h3>
            <h4>Adele</h4>
          </div>
        </div>

        <div className="item">
          <div className="image">
            <img src={Img} alt="img" />
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <div className="desc">
            <h3>Adele 21</h3>
            <h4>Adele</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;