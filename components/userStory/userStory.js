import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {horizontalScale} from '../../styles/scaling';

const UserStory = props => {
  return (
    <View style={style.userStoryConstainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={horizontalScale(50)}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserStory;
