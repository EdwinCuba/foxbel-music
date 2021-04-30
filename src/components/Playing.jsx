import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setPlaying } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faPlay, faPause, faStepForward, faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/components/Playing.scss';

const Playing = (props) => {
  let { id, title, name, cover, preview } = props.data;
  const { setPlaying, queue } = props;
  const [isPlay, setPlay] = useState(true);
  const [count, setCount] = useState(-1);

  const playBefore = () => {
    console.log(count)
    if (count > 0) {
      let index = count - 1;
      setCount(index - 1);
      setPlaying(queue[index]);
    }
  }
  const playNext = () => {
    console.log(count)
    if (count < queue.length - 1) {
      let index = count + 1;;
      setCount(index - 1);
      setPlaying(queue[index]);
    }
  }

  const play = () => {
    audio.play();
    setPlay(true);
  }
  const pause = () => {
    audio.pause();
    setPlay(false);
  }
  const handlePlay = () => {
    if (audio.paused && !isPlay) {
      play();
    } if (!audio.paused && isPlay) {
      pause();
    }
  }

  useEffect(() => {
    if (preview != undefined) {
      let audio = document.querySelector('#audio');
      audio.src = preview;
      audio.play();

      console.log(count);
      setCount(count + 1);
    }

    return () => {
      audio.pause();
    }
  }, [preview]);

  return (
    <>
      <div className="playing" style={{ display: !preview ? 'none' : 'flex' }}>
        <div className="music">
          <img src={cover} alt="img" />

          <div className="info">
            <h3>{`${title}`}</h3>
            <span>{`${name}`}</span>
          </div>
        </div>

        <div className="rep-options">
          <FontAwesomeIcon icon={faStepBackward} onClick={playBefore} />
          <FontAwesomeIcon icon={(isPlay) ? faPause : faPlay} onClick={handlePlay} />
          <FontAwesomeIcon icon={faStepForward} onClick={playNext} />
        </div>

        <div className="volume-controller">
          <div className="nivel">
            <span></span>
          </div>

          <FontAwesomeIcon icon={faVolumeUp} />
        </div>
      </div>
      <audio id="audio"></audio>
    </>
  )
}

const mapStateToProps = state => {
  return ({
    data: state.playing,
    queue: state.queue
  })
}
const mapDispatchToProps = {
  setPlaying
};

export default connect(mapStateToProps, mapDispatchToProps)(Playing);