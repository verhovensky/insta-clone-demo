import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';

const UserProfileImage = props => {
  return (
    <View style={style.profileImageContainer}>
      <Image
        style={{
          width: props.imageDimensions,
          height: props.imageDimensions,
        }}
        source={props.profileImage}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  // type of props.profileImage should be any for local development
  // as remote images are represented as Object(s)
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
