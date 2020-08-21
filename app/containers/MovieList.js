'use strict';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import MovieList from '../components/MovieList';
import {invokeDataWebservice} from '../actions/MovieListAction';

const mapStateToProps = (state, ownProps) => {
  const {
    movieListState: {showPostLoading},
    post: {postArray},
  } = state;

  return {
    showPostLoading,
    postArray,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      invokeDataWebservice,
    },
    dispatch,
  );
};

const MovieListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieList);

export default MovieListContainer;
