import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, { useState, useCallback, useRef } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ModalFilterFlights({ navigation, bottomSheetRef }) {
  const onChange = () => {
    navigation.navigate('FormInformation');
    bottomSheetRef.current?.close();
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.modalContent}>
          <View style={styles.topModal}>
            <Text style={{ color: '#3C5A99', fontSize: 20, fontWeight: 'bold' }}>
              Chi tiết chuyến bay
            </Text>
          </View>

          <ScrollView>
            <View style={styles.modalMain}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text>Hãng bay</Text>
                  <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                    <Text>Số hiệu:</Text>
                    <Text style={{ color: '#000', fontSize: 15, paddingLeft: 8 }}>
                      VN1403
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.imagelogo}
                  source={require('../../assets/image/logoVietnamAirline.png')}
                />
              </View>
              <View
                style={{
                  borderWidth: 0.6,
                  borderStyle: 'dashed',
                  borderColor: '#aaaaaa',
                  borderTopColor: '#aaaaaa',
                  marginBottom: 10,
                }}
              />

              <View style={styles.viewDetails}>
                <View
                  style={{
                    // backgroundColor: '#000',
                    height: 260,
                    width: '15%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={styles.textTime}>18:35</Text>
                    <Text style={styles.textDate}>2 thg 8</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text style={styles.textTime}>20:45</Text>
                    <Text style={styles.textDate}>2 thg 8</Text>
                  </View>
                </View>

                <View style={styles.viewLine}>
                  <MaterialCommunityIcons
                    name="airplane-takeoff"
                    size={20}
                    color={'#3C5A99'}
                  />
                  <View style={styles.line} />
                  <View
                    style={{
                      height: '7%',
                    }}>
                    <MaterialCommunityIcons
                      name="airplane-landing"
                      size={20}
                      color={'#3C5A99'}
                    />
                  </View>
                </View>

                <View
                  style={{
                    // backgroundColor: 'pink',
                    height: 260,
                    width: '70%',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text style={styles.code}>Hanoi (HAN)</Text>
                    <Text>Noi Bai Airport</Text>
                  </View>
                  <View style={styles.detailFlights}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <MaterialCommunityIcons
                        name="briefcase-outline"
                        size={20}
                      />
                      <View style={{ marginLeft: 10 }}>
                        <Text>Hành lý xách tay 8kg</Text>
                        <Text>Hành lý ký gửi 12kg</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                      }}>
                      <MaterialCommunityIcons name="food" size={20} />
                      <View style={{ marginLeft: 10 }}>
                        <Text>Suất ăn trên máy bay</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 10,
                      }}>
                      <MaterialCommunityIcons name="airplane" size={20} />
                      <View style={{ marginLeft: 10 }}>
                        <Text>Boeing 777</Text>
                      </View>
                    </View>
                  </View>

                  <View>
                    <Text style={styles.code}>Saigon (SGN)</Text>
                    <Text>Tan Son Nhat Airport</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity onPress={onChange} style={styles.buttonNow}>
                <Text style={{ color: '#fff', fontSize: 18 }}>Đặt ngay</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modalView: {
    height: '100%',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  topModal: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    //ios
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0.5,
      width: 1,
    },
    //android
    elevation: 4,
  },
  modalMain: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
  imagelogo: {
    width: 110,
    height: 70,
  },
  viewLine: {
    backgroundColor: '#fff',
    width: '8%',
    height: 260,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewDetails: {
    marginVertical: 20,
    marginHorizontal: 10,
    height: 260,
    width: '100%',
    flexDirection: 'row',
  },
  line: {
    borderWidth: 0.5,
    height: '85%',
    width: '0%',
    borderStyle: 'dashed',
    borderColor: '#3C5A99',
    borderRightColor: '#3C5A99',
  },
  textTime: {
    color: '#000',
    fontSize: 15,
  },
  textDate: {
    color: '#3C5A99',
    fontSize: 13,
    fontWeight: 'bold',
  },
  detailFlights: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderColor: '#F6C000',
    backgroundColor: '#FFEEB4',
    borderRadius: 15,
  },
  code: {
    color: '#000',
    fontWeight: 'bold',
  },
  buttonNow: {
    marginTop: 30,
    backgroundColor: '#F70202',
    marginHorizontal: 40,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
});
