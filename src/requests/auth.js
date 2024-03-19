/** @type {import('tmdb-js-wrapper').TmdbClient} */
// import { TmdbClient } from 'tmdb-js-wrapper'
import { TmdbClient } from '~/tmdb-js-wrapper/src/tmdb-js/tmdb-js'

export const AuthCreds = {
  username: process.env.TMDB_USERNAME,
  password: process.env.TMDB_PASSWORD,
  apiKey: process.env.TMDB_API_KEY,
  readAccessKey: process.env.TMDB_API_READ_ACCESS
};

export function startClient (apiKey) {
  const tmdb = new TmdbClient(apiKey)
  return tmdb
};