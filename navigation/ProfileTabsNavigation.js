import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Text, View} from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const ProfileTabs = createMaterialTopTabNavigator();

// TODO: move tabs content and styles to separate modules

const Tab2 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Tab2 content</Text>
    </View>
  );
};

const Tab3 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>And even Tab3 content</Text>
    </View>
  );
};

const ProfileTabsNavigation = () => {
  return (
    // ProfileTabs.Screen - это неправильно, лучше всего вынести за пределы рендер-функции навигатора
    // Мемоизировать внутри смысла нет, т.к. зависимостей нет никаких
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {backgroundColor: 'transparent'},
        tabBarStyle: {zIndex: 0, elevation: 0},
      }}>
      <ProfileTabs.Screen
        name={'Tab1'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={'Photos'} isFocused={focused} />
          ),
        }}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        component={Tab2}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={'Videos'} isFocused={focused} />
          ),
        }}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        component={Tab3}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={'Saved'} isFocused={focused} />
          ),
        }}
      />
    </ProfileTabs.Navigator>
  );
};

export default ProfileTabsNavigation;
