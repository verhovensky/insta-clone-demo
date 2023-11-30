import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import style from './style';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={style.profilePageContainer}>
      <Text>My Profile</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={style.backButton}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
