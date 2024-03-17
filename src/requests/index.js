import {
  AuthCreds,
  startClient
} from './auth'

// call on init
const tmdb = startClient(AuthCreds.apiKey)

export async function getTestMovie () {
  const oceansElevenMovie = tmdb.getMovieSection().getMovie("161");
  const oceansDetails = await oceansElevenMovie.getDetailsAsync();
  const oceansImages = await oceansElevenMovie.getImagesAsync();
  const vote_count = oceansDetails?.vote_count
  console.warn('test-data', oceansDetails.vote_count)
  return { oceansDetails, oceansImages, vote_count }
}

export async function searchDirector (director) {
  const searchSection = tmdb.getSearchSection()
  const directorRes = await searchSection.searchPeopleAsync(
    director,
    1,
    1,
    true,
    "PH"
  )
  return directorRes
}