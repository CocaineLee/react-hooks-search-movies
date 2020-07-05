import actionTypes from './actionTypes'

export const setMovieId = (movieId) => (
  {
    type: actionTypes.SET_MOVIE_ID,
    payload: movieId
  }
)
