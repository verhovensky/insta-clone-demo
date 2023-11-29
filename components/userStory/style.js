import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  verticalScale,
  scalefontSize,
} from '../../styles/scaling';

const style = StyleSheet.create({
  userStoryConstainer: {
    marginRight: horizontalScale(20),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: horizontalScale(10),
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scalefontSize(14),
    color: '#022150',
    marginTop: verticalScale(15),
    textAlign: 'center',
  },
});

export default style;
