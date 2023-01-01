import { View, ScrollView, } from 'react-native';
import React, { useRef } from 'react';
import Animated from 'react-native-reanimated'
import HeaderFlightList from '../../../component/headers/HeaderFlightList';
import ListFlight from '../../../component/flightItem/ListFlight';
import { useRoute } from '@react-navigation/native';
import { defaultStyles } from '../../../style/style'

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
    about: `2h05'`,
    tickettype: 'Economy',
    image: require('../../../assets/image/logoVietnamAirline.png'),
  },
  {
    id: 5,
    from: 'HAN',
    to: 'SGN',
    departuretime: '17:35',
    arrivaltime: '18:45',
    total: `2h05'`,
    tickettype: 'Economy',
    image: require('../../../assets/image/logoVietnamAirline.png'),
  },
  {
    id: 6,
    from: 'HAN',
    to: 'SGN',
    departuretime: '17:35',
    arrivaltime: '18:45',
    about: `2h05'`,
    tickettype: 'Economy',
    image: require('../../../assets/image/logoVietnamAirline.png'),
  },
];

function FindOneWay({ navigation, route }) {
  const { depart, date, arrival, ticket } = route.params;
  const routeName = useRoute().name
  const animatedValue = useRef(new Animated.Value(0)).current;


  return (
    <View style={defaultStyles.containers}>
      <HeaderFlightList
        routeName={routeName}
        navigation={navigation}
        animatedValue={animatedValue}
        depart={depart}
        arrival={arrival}
        date={date}
        ticket={ticket} />
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


export default FindOneWay;