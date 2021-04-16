
/**
 * Initial State
 */
const initialState = {
  listMovie:undefined
};

/**
 * Types
 */

export const GET_MOVIE = "GET_MOVIE"
export const MOVIES = "MOVIES"


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
 
  case MOVIES:
    return{
      ...state,
      listMovie:action.data
    }

  default:
    return state;
  }
};



/**
 * Action Creators
 */
export const getMovie=()=>({
  type:GET_MOVIE,
})

export const movies=(data)=>({
  type:MOVIES,
  data
})





/*
 * Export
 */
export default reducer;

