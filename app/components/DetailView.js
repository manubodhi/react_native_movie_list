'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import PropTypes from 'prop-types';
import {NETWORK} from '../util/Constants';

const _ = require('lodash');

export default class DetailView extends Component {
  static propTypes = {
    viewData: PropTypes.object,
  };

  _renderTag() {
    if (_.has(this.props.viewData, 'original_language')) {
      return (
        <View style={{flexDirection: 'row', alignContent: 'flex-end'}}>
          <Text style={{alignSelf: 'center'}}>{"Language: " +this.props.viewData.original_language}</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  _renderPostImage() {
    if (_.has(this.props.viewData, 'poster_path')) {
      return (
        <Image
          resizeMode="stretch"
          style={styles.imageStyle}
          source={{
            uri: `${NETWORK.IMAGE_URL}/w500/${this.props.viewData.poster_path}`,
          }}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    const desc = _.has(this.props.viewData, 'overview')
      ? this.props.viewData.overview
      : 'No data';
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{padding: 20}}>
          {this._renderPostImage()}

          <View style={{padding: 20}}>
            <Text
              style={styles.titleStyle}>
              {this.props.viewData.title}
            </Text>

            {this._renderTag()}

            <Text
              style={{
                marginTop: 10,
                marginBottom: 20,
                fontSize: 14,
                color: 'black',
              }}>
              {desc}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  imageStyle: {height: 230, width: 200, alignSelf: 'center', borderRadius: 10},
  titleStyle: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 27,
    color: '#713FFF',
    fontWeight: 'bold',
  }
});
