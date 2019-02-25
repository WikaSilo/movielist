import {
  LIST_MOVIES_LOADING,
  LIST_MOVIES_ERROR,
  LIST_MOVIES_SUCCESS,
  DETAIL_MOVIES_SUCCESS
} from './actionTypes'

const initialState = {
  listMovie: [],
  detailMovie: [],
  loading: false,
  error: {
    status: false,
    message: ''
  }
}

const movieReducer = (state = {...initialState}, action) => {
  switch (action.type) {
    case LIST_MOVIES_LOADING:
      return {
        ...state,
        loading: true
      }

    case LIST_MOVIES_ERROR:
      let errObj = {
        status: true,
        message: action.payload.msg
      }
      return {
        ...state,
        error: {
          ...errObj
        },
        loading: false
      }

    case LIST_MOVIES_SUCCESS:
      return {
        ...state,
        listMovie: action.payload,
        loading: false
      }
    
    case DETAIL_MOVIES_SUCCESS:
      return {
        ...state,
        detailMovie: action.payload,
        loading: false
      }

    default:
      return state
  }
}

export default movieReducer