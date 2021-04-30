const searchSongByArtist = async id => {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const API = `https://api.deezer.com/artist/${id}/top?limit=50`;
  const url = `${cors}${API}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default searchSongByArtist;