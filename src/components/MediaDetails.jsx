import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setPlaying } from '../actions';
import searchSongByArtist from '../assets/utils/searchSongByArtist';
import searchArtist from '../assets/utils/searchArtist';
import '../assets/styles/components/MediaDetails.scss';

const MediaDetails = props => {
  const [isSong, setIsSong] = useState(false);
  const [song, setSong] = useState({});
  const [artist, setArtist] = useState({});
  const [artistDesc, setArtistdesc] = useState({});

  useEffect(async () => {
    const favoriteArtist = 'twice';
    const artistId = '161553';
    const artist = await searchArtist(artistId);

    const artistDesc = 'Twice (en hangul, 트와이스; romanización revisada del coreano, Teuwaiseu; estilizado como TWICE) es un grupo femenino surcoreano formado por JYP Entertainment a través del programa Sixteen (2015).';

    const searchSongs = await searchSongByArtist(artistId);
    const songs = searchSongs.data;
    const cant = Object.keys(songs).length;
    const random = Math.round(Math.random() * cant);
    const temp = songs[random];

    setSong(temp);
    setArtist(artist);
    setArtistdesc(artistDesc)
    setIsSong(true)
  }, [isSong])

  const handlePlay = song => {
    props.setPlaying(song);
  }

  return (
    <>
      {(Object.keys(props.search).length === 0 && isSong) ? (

        <div className="media-details" >
          <div className="md__container" >
            <img src={artist.picture} alt="Test" />

            <div className="details">
              <div className="basic-info">
                <h2 className="song">{`${song.title}`}</h2>
                <h3 className="section">Lo mejor de {`${artist.name}`}</h3>
                <span>{`${artist.nb_fan} `}seguidores</span>
              </div>

              <p className="desc">{`${artistDesc}`}</p>

              <div className="buttons">
                <button className="play" onClick={() => handlePlay(song)}>Reproducir</button>
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
    search: state.search
  });
}
const mapdDispatchToProps = {
  setPlaying
}

export default connect(mapStateToProps, mapdDispatchToProps)(MediaDetails);