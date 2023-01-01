import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, { useState, useRef, } from 'react';
import Animated from 'react-native-reanimated'
import HeaderBookingFlight from '../../../component/headers/HeaderBookingFlight';
import OneWay from './OneWay';
import RoundTrip from './RoundTrip';

export default function BookingFlight({ navigation, route }) {
  const [oneWays, setOneWays] = useState(true);
  const animatedValue = useRef(new Animated.Value(0)).current;



  return (
    <KeyboardAvoidingView style={styles.container}>
      <HeaderBookingFlight title="Tìm chuyến bay" navigation={navigation} animatedValue={animatedValue} setOneWays={setOneWays} />
      <ScrollView
        onScroll={e => {
          animatedValue.setValue(e.nativeEvent.contentOffset.y)
        }}
        scrollEventThrottle={16}>
        {oneWays ? (
          <OneWay navigation={navigation} />
        ) : (
          <RoundTrip navigation={navigation} />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F9',
  },
  header: {
    paddingTop: 10,
    backgroundColor: '#3C5A99',
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.0,

    elevation: 4,
  },
  oneway: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  viewtabtop: {
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius: 20,
    marginBottom: 10,
  },

});
