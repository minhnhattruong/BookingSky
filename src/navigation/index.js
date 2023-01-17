import React, { useEffect, useState } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector, useDispatch } from 'react-redux';
import LoginScreen from '../screens/Login';
import MainTap from '../navigation/MainTap';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import SignupStack from './SignupStack';
const Stack = createNativeStackNavigator();

function App() {
  const isSignedIn = useSelector(store => store.auth.token);
  console.log(isSignedIn);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <BottomSheetModalProvider>
          <Stack.Navigator initialRouteName="MainTab">
            {isSignedIn ? (

              <Stack.Screen
                name="MainTab"
                component={MainTap}
                options={{ headerShown: false }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Signup"
                  component={SignupStack}
                  options={{ headerShown: false }}
                />


                {/* <Stack.Screen name="Register" component={SettingScreen} options={{ headerShown: false }} /> */}
              </>
            )}
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </NavigationContainer>
    </GestureHandlerRootView >
  );
}

export default App;
