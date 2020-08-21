'use strict';

import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, Alert, AsyncStorage} from 'react-native';
import PropTypes from 'prop-types';
import MovieListView from './MovieListView';
import GeoLocation from '@react-native-community/geolocation';

export default class MovieList extends Component {
  static propTypes = {
    invokeDataWebservice: PropTypes.func,
    showPostLoading: PropTypes.bool,
    postArray: PropTypes.array,
  };

    state = {
      latitude: null,
      longitude: null,
    }

  async storeLocation (location) {
    try {
      await AsyncStorage.setItem('lat', location.latitude);
      await AsyncStorage.setItem('long', location.longitude);
      this.getLocation;
    } catch (error) {
      console.error(error.message);
    }
  }

  getLocation = async () => {
    try {
      var lat = await AsyncStorage.getItem('lat');
      var long = await AsyncStorage.getItem('long');
      this.setState({latitude: lat, longitude: long});
    } catch (error) {
      console.error(error.message);
    }
  }

  findCoordinates = async () => {
    GeoLocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        console.log(location);
      },
      (error) => console.log("err :"+error.message),
      {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
    );
  };

  componentDidMount() {
    // this.findCoordinates;
    this.props.invokeDataWebservice();
  }

  render() {
    return (
      <View style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'column'}}>
          <Button
            title={'Get location'}
            onPress={this.findCoordinates}></Button>
          <Text>{'Latitude: '+this.state.latitude+" Longitude: "+this.state.longitude}</Text>
          <MovieListView
            showLoading={this.props.showPostLoading}
            postArray={this.props.postArray}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
});
