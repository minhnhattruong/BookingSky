import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BookingHotel from '../screens/bookings/hotel/BookingHotel';
import Home from '../screens/Home';
import HotelList from '../screens/bookings/hotel/HotelList';
import HotelInfo from '../screens/bookings/hotel/HotelInfo';
import RoomInfo from '../screens/bookings/hotel/RoomInfo';
import BookingSuccess from '../screens/bookings/hotel/BookingSuccess';
import ScreenMap from '../screens/maps/ScreenMap';
import NotificationScreen from '../screens/Notification';
import SettingScreen from '../screens/setting/Setting';
import SecurityScreen from '../screens/setting/Security';
import ChangePasswordScreen from '../screens/setting/ChangePassword';
import ChangeLanguageScreen from '../screens/setting/ChangeLanguage';
import ChangeCurrencyScreen from '../screens/setting/ChangeCurrency';
import SettingNotificationScreen from '../screens/setting/SettingNotification';

const StackHome = createNativeStackNavigator();
import {
  getFocusedRouteNameFromRoute,
  getActionFromState,
} from '@react-navigation/native';

export default function HomeStack({ navigation, route }) {

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'Home' || routeName === undefined) {
      navigation.setOptions({
        tabBarStyle: {
          height: 65,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          display: 'flex',
          position: 'absolute'
        },
      });
    } else {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    }

  }, [navigation, route]);

  return (
    <StackHome.Navigator initialRouteName="Home" >
      <StackHome.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="BookingHotel"
        component={BookingHotel}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="HotelList"
        component={HotelList}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="HotelInfo"
        component={HotelInfo}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="RoomInfo"
        component={RoomInfo}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="BookingSuccess"
        component={BookingSuccess}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="Notification"
        component={NotificationScreen}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="Setting"
        component={SettingScreen}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="Security"
        component={SecurityScreen}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="ChangeLanguage"
        component={ChangeLanguageScreen}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="ChangeCurrency"
        component={ChangeCurrencyScreen}
        options={{ headerShown: false }}
      />
      <StackHome.Screen
        name="SettingNotification"
        component={SettingNotificationScreen}
        options={{ headerShown: false }}
      />

      <StackHome.Screen
        name="ScreenMap"
        component={ScreenMap}
        options={{ headerShown: false }}
      />
    </StackHome.Navigator>
  );
}
