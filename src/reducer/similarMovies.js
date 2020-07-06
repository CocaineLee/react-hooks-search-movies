import actionTypes from "../action/actionTypes"

const initState = {
    loading: false,
    movies: [],
}

export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.START_FETCH_MOVIES_LIST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.FETCH_MOVIES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
      }
    case actionTypes.FETCH_MOVIES_LIST_FAILED:
      return {
        ...state,
        loading: false,
      }
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        movies: action.payload.movies
      }
    default:
      return state;
  }
};



