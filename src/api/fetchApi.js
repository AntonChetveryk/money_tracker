export const API_URL = "http://data.fixer.io/api/";

export const API_KEY = "0ccbc9cb9f22a7db482075635a2baee1";

export const fetchApi = (url, options = {}) => {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then((res) => {
        if (res.status < 400) {
          return res.json();
        } else {
          throw res;
        }
      })
      .then((res) => resolve(res))
      .catch((res) => res.json().then((error) => reject(error)));
  });
};
