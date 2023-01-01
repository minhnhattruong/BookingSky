import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../../component/headers/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PaymentPicker from '../../../component/PaymentPicker';
import VoucherPicker from '../../../component/VoucherPicker';
import ListCheckingTicket from '../../../component/flightItem/ListCheckingTicket';

export default function PaymentDetails({ navigation, route }) {
  const TICKET = route.params.data
  const [payment, setPayment] = useState();
  const [alert, setAlert] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title={'Thanh toán'} navigation={navigation} />

        <ListCheckingTicket data={TICKET} />

        <View style={styles.dashedLine} />

        <VoucherPicker />

        <PaymentPicker setPayment={setPayment} />
        {alert && (
          <View
            style={{
              paddingLeft: 15,
              paddingTop: 15,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="alert-circle-outline"
              size={20}
              color="#FF0000"
            />
            <Text style={{ color: '#FF0000' }}>
              {' '}
              Vui lòng chọn phương thức trước khi thanh toán!{' '}
            </Text>
          </View>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', height: 70 }}>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: 15,
            }}>
            <Text style={{ color: '#999' }}>Tổng thanh toán</Text>
            <Text style={{ fontSize: 20, fontWeight: '500', color: '#000' }}>
              6.000.000 VNĐ
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF0000',
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() =>
              payment ? navigation.navigate('PaymentSuccess') : setAlert(true)
            }>
            <Text style={{ fontSize: 18, color: '#fff' }}>Thanh toán</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F9',
  },
  header: {
    marginVertical: 15,
  },
  title: {
    color: '#000',
    fontSize: 14,
  },
  footer: {
    backgroundColor: '#fff',
    height: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.0,

    elevation: 1,
  },
  dashedLine: {
    borderWidth: 0.6,
    borderStyle: 'dashed',
    borderColor: '#aaaaaa',
    borderTopColor: '#aaaaaa',
    marginVertical: 10,
  },
});
