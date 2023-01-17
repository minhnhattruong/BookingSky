import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from '../navigation/HomeStack';
import SignupStack from '../navigation/SignupStack';
import FavouriteStack from '../navigation/FavouriteStack';
import YourBookingStack from './YourBookingStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator();

function MainTap() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
            size = 30;
          } else if (route.name === 'FavouriteStack') {
            iconName = focused ? 'cards-heart' : 'cards-heart-outline';
          } else if (route.name === 'YourBookingStack') {
            iconName = focused
              ? 'ticket-confirmation'
              : 'ticket-confirmation-outline';
          } else if (route.name === 'AccountStack') {
            iconName = focused ? 'account' : 'account-outline';
            size = 28;
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        tabBarItemStyle: {
          paddingVertical: 10,
        },
        tabBarStyle: {
          height: 65,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarActiveTintColor: '#3C5A99',
        tabBarInactiveTintColor: 'gray',
        unmountOnBlur: true
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false, tabBarLabel: 'Trang chủ' }}
      />

      <Tab.Screen
        name="FavouriteStack"
        component={FavouriteStack}
        options={{ headerShown: false, tabBarLabel: 'Ưa thích' }}
      />
      <Tab.Screen
        name="YourBookingStack"
        component={YourBookingStack}
        options={{ headerShown: false, tabBarLabel: 'Đã đặt' }}
      />
      <Tab.Screen
        name="AccountStack"
        component={AccountStack}
        options={{ headerShown: false, tabBarLabel: 'Tài khoản' }}
      />
    </Tab.Navigator>
  );
}

export default MainTap;
