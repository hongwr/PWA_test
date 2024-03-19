import axios from 'axios';
import { apiPaths } from '../../constants/path';

class AccountReadAPI {
  read() {
    return new Promise((resolve, reject) => {
      axios
        .get(apiPaths.read, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: process.env.REACT_APP_ADMIN_KEY,
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

export const accountReadAPI = new AccountReadAPI();
