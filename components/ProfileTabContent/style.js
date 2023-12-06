import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../styles/scaling';

const style = StyleSheet.create({
  ProfileTabContentContainer: {
    backgroundColor: '#FFFFF',
  },
  image: {
    width: horizontalScale(150),
    height: horizontalScale(90),
    resizeMode: 'cover',
    marginTop: verticalScale(11),
  },
  ProfileTabContent: {
    paddingHorizontal: horizontalScale(21),
    paddingVertical: verticalScale(21),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default style;
