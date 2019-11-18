import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/weatherConditions.js.js';

// console.log("this is weatherConditions", weatherConditions["Clear"])

const Weather = ({ weather, temperature }) => {
    return (
      <View style={styles.weatherContainer}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={48} name="weather-sunny" color={'#fff'} />
          <Text style={styles.tempText}>{temperature}˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weather}</Text>
          <Text style={styles.subtitle}>It hurts my eyes!</Text>
        </View>
      </View>
    );
  };

// Weather.propTypes = {
//   temperature: PropTypes.number.isRequired,
//   weather: PropTypes.string
// };


const styles = StyleSheet.create({
  weatherContainer: {
    flex: 1,
    backgroundColor: '#f7b733'
    // borderWidth: 5,
    // borderColor: "red",
    // marginLeft: -220,
    // marginRight: -220

  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 5
  },
  tempText: {
    fontSize: 48,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
    // borderWidth: 5
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Weather;