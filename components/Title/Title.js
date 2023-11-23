import {Text} from 'react-native';
import React from 'react';
import style from './style';
import PropTypes from 'prop-types';

const Title = ({children, ...props}) => {
  return <Text style={style.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
