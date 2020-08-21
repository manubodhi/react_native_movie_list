'use strict';

import React, {PureComponent} from 'react';
import {View, Text, Image, TouchableHighlight} from 'react-native';

import PropTypes from 'prop-types';
import CardView from 'react-native-cardview';
import {Actions} from 'react-native-router-flux';
import {NETWORK} from '../../util/Constants';

export default class MovieItem extends PureComponent {
  static propTypes = {
    rowData: PropTypes.object,
  };

  render() {
    return (
      <CardView
        style={{height: 150, margin: 10}}
        cardElevation={5}
        cardMaxElevation={5}
        cornerRadius={10}>
        <TouchableHighlight
          underlayColor={'transparent'}
          onPress={() => {
            Actions.viewTask({viewData: this.props.rowData});
          }}>
          <View style={{height: 140, backgroundColor: 'white', padding: 10}}>
            <Image
              resizeMode="stretch"
              style={{height: 100, width: 100, borderRadius: 5}}
              source={{
                uri: `${NETWORK.IMAGE_URL}/w185/${this.props.rowData.poster_path}`,
              }}
            />
            <View style={{paddingHorizontal: 10}}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#000000',
                  fontWeight: 'bold',
                  marginTop: 5,
                }}
                numberOfLines={1}>
                {this.props.rowData.title
                  ? 'Title: ' + this.props.rowData.title
                  : 'Title: ' + this.props.rowData.original_name}
              </Text>

              <Text
                style={{fontSize: 10, color: 'gray', marginTop: 2}}
                numberOfLines={1}>
                {'Language: ' + this.props.rowData.original_language}
              </Text>
            </View>
          </View>
        </TouchableHighlight>
      </CardView>
    );
  }
}
