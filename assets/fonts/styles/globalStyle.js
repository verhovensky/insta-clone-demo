import {StyleSheet} from 'react-native';
import {getFontFamily} from '../helper';

// TODO move to other module

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    padding: 12,
    borderRadius: 100,
    backgroundColor: '#F2F2F2',
  },
  iconNumberContainer: {
    position: 'absolute',
    right: 10,
    top: 12,
    backgroundColor: '#F35BAC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 6,
  },
  userStoriesContainer: {
    marginTop: 20,
    marginHorizontal: 26,
  },
  userPostsContainer: {
    marginHorizontal: 24,
  },
});

export default globalStyle;
