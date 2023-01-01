import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState, useCallback, useMemo, useRef } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../../component/headers/Header';
import ModalFlightDetails from '../../../component/flightItem/ModalFlightDetails';

import {
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import CustomBackdrop from '../../../component/CustomBackdrop ';

export default function BookingTicket({ navigation }) {
  const bottomSheetRef = useRef(null);
  // variables
  const snapPoints = useMemo(() => ['90%', '90%'], []);
  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const renderBackdrop = useCallback(
    props => (
      <CustomBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
        bottomSheetRef={bottomSheetRef}
      />
    ),
    [],
  );

  return (
    <View style={styles.container}>
      <Header title="Đặt chuyến bay" navigation={navigation} />
      <View>
        <ScrollView style={styles.scroll}>
          <View style={styles.boderLeft}>
            <View style={{ ...styles.viewicon, marginTop: -10 }}>
              <MaterialCommunityIcons
                name="airplane-takeoff"
                size={20}
                color={'#686868'}
              />
              <Text style={{ ...styles.date }}>T3, 2 thg 8 2022</Text>
            </View>

            {/* itemdatve */}
            <View style={styles.boderItem}>
              <View style={styles.numberVeItem}>
                <Text style={{ color: '#2E89FF' }}>4x</Text>
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/image/logoVietnamAirline.png')}
                  />

                  <View>
                    <MaterialCommunityIcons
                      name="airplane-takeoff"
                      size={13}
                      color={'#686868'}
                    />
                    <Text style={styles.title}>HAN</Text>
                    <Text style={styles.titletime}>SGN</Text>
                  </View>

                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{ fontSize: 12, top: 7 }}>2h05'</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <MaterialCommunityIcons
                        name="circle-medium"
                        style={{ fontSize: 16 }}
                      />
                      <View
                        style={{
                          borderBottomWidth: 1,
                          width: 60,
                          borderStyle: 'dashed',
                          borderBottomColor: '#BBBBBB',
                          alignItems: 'center',
                        }}
                      />
                      <MaterialCommunityIcons
                        name="circle-medium"
                        style={{ fontSize: 16 }}
                      />
                    </View>
                  </View>

                  <View>
                    <MaterialCommunityIcons
                      name="airplane-landing"
                      size={13}
                      color={'#686868'}
                    />
                    <Text style={styles.title}>SGN</Text>
                    <Text style={styles.titletime}>HAN</Text>
                  </View>
                </View>

                <View
                  style={{
                    borderBottomWidth: 1,
                    borderStyle: 'dashed',
                    borderColor: '#999999',
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <View style={{ width: '40%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text>Economy</Text>
                      <View style={styles.briefcase}>
                        <MaterialCommunityIcons
                          name="briefcase-outline"
                          color="white"
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: '#000', fontSize: 13 }}>VNĐ</Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          color: '#000',
                          fontSize: 18,
                          fontWeight: 'bold',
                          marginLeft: 5,
                        }}>
                        2,000,000
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => handlePresentModalPress()}
                    style={styles.button}>
                    <Text style={{ color: '#2E89FF', fontSize: 14 }}>
                      Chi tiết
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={{ ...styles.viewicon, marginBottom: -7 }}>
              <MaterialCommunityIcons
                name="airplane-landing"
                size={20}
                color={'#686868'}
              />
              <Text style={{ ...styles.date }}>CN, 6 thg 8 2022</Text>
            </View>
          </View>
          <View style={styles.boderLeftbottom}>
            <View style={styles.boderItem}>
              <View style={styles.numberVeItem}>
                <Text style={{ color: '#2E89FF' }}>4x</Text>
              </View>
              <View
                style={{
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.tinyLogo}
                    source={require('../../../assets/image/logoVietnamAirline.png')}
                  />

                  <View>
                    <MaterialCommunityIcons
                      name="airplane-takeoff"
                      size={13}
                      color={'#686868'}
                    />
                    <Text style={styles.title}>HAN</Text>
                    <Text style={styles.titletime}>SGN</Text>
                  </View>

                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={{ fontSize: 12, top: 7 }}>2h05'</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <MaterialCommunityIcons
                        name="circle-medium"
                        style={{ fontSize: 16 }}
                      />
                      <View
                        style={{
                          borderBottomWidth: 1,
                          width: 60,
                          borderStyle: 'dashed',
                          borderBottomColor: '#BBBBBB',
                          alignItems: 'center',
                        }}
                      />
                      <MaterialCommunityIcons
                        name="circle-medium"
                        style={{ fontSize: 16 }}
                      />
                    </View>
                  </View>

                  <View>
                    <MaterialCommunityIcons
                      name="airplane-landing"
                      size={13}
                      color={'#686868'}
                    />
                    <Text style={styles.title}>SGN</Text>
                    <Text style={styles.titletime}>HAN</Text>
                  </View>
                </View>

                <View
                  style={{
                    borderBottomWidth: 1,
                    borderStyle: 'dashed',
                    borderColor: '#999999',
                    marginTop: 10,
                  }}
                />

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}>
                  <View style={{ width: '40%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text>Economy</Text>
                      <View style={styles.briefcase}>
                        <MaterialCommunityIcons
                          name="briefcase-outline"
                          color="white"
                        />
                      </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ color: '#000', fontSize: 13 }}>VNĐ</Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          color: '#000',
                          fontSize: 18,
                          fontWeight: 'bold',
                          marginLeft: 5,
                        }}>
                        2,000,000
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    onPress={() => handlePresentModalPress()}
                    style={styles.button}>
                    <Text style={{ color: '#2E89FF', fontSize: 14 }}>
                      Chi tiết
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.modalBoder}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.text}>Ha Noi (HAN)</Text>
            <MaterialCommunityIcons
              name="swap-horizontal"
              style={{ fontSize: 20, color: '#000' }}
            />
            <Text style={styles.text}>Sai Gon (SGN)</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>T3, 2 thg 8 2022</Text>
            <MaterialCommunityIcons
              name="swap-horizontal"
              style={{ fontSize: 20, color: '#fff' }}
            />
            <Text>T3, 2 thg 8 2022</Text>
          </View>
          <Text>Economy</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 15,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{ color: '#000', fontSize: 14 }}>Tổng cộng:</Text>
              <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                <Text style={{ color: '#000', fontSize: 20, fontWeight: 'bold' }}>
                  14.000.000
                </Text>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginLeft: 5,
                  }}>
                  VNĐ
                </Text>
              </View>
            </View>

            <View
              style={{
                borderWidth: 1,
                borderColor: '#F70202',
                borderRadius: 15,
                marginTop: 7,
                flexDirection: 'row',
                width: '50%',
              }}>
              <Pressable style={styles.buttony}>
                <Text
                  style={{
                    color: '#F70202',
                    // paddingHorizontal: 15,
                    paddingVertical: 10,
                  }}>
                  Yêu thích
                </Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate('FormInformation')}
                style={{
                  ...styles.buttony,
                  borderWidth: 1,
                  borderColor: '#F70202',
                  backgroundColor: '#F70202',
                  borderTopRightRadius: 14,
                  borderBottomRightRadius: 14,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    // paddingHorizontal: 15,
                    paddingVertical: 10,
                  }}>
                  Đặt ngay
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <BottomSheetModal
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}>
        <BottomSheetScrollView style={styles.contentContainer}>
          <ModalFlightDetails navigation={navigation} />
        </BottomSheetScrollView>
      </BottomSheetModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F9',
  },
  scroll: {
    height: '65%',
  },
  boderLeft: {
    marginHorizontal: 15,
    marginTop: 20,
    borderLeftWidth: 1,
    borderColor: '#999999',
    paddingHorizontal: 10,
    borderStyle: 'dashed',
  },
  boderLeftbottom: {
    marginHorizontal: 15,
    borderColor: '#999999',
    paddingHorizontal: 10,
    borderStyle: 'dashed',
  },
  date: {
    color: '#000',
    fontSize: 15,
    marginLeft: 10,
  },
  viewicon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boderItem: {
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 140,
    width: '100%',
    marginVertical: 15,
    flexDirection: 'row',
  },
  numberVeItem: {
    backgroundColor: '#C5DEFF',
    width: '15%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 70,
    height: 50,
    marginRight: 10,
  },
  title: {
    color: '#000',
    fontSize: 14,
  },
  titletime: {
    fontSize: 11,
  },
  briefcase: {
    backgroundColor: '#F6C000',
    width: 30,
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 10,
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#C5DEFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 7,
  },
  buttony: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBoder: {
    height: '35%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    //ios
    shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowOffset: {
      height: 0.5,
      width: 1,
    },
    //android
    elevation: 4,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    color: '#000',
    fontSize: 16,
  },
});
