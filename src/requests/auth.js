"use strict"
import axios from 'axios';

const options = {
  method: 'GET',
  // url: 'https://api.themoviedb.org/3/configuration',
  url: `${import.meta.env.VITE_TMDB_URL}/3/configuration`,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_READ_ACCESS}`
  }
};

export function retrieveConfigDetails () {
  // console.warn('env-vars', import.meta.env.VITE_TMDB_API_READ_ACCESS)
  axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
}

// function createGuestSession () {

// }

// function deleteSession () {

// }