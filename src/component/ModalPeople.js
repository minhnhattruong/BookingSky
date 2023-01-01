import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ModalPeople(props) {
  const closeModal = () => {
    props.setModalVisible(false);
  };

  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [baby, setBaby] = useState(0);
  const setNumChild = props.numChild;
  const setNumBaby = props.numBaby;
  const setNumAdult = props.numAdult;

  const HandlePress = () => {
    setNumChild(Number(child));
    setNumBaby(Number(baby));
    setNumAdult(Number(adult));
    closeModal();
  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              paddingVertical: 20,
              paddingHorizontal: '20%',
              fontWeight: 'bold',
            }}>
            Thêm khách hàng
          </Text>
        </View>

        <View style={styles.modalvien}>
          <View style={styles.modalContent}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: '#000', fontWeight: '500', fontSize: 15 }}>
                  Người lớn
                </Text>
                <Text style={{ fontWeight: '500', fontSize: 11 }}>
                  Trên 12 tuổi
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: 130,
                  justifyContent: 'space-between',
                  marginRight: 20,
                }}>
                <TouchableOpacity
                  style={styles.btnMinus}
                  onPress={() =>
                    setAdult(prev => (prev > 0 ? prev - 1 : 0))
                  }>
                  <AntDesign name="minus" size={15} color={'#2E89FF'} />
                </TouchableOpacity>
                <View style={{ height: 30 }}>
                  <TextInput
                    onChangeText={setAdult}
                    value={adult.toString()}
                    keyboardType={'number-pad'}
                    style={styles.textInputpeople}
                  />
                </View>
                <TouchableOpacity
                  style={styles.btnPlus}
                  onPress={() => setAdult(prev => prev + 1)}>
                  <AntDesign name="plus" size={15} color={'#2E89FF'} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: '#000', fontWeight: '500', fontSize: 15 }}>
                  Trẻ em
                </Text>
                <Text style={{ fontWeight: '500', fontSize: 11 }}>
                  Từ 2 - 11 tuổi
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: 130,
                  justifyContent: 'space-between',
                  marginRight: 20,
                }}>
                <TouchableOpacity
                  style={styles.btnMinus}
                  onPress={() =>
                    setChild(prev => (prev > 0 ? prev - 1 : 0))
                  }>
                  <AntDesign name="minus" size={15} color={'#2E89FF'} />
                </TouchableOpacity>
                <View style={{ height: 30 }}>
                  <TextInput
                    onChangeText={setChild}
                    value={child.toString()}
                    keyboardType={'number-pad'}
                    style={styles.textInputpeople}
                  />
                </View>
                <TouchableOpacity
                  style={styles.btnPlus}
                  onPress={() => setChild(prev => prev + 1)}>
                  <AntDesign name="plus" size={15} color={'#2E89FF'} />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 20,
              }}>
              <View style={{ flexDirection: 'column' }}>
                <Text style={{ color: '#000', fontWeight: '500', fontSize: 15 }}>
                  Em bé
                </Text>
                <Text style={{ fontWeight: '500', fontSize: 11 }}>
                  Dưới 2 tuổi
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  width: 130,
                  justifyContent: 'space-between',
                  marginRight: 20,
                }}>
                <TouchableOpacity
                  style={styles.btnMinus}
                  onPress={() => setBaby(prev => (prev > 0 ? prev - 1 : 0))}>
                  <AntDesign name="minus" size={15} color={'#2E89FF'} />
                </TouchableOpacity>
                <View style={{ height: 30 }}>
                  <TextInput
                    onChangeText={setBaby}
                    value={baby.toString()}
                    keyboardType={'number-pad'}
                    style={styles.textInputpeople}
                  />
                </View>
                <TouchableOpacity
                  style={styles.btnPlus}
                  onPress={() => setBaby(prev => prev + 1)}>
                  <AntDesign name="plus" size={15} color={'#2E89FF'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.buttonmodal}>
          <TouchableOpacity
            style={styles.buttonOk}
            onPress={() => HandlePress()}>
            <Text style={styles.textStyle}>Đồng ý</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalvien: {
    // borderWidth: 1,
    paddingLeft: 20,
    borderColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomColor: '#EEEEEE',
  },
  modalContent: {
    paddingBottom: 20,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonOk: {
    backgroundColor: '#3C5A99',
    padding: 15,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  modalText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 12,
    marginRight: 12,
  },
  buttonmodal: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#3C5A99',
  },
  ImageMoney: {
    width: 35,
    height: 35,
  },
  btnPlus: {
    width: 36,
    height: 26,
    backgroundColor: '#C5DEFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnMinus: {
    width: 36,
    height: 26,
    backgroundColor: '#C5DEFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textInputpeople: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#2E89FF',
    width: 35,
    height: 25,
    padding: 0,
    textAlign: 'center',
  },
});
