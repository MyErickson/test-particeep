
import { connect } from 'react-redux';

/**
 * Local import
 */

import Movie from '../components/Movie/Movie'

// Action Creators
import { getMovie } from '../store/reducer';

const mapStateToProps = (state) => ({
  listMovie:state.listMovie,

});

const mapDispatchToProps = (dispatch) => ({
  callMovie: ()=>{
    dispatch(getMovie())
  },

});

const ContainerMovie= connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);



/**
 * Export
 */
export default ContainerMovie  ;