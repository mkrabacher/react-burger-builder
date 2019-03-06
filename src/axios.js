import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-ccbff.firebaseio.com/',
});

// instance.defaults.headers.common['Autherization'] = 'Auth TOKEN - Instance';
// instance.defaults.headers.post['Content-Type'] = 'etetete- INnstatnce';

export default instance;