import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YourBooking from '../screens/yourbooking/YourBooking';
import TicketHotel from '../screens/yourbooking/TicketHotel';
import ScreenMap from '../screens/maps/ScreenMap';
import FeedBack from '../screens/yourbooking/FeedBack';
const StackYourBooking = createNativeStackNavigator();
import {
    getFocusedRouteNameFromRoute,
    getActionFromState,
} from '@react-navigation/native';


export default function YourBookingStack({ navigation, route }) {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === 'YourBooking' || routeName === undefined) {
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
        <StackYourBooking.Navigator initialRouteName="YourBooking">
            <StackYourBooking.Screen
                name="YourBooking"
                component={YourBooking}
                options={{ headerShown: false }}
            />
            <StackYourBooking.Screen
                name="TicketHotel"
                component={TicketHotel}
                options={{ headerShown: false }}
            />
            <StackYourBooking.Screen
                name="ScreenMap"
                component={ScreenMap}
                options={{ headerShown: false }}
            />
            <StackYourBooking.Screen
                name="FeedBack"
                component={FeedBack}
                options={{ headerShown: false }}
            />
        </StackYourBooking.Navigator>
    );
}
