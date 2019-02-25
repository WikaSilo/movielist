import axios from 'axios';

import {
  LIST_MOVIES_LOADING,
  LIST_MOVIES_ERROR,
  LIST_MOVIES_SUCCESS,
  DETAIL_MOVIES_SUCCESS
} from './actionTypes';

const loading = () => ({
  type: LIST_MOVIES_LOADING
})

const error = (payload) => ({
  type: LIST_MOVIES_ERROR,
  payload: payload
})

const listMovieSuccess = (payload) => ({
  type: LIST_MOVIES_SUCCESS,
  payload: payload
})

const detailMovieSuccess = (payload) => ({
  type: DETAIL_MOVIES_SUCCESS,
  payload: payload
})

export const getListMovie = () => {
  return dispatch => {
    dispatch(loading())
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=8ac1df0620b6a7b94d74d0e0f7e9dbf6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
      .then(response => {
        dispatch(listMovieSuccess(response.data.results))
      })
      .catch(err => dispatch(error(err)));
  }
}

export const getDetailMovie = (id) => {
  return dispatch => {
    dispatch(loading())
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=8ac1df0620b6a7b94d74d0e0f7e9dbf6&language=en-US`)
      .then(response => {
        dispatch(detailMovieSuccess(response.data))
      })
      .catch(err => dispatch(error(err)));
  }
}