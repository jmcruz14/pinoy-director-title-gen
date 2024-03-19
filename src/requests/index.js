import {
  AuthCreds,
  startClient
} from './auth'

// call on init
const tmdb = startClient(AuthCreds.apiKey)

export async function searchDirector (director) {
  const searchSection = tmdb.getSearchSection()

  /**
    * Gets data from a people search in TMDb.
    *
    * @param {string} searchTerm The search term (query).
    * @param {Number} startPage
    * The first search result page to return data from. The default is 1.
    * @param {Number} pageCount
    * The number of search result pages to return data from. The default is 1.
    * @param {Boolean} includeAdult
    * true if adult content will be included. The default is true.
    * @param {string} region The region.
    *
    * @returns {Promise<*>} A Promise of JSON data with search results of people.
   */
  const directorRes = await searchSection.searchPeopleAsync(
    director, 1, 1, true, "PH"
  )
  return directorRes
}