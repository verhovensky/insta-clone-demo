import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scalefontSize} from '../../styles/scaling';

export default StyleSheet.create({
  profilePageContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backButton: {
    color: '#022150',
    fontSize: scalefontSize(16),
    fontFamily: getFontFamily('Inter', '600'),
  },
});
