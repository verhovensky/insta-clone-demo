import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, scalefontSize} from '../../styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scalefontSize(12),
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scalefontSize(12),
  },
});

export default style;
