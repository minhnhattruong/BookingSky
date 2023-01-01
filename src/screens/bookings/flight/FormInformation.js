import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../../component/headers/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ContactCustomer from '../../../component/ContactCustomer';
import CustomerList from '../../../component/flightItem/CustomerList';



const CUSTOMER = [
  {
    firstName: 'Minh Nhat',
    lastName: 'Truong',
    sex: 'male',
    birth: '17/10/2022',
    idCard: '013668428',
    nation: 'Viet Nam',
    ageGroup: 'adult'
  },
  {
    firstName: 'Luu Ly',
    lastName: 'Nguyen',
    sex: 'female',
    birth: '17/10/2022',
    idCard: '013668428',
    nation: 'Viet Nam',
    ageGroup: 'adult'
  },
]

const USER_INFO = {
  firstName: 'Minh Nhat',
  lastName: 'Truong',
  phone: '768183914',
  countryCode: '84',
  email: 'truongminhnhat03042000@gmail.com'
}

export default function FormInformation({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Điền thông tin" navigation={navigation} />
      <ScrollView>
        <ContactCustomer data={USER_INFO} />
        <CustomerList data={CUSTOMER} />
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            marginTop: 20,
            backgroundColor: '#fff',
            flexDirection: 'row',
          }}>
          <MaterialCommunityIcons
            name="alert-outline"
            style={{ fontSize: 25, color: '#FFD233', width: '10%' }}
          />
          <Text style={{ color: '#C12626', width: '90%' }}>
            Thông tin hành khách cần được điền đúng và đầy đủ thông tin
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(
            'CheckingInfo',
            {
              data: CUSTOMER,
            }
          )}
          style={styles.buttonContinue}>
          <Text style={{ color: '#fff', fontSize: 17 }}>Tiếp tục</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F9',
  },
  customerItem: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: 10,
    borderRadius: 10,
  },
  buttonContinue: {
    backgroundColor: '#FF0000',
    marginHorizontal: 50,
    marginVertical: 30,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  modalView: {
    margin: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    // alignItems: 'center',
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
    // borderRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    elevation: 2,
  },
  customerInfo: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.00,

    elevation: 2,
  },

  buttonClose: {
    backgroundColor: '#3C5A99',
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
    // fontWeight: 'bold',
    fontSize: 17,
  },
  modal: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
});
