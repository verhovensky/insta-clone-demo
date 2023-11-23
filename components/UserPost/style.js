import React from 'react';
import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

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
    marginLeft: 10,
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontFamily: getFontFamily('Inter', '600'),
    color: '#000',
  },
  location: {
    fontSize: 12,
    fontFamily: getFontFamily('Inter', '400'),
    color: '#79869F',
    marginTop: 5,
  },
  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  AttributesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  likeContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  commentContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  bookmarkContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  AttributeText: {
    marginLeft: 5,
    color: '#79869F',
  },
});

export default style;
