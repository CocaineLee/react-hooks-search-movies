import movieSuggest from './movieSuggest'
import similarMovies from './similarMovies'

import { combineReducers } from 'redux'

export default combineReducers({
  movieSuggest,
  similarMovies
})
