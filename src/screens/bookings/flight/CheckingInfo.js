import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../../component/headers/Header';
import ListCheckingTicket from '../../../component/flightItem/ListCheckingTicket'
import ListCheckingCustomer from '../../../component/flightItem/ListCheckingCustomer'

const TICKET = [
  {
    id: 1,
    airway: '',
    departLocation: 'HN',
    arriveLocation: 'SGN',
    departTime: '7:00',
    arriveTime: '9:00',
    date: 'T3, 2 thg 8 2022',
    seat: 'Economy',
    price: '2,000,000',
    quantity: 4

  },
  {
    id: 2,
    airway: '',
    departLocation: 'SGN',
    arriveLocation: 'HN',
    departTime: '7:00',
    arriveTime: '9:00',
    date: 'T5, 5 thg 8 2022',
    seat: 'Economy',
    price: '1,800,000',
    quantity: 4

  },
]

export default function PayBooking({ navigation, route }) {

  const CUSTOMER = route.params.data
  const [modalVisible, setModalVisible] = useState(false);
  const payment = () => {
    navigation.navigate(
      'PaymentDetails',
      {
        data: TICKET
      }),
      setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Header title="Kiểm tra thông tin" navigation={navigation} />
      <ScrollView>
        <ListCheckingTicket data={TICKET} />

        <View style={styles.dashedLine} />

        <ListCheckingCustomer data={CUSTOMER} />

        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.mainBtn}>
          <Text style={{ color: '#fff', fontSize: 18 }}>Thanh toán</Text>
        </TouchableOpacity>
      </ScrollView>



      <Modal transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Bạn đã chắc chắn thông tin đặt chỗ chính xác?
            </Text>
            <Text style={styles.modalText1}>
              Bạn sẽ không thể thay đổi thông tin đặt chỗ sau khi thanh toán.
              Bạn có muốn tiếp tục?
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{ ...styles.textStyle, color: '#3C5A99' }}>
                Kiểm tra lại
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.button, backgroundColor: '#3C5A99' }}
              onPress={() => payment()}>
              <Text style={{ ...styles.textStyle, color: 'white' }}>
                Đến bước Thanh toán
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F9',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    // elevation: 2,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#3C5A99',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  modalText1: {
    marginBottom: 15,
    fontSize: 14,
    textAlign: 'center',
    color: '#000',
  },
  dashedLine: {
    borderWidth: 0.6,
    borderStyle: 'dashed',
    borderColor: '#aaaaaa',
    borderTopColor: '#aaaaaa',
    marginVertical: 10,
  },
  mainBtn: {
    marginVertical: 30,
    backgroundColor: '#F70202',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
    padding: 15,
    borderRadius: 20,
  }
});
