import axios from 'axios';

export default axios.create({
  baseURL: `https://skypro-flask.herokuapp.com/`
});
