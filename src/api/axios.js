// const axios = require('axios');

// module.exports = axios.create({
//   baseURL: 'https://collabsphere-server.onrender.com',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

import axios from 'axios';

export default axios.create({
  baseURL: 'https://collabsphere-server.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
