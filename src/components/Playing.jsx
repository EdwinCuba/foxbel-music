import React from 'react';
import Img from '../assets/static/test/adele-21.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faPlay, faStepForward, faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/components/Playing.scss';

const Playing = () => {
  return (
    <div className="playing">
      <div className="music">
        <img src={Img} alt="img" />

        <div className="info">
          <h3>Cancion</h3>
          <span>Artista - Album</span>
        </div>
      </div>

      <div className="rep-options">
        <FontAwesomeIcon icon={faStepBackward} />
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faStepForward} />
      </div>

      <div className="volume-controller">
        <div className="nivel">
          <span></span>
        </div>

        <FontAwesomeIcon icon={faVolumeUp} />
      </div>
    </div>
  );
}

export default Playing;