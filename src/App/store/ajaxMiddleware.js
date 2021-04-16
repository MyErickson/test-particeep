
import { GET_MOVIE ,movies } from './reducer'
import { movies$ } from '../data/listMovie'
const ajaxMiddleware = store => next => async (action) => {

  next(action);

  switch (action.type) {

  case GET_MOVIE:
    next(action);
    console.log("🚀 ~ file: ajaxMiddleware.js ~ line 15 ~ ajaxMiddleware ~ action", action)
    const data = await  movies$

      store.dispatch(movies(data))
  
      
    break;
    
  default:
    next(action);
  }
};
export default ajaxMiddleware;
