import React from 'react';
import { connect } from 'react-redux';
import { setPlaying } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/components/SearchResults.scss';

const SearchResults = ({ results, setPlaying }) => {
  let audio = React.createRef();
  const handlePlaying = data => {
    setPlaying({
      [data.id]: data.id,
      [data.title_short]: data.title_short,
      [data.artist.name]: data.artist.name,
      [data.album.cover]: data.album.cover,
      [data.preview]: data.preview
    })
  }

  return (
    <div className="search-results">
      <h2>Resultados</h2>

      <div className="results">

        {(results) ?
          results?.map(rItem => (
            <div className="item" key={rItem.id}>
              <div className="image">
                <img src={rItem.album.cover} alt="img" />
                <FontAwesomeIcon
                  icon={faPlay}
                  onClick={() => handlePlaying(rItem)}
                />
              </div>


              <div className="desc">
                <h3>{`${rItem.title_short}`}</h3>
                <h4>{`${rItem.artist.name}`}</h4>
              </div>
            </div>
          )) :
          <h1>No hay</h1>
        }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    results: state.search
  }
};
const mapDispatchToProps = {
  setPlaying
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);