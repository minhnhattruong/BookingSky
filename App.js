import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';
import { GlobalizeProvider } from 'react-native-globalize';
//Redux
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadCldr } from 'react-native-globalize';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import Navigation from './src/navigation';
import rootReducer from './src/reducers/index';

loadCldr(
  require('react-native-globalize/locale-data/vi'),
);

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default function App() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalizeProvider locale="vi" currency="VND">
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <Navigation />
          </SafeAreaView>
        </GlobalizeProvider>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({

})
