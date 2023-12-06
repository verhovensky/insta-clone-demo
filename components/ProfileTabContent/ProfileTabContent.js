import {ScrollView} from 'react-native-gesture-handler';
import style from './style';
import {View} from 'react-native';
import {Image} from 'react-native';

const ProfileTabContent = props => {
  return (
    <ScrollView style={style.ProfileTabContentContainer}>
      <View style={style.ProfileTabContent}>
        <Image
          source={require('../../assets/images/rm.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/images/rm.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/images/rm.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/images/rm.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/images/rm.jpg')}
          style={style.image}
        />
        <Image
          source={require('../../assets/images/rm.jpg')}
          style={style.image}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
