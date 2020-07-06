import actionTypes from './actionTypes'

export const setMovieId = (selectedMovieId) => (
  {
    type: actionTypes.SET_MOVIE_ID,
    payload: selectedMovieId
  }
)
