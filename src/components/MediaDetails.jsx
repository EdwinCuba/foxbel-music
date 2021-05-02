import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setPlaying, addToQueue, search } from '../actions';
import searchSongByArtist from '../assets/utils/searchSongByArtist';
import searchArtist from '../assets/utils/searchArtist';
import '../assets/styles/components/MediaDetails.scss';

const MediaDetails = props => {
  const { results, search, setPlaying, addToQueue } = props;
  const artistDesc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed venenatis velit, auctor scelerisque lacus. Ut tincidunt tempor leo a volutpat.';

  const [isFirst, setIsFirst] = useState(true);
  const [song, setSong] = useState({});
  const [songs, setSongs] = useState({});
  const [artist, setArtist] = useState({});

  useEffect(async () => {
    if (isFirst) {
      const favoriteArtist = 'twice';
      const artistId = '161553';
      const artist = await searchArtist(artistId);

      const searchSongs = await searchSongByArtist(artistId);
      const songs = searchSongs.data;
      const firstSong = songs[0];

      setSongs(songs)
      setSong(firstSong);
      setArtist(artist);

      search(songs);
      setIsFirst(false);
    } else {
      const firstSong = results[0];
      const artistId = firstSong.artist.id;
      const artist = await searchArtist(artistId);

      setSongs(results);
      setSong(firstSong);
      setArtist(artist);
    }
  }, [results])

  const handlePlay = (song, songs) => {
    search(songs)
    setPlaying(song);
    addToQueue(song);
  }

  return (
    <>
      {(Object.keys(props.results).length > 0) ? (

        <div className="media-details" >
          <div className="md__container" >
            <img src={artist.picture} alt="Test" />

            <div className="details">
              <div className="basic-info">
                <h2 className="song">{`${song.title}`}</h2>
                <div className="stats">
                  <h3 className="section">Lo mejor de {`${artist.name}`}</h3>
                  <span>{`${artist.nb_fan} `}seguidores</span>
                </div>
              </div>

              <p className="desc">{`${artistDesc}`}</p>

              <div className="buttons">
                <button className="play" onClick={() => handlePlay(song, songs)}>Reproducir</button>
                <button className="follow">Seguir</button>
              </div>
            </div>
          </div>
        </div>
      ) :
        (
          <></>
        )
      }
    </>
  );
}

const mapStateToProps = state => {
  return ({
    results: state.search
  });
}
const mapdDispatchToProps = {
  search,
  setPlaying,
  addToQueue
}

export default connect(mapStateToProps, mapdDispatchToProps)(MediaDetails);