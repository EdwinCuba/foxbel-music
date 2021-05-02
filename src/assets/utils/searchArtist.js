const searchArtist = async id => {
  const cors = '/cors-proxy/';
  const API = 'https://api.deezer.com/artist/';
  const url = `${cors}${API}${id}`;

  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default searchArtist;