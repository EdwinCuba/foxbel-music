const searchSongByArtist = async id => {
  const corsDev = 'https://cors-anywhere.herokuapp.com/';
  const cors = '/cors-proxy/';
  const API = `https://api.deezer.com/artist/${id}/top?limit=50`;
  const url = `${cors}${API}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default searchSongByArtist;