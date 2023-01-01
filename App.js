import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
//Redux
import { createStore, combineReducers } from 'redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import Icon from 'react-native-vector-icons/MaterialIcons'

// import HomeSlice from "./src/store/HomeSlice";
import AuthSlice from './src/reducers/AuthSlice';

import Navigation from './src/navigation';

// import { store } from './src/store/store'

export const allReducers = combineReducers({
  auth: AuthSlice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
    }),
});

export default function App() {

  let persistor = persistStore(store);
  // In app.tsx


  return (
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <Navigation />
          </SafeAreaView>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({

})
