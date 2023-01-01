import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ModalFilterFlights(props) {
  const closeModal = () => {
    props.setModalVisible(false);
  };

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={styles.modalContent}>
          <View style={styles.topModal}>
            <Text style={{color: '#3C5A99', fontSize: 20, fontWeight: 'bold'}}>
              Lọc chuyến bay
            </Text>
          </View>

          <ScrollView>
            <View style={styles.bottomModal}>
              <View style={styles.bottomModalItem}>
                <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
                  Giờ bay
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <View>
                    <Text>Trong khoảng</Text>
                  </View>
                  <View>
                    <View style={styles.timeModal}>
                      <View style={styles.textmodal}>
                        <Text>Từ: </Text>
                      </View>
                      <View style={styles.borderTime}>
                        <Text>16:00</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        ...styles.timeModal,
                        marginTop: 20,
                      }}>
                      <View style={styles.textmodal}>
                        <Text>Đến: </Text>
                      </View>

                      <View style={styles.borderTime}>
                        <Text>16:00</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.bottomModal}>
              <View style={styles.bottomModalItem}>
                <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
                  Giờ hạ cánh
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <View>
                    <Text>Trong khoảng</Text>
                  </View>
                  <View>
                    <View style={styles.timeModal}>
                      <View style={styles.textmodal}>
                        <Text>Từ: </Text>
                      </View>
                      <View style={styles.borderTime}>
                        <Text>16:00</Text>
                      </View>
                    </View>

                    <View
                      style={{
                        ...styles.timeModal,
                        marginTop: 20,
                      }}>
                      <View style={styles.textmodal}>
                        <Text>Đến: </Text>
                      </View>

                      <View style={styles.borderTime}>
                        <Text>16:00</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.bottomModal}>
              <View style={styles.bottomModalItem}>
                <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
                  Giá
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Text>20000</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.buttonFind}>
              <Text style={{color: '#fff', fontSize: 18}}>Tìm kiếm</Text>
            </TouchableOpacity>
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
  bottomModal: {
    borderBottomWidth: 1,
    borderColor: '#CCCCCC',
  },
  bottomModalItem: {
    marginHorizontal: 30,
    marginVertical: 30,
  },
  timeModal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textmodal: {
    width: 50,
  },
  borderTime: {
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomColor: '#3C5A99',
    width: 110,
  },
  buttonFind: {
    backgroundColor: '#3C5A99',
    marginHorizontal: 30,
    marginVertical: 30,
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
});
