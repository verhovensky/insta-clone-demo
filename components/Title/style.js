import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scalefontSize} from '../../styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scalefontSize(24),
  },
});

export default style;
