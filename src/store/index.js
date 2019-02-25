import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

import movieReducer from './moviesdb/reducers'

const reducer = combineReducers({
  movies: movieReducer
})

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store