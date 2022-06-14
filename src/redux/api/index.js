import axios from "axios";
const url = process.env.URL_ENDPOINT;
const headerConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ' + window.localStorage.getItem('access_token')
  }
};


const ejemplo = '/api/Ejemplo';

export const getEjemplo = (param) => {
    return axios
      .post(`${url}${ejemplo}`, param)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        throw error;
      });
  };