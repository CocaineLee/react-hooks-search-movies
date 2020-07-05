import actionTypes from '../action/actionTypes'

const initState = {
  selectedMovieId: null,
};

export default (state = initState, action) => {
  switch(action.type) {
    case actionTypes.SET_MOVIE_ID:
      return {
        ...state,
        selectedMovieId: action.payload
      }
    default:
      return initState;
  }
}
