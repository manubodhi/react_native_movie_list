'use strict';

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Router, Scene, ActionConst} from 'react-native-router-flux';
import MovieListContainer from './containers/MovieList';
import DetailView from './components/DetailView';

/**
 * Registeres all the components used in the application for navigation
 */
class RouteNavigator extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <Router style={{flex: 1}}>
          <Scene
            key="root"
            backTitle={'Back'}
            navBarButtonColor={'white'}
            backButtonTextStyle={{color: 'white'}}
            navigationBarStyle={{backgroundColor: '#713FFF'}}
            titleStyle={{color: 'white'}}>
            <Scene
              key={'movieList'}
              title={'Movies'}
              component={MovieListContainer}
              type={ActionConst.RESET}
              initial
            />
            <Scene
              key={'viewTask'}
              title={'Movie detail'}
              component={DetailView}
            />
          </Scene>
        </Router>
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const {} = state;
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteNavigator);
