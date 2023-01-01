import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState, useCallback, useMemo, useRef } from 'react';
import { defaultStyles } from '../../../style/style'
import HeaderFlightList from '../../../component/headers/HeaderFlightList';
import ListFlight from '../../../component/flightItem/ListFlight';
import { useRoute } from '@react-navigation/native';
import Animated from 'react-native-reanimated';


const DATA = [
  {
    id: 1,
    from: 'HAN',
    to: 'SGN',
    departuretime: '18:35',
    arrivaltime: '20:45',
    total: `2h05'`,
    tickettype: 'Economy',
    image: require('../../../assets/image/logobamboairway.png'),
  },
  {
    id: 2,
    from: 'HAN',
    to: 'SGN',
    departuretime: '17:35',
    arrivaltime: '18:45',
    total: `2h05'`,
    tickettype: 'Economy',
    image: require('../../../assets/image/logoVietnamAirline.png'),
  },
  {
    id: 3,
    from: 'HAN',
    to: 'SGN',
    departuretime: '18:35',
    arrivaltime: '20:45',
    total: `2h05'`,
    tickettype: 'Economy',
    image: require('../../../assets/image/logobamboairway.png'),
  },
  {
    id: 4,
    from: 'HAN',
    to: 'SGN',
    departuretime: '17:35',
    arrivaltime: '18:45',
    total: `2h05'`,
    tickettype: 'Economy',
    image: require('../../../assets/image/logoVietnamAirline.png'),
  },
];

function FindReturnTicket({ navigation, route }) {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const routeName = useRoute().name;
  return (
    <View style={defaultStyles.containers}>
      <HeaderFlightList
        routeName={routeName}
        navigation={navigation}
        animatedValue={animatedValue}
      //WAITING FOR REDUCT
      />
      <ScrollView
        onScroll={e => {
          animatedValue.setValue(e.nativeEvent.contentOffset.y)
        }}
        scrollEventThrottle={16}>
        <ListFlight data={DATA} routeName={routeName} navigation={navigation} />
      </ScrollView>
    </View>
  );
}



export default FindReturnTicket;
