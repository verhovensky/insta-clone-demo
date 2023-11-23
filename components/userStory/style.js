import React from 'react';
import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userStoryConstainer: {
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: 14,
    color: '#022150',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default style;
