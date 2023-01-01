import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import ModalPeople from '../../../component/ModalPeople';
import { buttonStyles } from '../../../style/style';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@gorhom/bottom-sheet';

const DATA = [
  {
    id: 1,
    from: 'Hanoi (HAN)',
    to: 'Saigon (SGN)',
    departuretime: 'T4, 14-9-2022',
    arrivaltime: 'T6, 16-9-2022',
    numberpassengers: '4',
    tickettype: 'Economy',
  },
  {
    id: 2,
    from: 'Hanoi (HAN)',
    to: 'Saigon (SGN)',
    departuretime: 'T4, 14-9-2022',
    arrivaltime: 'T6, 16-9-2022',
    numberpassengers: '4',
    tickettype: 'Economy',
  },
  {
    id: 3,
    from: 'Hanoi (HAN)',
    to: 'Saigon (SGN)',
    departuretime: 'T4, 14-9-2022',
    arrivaltime: 'T6, 16-9-2022',
    numberpassengers: '4',
    tickettype: 'Economy',
  },
  {
    id: 4,
    from: 'Hanoi (HAN)',
    to: 'Saigon (SGN)',
    departuretime: 'T4, 14-9-2022',
    arrivaltime: 'T6, 16-9-2022',
    numberpassengers: '4',
    tickettype: 'Economy',
  },
];

export default function OneWay({ navigation }) {
  const [departLocation, setDepartLocation] = useState('');
  const [arrivalLocation, setArrivalLocation] = useState('');
  const [checkin, setCheckin] = useState(new Date());
  const [people, setPeople] = useState(0);
  const [openCheckIn, setOpenCheckIn] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [numAdult, setNumAdult] = useState(1);
  const [numChild, setNumChild] = useState(0);
  const [numBaby, setNumBaby] = useState(0);

  useEffect(() => {
    setPeople(numAdult + numBaby + numChild)
  })

  return (
    <>
      <Modal
        transparent={true}
        visible={modalVisible}
        nRequestClose={() => setModalVisible(modalVisible)}>
        <ModalPeople
          setModalVisible={setModalVisible}
          numAdult={setNumAdult}
          numChild={setNumChild}
          numBaby={setNumBaby} />
      </Modal>
      <View style={styles.lowerHeader}>
        <View style={styles.searchingForm}>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 12 }}>Từ</Text>
            <View style={styles.inputItems}>
              <MaterialCommunityIcons
                name="airplane-takeoff"
                size={20}
                color={'#686868'}
              />
              <TextInput
                onChangeText={setDepartLocation}
                value={departLocation}
                style={{
                  flex: 1,
                  padding: 0,
                  marginLeft: 10,
                  fontSize: 15,
                }}
              />
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 12 }}>Đến</Text>
            <View style={styles.inputItems}>
              <MaterialCommunityIcons
                name="airplane-landing"
                size={20}
                color={'#686868'}
              />
              <TextInput
                onChangeText={setArrivalLocation}
                value={arrivalLocation}
                style={{
                  flex: 1,
                  padding: 0,
                  marginLeft: 10,
                  fontSize: 15,
                }}
              />
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 12 }}>Ngày đi</Text>
            <TouchableOpacity onPress={() => setOpenCheckIn(true)} style={styles.inputItems}>
              <AntDesign name="calendar" size={18} color={'#686868'} />

              <DatePicker
                modal
                open={openCheckIn}
                date={checkin}
                mode={'date'}
                title="Ngày nhận phòng"
                confirmText="Chọn"
                cancelText="Hủy"
                locale="vi_VN"
                onConfirm={checkin => {
                  setOpenCheckIn(false);
                  setCheckin(checkin);
                }}
                onCancel={() => {
                  setOpenCheckIn(false);
                }}
              />
              <Text
                style={{
                  padding: 2,
                  marginLeft: 10,
                  color: '#000',
                  fontSize: 15,
                }}>{`${checkin.toLocaleDateString()}`}</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginTop: 15,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{ width: '46%' }}>
              <Text style={{ fontSize: 12 }}>Số người</Text>
              <View style={styles.inputItems}>
                <Feather name="user" size={20} color={'#686868'} />
                <Text style={{ color: '#000', paddingLeft: 10 }}>{people}</Text>
              </View>
            </TouchableOpacity>

            <View style={{ width: '46%' }}>
              <Text style={{ fontSize: 12 }}>Loại vé</Text>
              <View style={styles.inputItems}>
                <MaterialCommunityIcons
                  name="seat-passenger"
                  size={20}
                  color={'#686868'}
                />
                <Text style={{ color: '#000', paddingLeft: 10 }}>Economy</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate(
                'FindOneWay',
                {
                  date: checkin.toLocaleDateString(),
                  depart: departLocation,
                  arrival: arrivalLocation,
                  ticket: people,
                })}
            style={[buttonStyles.redButton3, { marginTop: 20 }]}>
            <Text style={{ color: '#fff', fontWeight: '500' }}>
              Tìm kiếm chuyến bay
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 160 }}></View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 10
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 16,
              color: '#3C5A99',
              marginRight: 5,
              fontWeight: '500',
            }}>
            Lịch sử tìm kiếm
          </Text>
          <MaterialCommunityIcons
            name="history"
            style={{ fontSize: 20, color: '#3C5A99' }}
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            name="delete-outline"
            style={{ fontSize: 20, color: '#F70202' }}
          />
          <Text
            style={{
              color: '#F70202',
              marginRight: 3,
              fontSize: 14,
              textDecorationLine: 'underline',
            }}>
            Xóa lịch sử
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.recentHotel}>
        {DATA.map((e, i) => (
          <TouchableOpacity key={i} style={styles.recentHotelItem}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
              <View style={styles.depart}>
                <Text style={{ fontSize: 18, color: '#000', fontWeight: '500' }}>{e.from}</Text>
                <Text style={{ fontSize: 13, marginTop: 5 }}>{e.departuretime}</Text>
              </View>
              <MaterialCommunityIcons name="arrow-right-thin" color={'#000'} size={24}
              />
              <View style={styles.arrival}>
                <Text style={{ fontSize: 18, color: '#000', fontWeight: '500' }}>{e.to}</Text>
                <Text style={{ fontSize: 13, marginTop: 5 }}>{e.arrivaltime}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 15 }}>{e.numberpassengers} vé</Text>
              <View style={{ width: 5, height: 5, backgroundColor: '#888', borderRadius: 6, marginHorizontal: 5 }} />
              <Text style={{ fontSize: 15 }}>{e.tickettype}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchingForm: {
    height: 310,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 130,
    width: WINDOW_WIDTH * 0.85,
    borderRadius: 40,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.0,

    elevation: 1,
    zIndex: 1,
  },
  bthSearch: {
    backgroundColor: '#F70202',
    alignItems: 'center',
    borderRadius: 15,
    paddingVertical: 8,
    marginTop: 20,
  },
  recentHotelItem: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    height: WINDOW_HEIGHT * 0.15,
    paddingHorizontal: 25,
    paddingVertical: 25,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  lowerHeader: {
    height: 290,
    alignItems: 'center',
    backgroundColor: '#3C5A99',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    zIndex: 1,
  },
  inputItems: {
    height: 30,
    borderBottomWidth: 0.25,
    borderBottomColor: '#616161',
    flexDirection: 'row',
    alignItems: 'center',
  },
  recentHotel: {
    paddingBottom: 30,
  }
});
