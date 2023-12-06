import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  verticalScale,
  scalefontSize,
} from '../../styles/scaling';

const style = StyleSheet.create({
  profilePageContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  profileImage: {
    width: horizontalScale(110),
    height: horizontalScale(110),
    resizeMode: 'cover',
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    overflow: 'hidden',
    borderWidth: 3,
    borderRadius: horizontalScale(100),
    borderColor: '#0150EC',
    padding: horizontalScale(4),
  },
  ProfileUsername: {
    color: '#022150',
    textAlign: 'center',
    marginTop: verticalScale(20),
    fontSize: scalefontSize(20),
    fontFamily: getFontFamily('Inter', '600'),
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(40),
    marginTop: verticalScale(30),
  },
  statAmount: {
    fontSize: scalefontSize(20),
    fontFamily: getFontFamily('Inter', '600'),
    textAlign: 'center',
    color: '#022150',
  },
  statType: {
    fontSize: scalefontSize(16),
    fontFamily: getFontFamily('Inter', '600'),
    textAlign: 'center',
    color: '#79869F',
  },
  statBorder: {
    borderRightColor: '#79869F',
    borderRightWidth: 1,
  },
  profileTabsContainer: {
    flex: 1,
    marginTop: horizontalScale(20),
  },
});

export default style;
