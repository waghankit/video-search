import axios from 'axios';

const KEY = 'AIzaSyCMA9WuXR0LtbyhfzTRRaIbrrk3Twwwsjo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
