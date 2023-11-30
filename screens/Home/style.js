import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  verticalScale,
  scalefontSize,
} from '../../styles/scaling';

const style = StyleSheet.create({
  header: {
    marginLeft: verticalScale(27),
    marginRight: verticalScale(17),
    marginTop: horizontalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    padding: horizontalScale(12),
    borderRadius: horizontalScale(100),
    backgroundColor: '#F2F2F2',
  },
  iconNumberContainer: {
    position: 'absolute',
    right: horizontalScale(8),
    top: verticalScale(10),
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: horizontalScale(10),
  },
  messageNumber: {
    color: '#FFFFFF',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scalefontSize(6),
  },
  userStoriesContainer: {
    marginTop: verticalScale(20),
    marginBottom: verticalScale(20),
    marginHorizontal: horizontalScale(26),
  },
  userPostsContainer: {
    marginHorizontal: horizontalScale(24),
  },
});

export default style;
