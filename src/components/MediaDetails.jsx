import React from 'react';
import '../assets/styles/components/MediaDetails.scss';
import Adele from '../assets/static/test/adele-21.png';

const MediaDetails = () => {
  return (
    <div className="media-details">
      <div className="md__container">
        <img src={Adele} alt="Test" />

        <div className="details">
          <div className="basic-info">
            <h2 className="song">Adele 21</h2>
            <h3 className="section">Lo mejor de adele</h3>
            <span>321,123 seguidores</span>
          </div>

          <p className="desc">Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8​</p>

          <div className="buttons">
            <button className="play">Reproducir</button>
            <button className="follow">Seguir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaDetails;