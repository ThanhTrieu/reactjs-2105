import axios from 'axios';

const getDataResultFootball = async () => {
  const url = `https://gw.vnexpress.net/football/fixture?league_id=403`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

export const api = {
  getDataResultFootball
}