import axios from 'axios';
import { apiPaths } from '../../constants/path';

class AuthAPI {
  login(rqData) {
    return new Promise((resolve, reject) => {
      axios
        .post(apiPaths.login, rqData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.REACT_APP_AUTH_KEY,
          },
        })
        .then((response) => {
          console.log(response, 'response');
          resolve(response);
        })
        .catch((error) => {
          console.log(error, 'error');
          reject(error);
        });
    });
  }
}

export const authAPI = new AuthAPI();
