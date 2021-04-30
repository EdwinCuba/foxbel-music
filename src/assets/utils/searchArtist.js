const searchArtist = async id => {
  const cors = 'https://cors-anywhere.herokuapp.com/';
  const API = 'https://api.deezer.com/artist/';
  const url = `${cors}${API}${id}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default searchArtist;