import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favourite from '../screens/favourite/Favourite';


const StackFacourite = createNativeStackNavigator();
import {
    getFocusedRouteNameFromRoute,
    getActionFromState,
} from '@react-navigation/native';

export default function FavouriteStack({ navigation, route }) {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === 'Favourite' || routeName === undefined) {
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
        <StackFacourite.Navigator initialRouteName="Favourite">
            <StackFacourite.Screen
                name="Favourite"
                component={Favourite}
                options={{ headerShown: false }}

            />
        </StackFacourite.Navigator>
    );
}
