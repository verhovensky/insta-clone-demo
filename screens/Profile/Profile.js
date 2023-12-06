import {SafeAreaView, Text, Image, View} from 'react-native';
import style from './style';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyle from '../../styles/globalStyle';
import ProfileTabsNavigation from '../../navigation/ProfileTabsNavigation';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgoundWhite, globalStyle.flexGrow]}>
      <ScrollView contentContainerStyle={globalStyle.flexGrow}>
        <View style={style.profileImageContainer}>
          {/* style={{ width: undefined, height: undefined, flex: 1 }}
          указываете требуемый resizeMode и контролируете фотку уже размерами самого view*/}
          <View style={style.profileImageContent}>
            <Image
              source={require('../../assets/images/rm.jpg')}
              style={style.profileImage}
            />
          </View>
        </View>
        <View>
          <Text style={style.ProfileUsername}>Ernest Hamunguay</Text>
        </View>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.statType}>Following</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>175</Text>
            <Text style={style.statType}>Followers</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>765</Text>
            <Text style={style.statType}>Posts</Text>
          </View>
        </View>
        <View style={style.profileTabsContainer}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
