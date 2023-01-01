import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../screens/account/Account';
import UserInfo from '../screens/account/UserInfo';
import Payment from '../screens/account/Payment';
import AddPayment from '../screens/account/AddPayment';
import PaymentInfo from '../screens/account/PaymentInfo';
import AvatarPick from '../screens/account/AvatarPick';
const StackAccount = createNativeStackNavigator();
import {
    getFocusedRouteNameFromRoute,
    getActionFromState,
} from '@react-navigation/native';

export default function AccountStack({ navigation, route }) {

    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        console.log('routeName', routeName);
        if (routeName === 'Account' || routeName === undefined) {
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
        <StackAccount.Navigator initialRouteName="Account">
            <StackAccount.Screen
                name="Account"
                component={Account}
                options={{ headerShown: false }}
            />
            <StackAccount.Screen
                name="UserInfo"
                component={UserInfo}
                options={{ headerShown: false }}
            />
            <StackAccount.Screen
                name="Payment"
                component={Payment}
                options={{ headerShown: false }}
            />
            <StackAccount.Screen
                name="PaymentInfo"
                component={PaymentInfo}
                options={{ headerShown: false }}
            />
            <StackAccount.Screen
                name="AddPayment"
                component={AddPayment}
                options={{ headerShown: false }}
            />
            <StackAccount.Screen
                name="AvatarPick"
                component={AvatarPick}
                options={{ headerShown: false }}
            />

        </StackAccount.Navigator>
    );
}
