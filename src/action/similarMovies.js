import actionTypes from "./actionTypes";
import {getMovieList} from "../service";

const startFetchMoviesList = () => {
  return {
    type: actionTypes.START_FETCH_MOVIES_LIST
  };
};
const FetchMoviesListFailed = () => {
  return {
    type: actionTypes.FETCH_MOVIES_LIST_FAILED
  };
};
const fetchMoviesListSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_MOVIES_LIST_SUCCESS,
    payload: payload
  };
};

export const fetchMoviesList = (movieId) => dispatch => {
  dispatch(startFetchMoviesList());
  getMovieList(movieId)
    .then(res => {
      if (res.status === 200) {
        return res.json()
      } else {
        dispatch(FetchMoviesListFailed());
      }
    })
    .then(({ results }) => {
      dispatch(
        fetchMoviesListSuccess({
          movies: results,
        })
      );
    })
    .catch(err => {
      dispatch(FetchMoviesListFailed());
    });
};

export const setMovies = (movies) => {
  return {
    type: actionTypes.SET_MOVIES,
    payload: movies
  }
}
