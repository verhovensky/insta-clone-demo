import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../styles/scaling';

const style = StyleSheet.create({
  profileImageContainer: {
    borderWidth: 3,
    borderColor: '#F35BAC',
    borderRadius: 50,
    padding: horizontalScale(2),
    overflow: 'hidden',
  },
});

export default style;
