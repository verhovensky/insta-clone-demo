import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  verticalScale,
  scalefontSize,
} from '../../styles/scaling';

const style = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userTextContainer: {
    marginLeft: horizontalScale(10),
    justifyContent: 'center',
  },
  userName: {
    fontSize: scalefontSize(16),
    fontFamily: getFontFamily('Inter', '600'),
    color: '#000',
  },
  location: {
    fontSize: scalefontSize(12),
    fontFamily: getFontFamily('Inter', '400'),
    color: '#79869F',
    marginTop: verticalScale(5),
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: horizontalScale(10),
    marginTop: horizontalScale(20),
  },
  AttributesContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },
  likeContainer: {
    paddingRight: horizontalScale(20),
    alignItems: 'center',
    flexDirection: 'row',
  },
  commentContainer: {
    paddingRight: horizontalScale(20),
    alignItems: 'center',
    flexDirection: 'row',
  },
  bookmarkContainer: {
    paddingRight: horizontalScale(20),
    alignItems: 'center',
    flexDirection: 'row',
  },
  AttributeText: {
    marginLeft: horizontalScale(5),
    color: '#79869F',
  },
});

export default style;
