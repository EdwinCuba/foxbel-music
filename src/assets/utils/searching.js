const searching = async input => {
  const cors = '/cors-proxy/';
  const API = 'https://api.deezer.com/search?q=';
  const url = `${cors}${API}${input};`
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default searching;