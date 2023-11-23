import React from 'react';
import {Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faEllipsisH,
  faHeart,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import style from './style';

// For local development profileImage={require('../../assets/images/rm.jpg')}

const UserPost = props => {
  return (
    <View>
      <View style={style.userContainer}>
        <View style={style.userContentContainer}>
          <UserProfileImage
            profileImage={require('../../assets/images/default_profile.png')}
            imageDimensions={30}
          />
          <View style={style.userTextContainer}>
            <Text style={style.userName}>
              {props.firstName} {props.lastName}
            </Text>
            <Text style={style.location}>
              {props.location && `${props.location}`}
            </Text>
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} size={24} color="#79869F" />
      </View>
      <View>
        <Image style={style.postImage} source={props.image} />
      </View>
      <View style={style.AttributesContainer}>
        <View style={style.likeContainer}>
          <FontAwesomeIcon icon={faHeart} size={24} color="#79869F" />
          <Text style={style.AttributeText}>{props.likes}</Text>
          <Text style={style.AttributeText}>Likes</Text>
        </View>
        <View style={style.commentContainer}>
          <FontAwesomeIcon icon={faMessage} size={24} color="#79869F" />
          <Text style={style.AttributeText}>{props.comments}</Text>
          <Text style={style.AttributeText}>Comments</Text>
        </View>
        <View style={style.bookmarkContainer}>
          <FontAwesomeIcon icon={faBookmark} size={24} color="#79869F" />
          <Text style={style.AttributeText}>{props.bookmarks}</Text>
          <Text style={style.AttributeText}>Bookmarks</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
};

export default UserPost;
