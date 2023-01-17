import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../screens/signup/Signup';
import Verification from '../screens/signup/Verification';
import SignupSuccess from '../screens/signup/SignupSuccess';
const StackSignup = createNativeStackNavigator();

export default function SignupStack() {

    return (
        <StackSignup.Navigator initialRouteName="Signup">
            <StackSignup.Screen
                name="Signup1"
                component={Signup}
                options={{ headerShown: false }}
            />
            <StackSignup.Screen
                name="Verification"
                component={Verification}
                options={{ headerShown: false }}
            />
            <StackSignup.Screen
                name="SignupSuccess"
                component={SignupSuccess}
                options={{ headerShown: false }}
            />
        </StackSignup.Navigator>
    );
}

const styles = StyleSheet.create({});
