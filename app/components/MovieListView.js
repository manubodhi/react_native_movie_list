'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import PropTypes from 'prop-types';

import Loading from './common/Loading';
import MovieItem from './listItems/MovieItem';

export default class MovieListView extends Component {
  static propTypes = {
    showLoading: PropTypes.bool,
    postArray: PropTypes.array,
  };

  _renderRow({item}) {
    return <MovieItem rowData={item} />;
  }

  _keyExtractor(data) {
    return '' + data.id;
  }

  _renderScreen() {
    if (this.props.showLoading) {
      return <Loading />;
    } else {
      return (
        <View>
          <FlatList
            style={{paddingVertical: 10, marginLeft: 10}}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            data={this.props.postArray}
            renderItem={this._renderRow}
            keyExtractor={this._keyExtractor}
          />
        </View>
      );
    }
  }

  render() {
    return <View style={styles.container}>{this._renderScreen()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {},
});
