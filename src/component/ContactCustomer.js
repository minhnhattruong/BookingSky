import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal
} from 'react-native';
import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ContactCustomer(props) {
  const contactInfo = props.data
  const [modalChangeInfo, setModalChangeInfo] = useState(false);
  const [lastName, setLastName] = useState(contactInfo.lastName);
  const [firstName, setFirstName] = useState(contactInfo.firstName);
  const [countryCode, setCountryCode] = useState(contactInfo.countryCode);
  const [phone, setPhone] = useState(contactInfo.phone);
  const [email, setEmail] = useState(contactInfo.email);

  const modalButtonPress = () => {
    setModalChangeInfo(false)
    //Change value of contact user's info
    contactInfo.lastName = lastName
    contactInfo.firstName = firstName
    contactInfo.countryCode = countryCode
    contactInfo.phone = phone
    contactInfo.email = email
  }

  return (
    <>
      <View style={styles.customerInfo}>
        <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#fff', alignItems: 'center', paddingHorizontal: 15, }}>
          <AntDesign name='user' size={22} color={'#999'} />
          <Text style={{ fontSize: 15, color: '#000', marginLeft: 5 }}>Thông tin người liên hệ</Text>
        </View>
        <View style={{
          height: 80, backgroundColor: '#DDECFF', alignItems: 'center', justifyContent: 'space-between',
          paddingLeft: 20, flexDirection: 'row', borderBottomLeftRadius: 15, borderBottomRightRadius: 15,
        }}>
          <View style={{ width: '80%' }}>
            <Text style={{ color: '#000', fontWeight: '500', fontSize: 15 }}>{lastName + ' ' + firstName}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 13, width: '60%' }} numberOfLines={1} ellipsizeMode={'tail'}>{email}</Text>
              <View style={{ backgroundColor: '#616161', width: 5, height: 5, borderRadius: 7, marginHorizontal: 5, }}></View>
              <Text style={{ fontSize: 13, width: '30%' }} numberOfLines={1} ellipsizeMode={'tail'}>+ {countryCode + ' ' + phone}</Text>
            </View>
          </View>
          <TouchableOpacity style={{ height: '100%', width: '20%', justifyContent: 'center', alignItems: 'center', }}
            onPress={() => setModalChangeInfo(!modalChangeInfo)}>
            <Text
              style={{ fontSize: 12, color: '#C12626' }}>Thay đổi</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        transparent={true}
        visible={modalChangeInfo}
        onRequestClose={() => setModalChangeInfo(modalChangeInfo)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalChangeInfo}>
            <Text style={{ marginTop: 20, fontSize: 16, color: '#000', textAlign: 'center' }}>Thêm thông tin người liên hệ</Text>
            <View style={{ marginTop: 5, marginBottom: 30, paddingHorizontal: 20 }}>
              <View style={styles.input}>
                <Text style={styles.inputTitle}>Họ</Text>
                <TextInput
                  onChangeText={setLastName}
                  value={lastName}
                  style={styles.inputTxt}
                />
              </View>
              <View style={styles.input}>
                <Text style={styles.inputTitle}>Tên đệm và tên</Text>
                <TextInput
                  style={styles.inputTxt}
                  onChangeText={setFirstName}
                  value={firstName}
                />
              </View>
              <View>
                <Text style={styles.inputTitle}>Số điện thoại</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View style={styles.input}>
                    <TextInput
                      style={[styles.inputTxt, { width: 50 }]}
                      onChangeText={setCountryCode}
                      value={countryCode}
                    />
                  </View>
                  <View style={styles.input}>
                    <TextInput
                      style={[styles.inputTxt, { width: 200 }]}
                      onChangeText={setPhone}
                      value={phone}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.input}>
                <Text style={styles.inputTitle}>Email</Text>
                <TextInput
                  style={styles.inputTxt}
                  onChangeText={setEmail}
                  value={email}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.btnInfo} onPress={() => modalButtonPress()}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Xong</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>

  );
}

const styles = StyleSheet.create({
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  modalChangeInfo: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden'
  },
  input: {
    borderBottomWidth: 0.25,
    borderColor: '#999999',
    marginBottom: 10
  },
  inputTitle: {
    fontSize: 12,
    marginTop: 15,
    marginBottom: 3,
    fontWeight: '500',
    color: '#999'
  },
  inputTxt: {
    height: 30,
    padding: 2
  },
  btnInfo: {
    height: 50,
    backgroundColor: '#3C5A99',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
