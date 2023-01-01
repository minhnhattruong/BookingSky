import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DropDown from '../DropDown';
import DatePicker from 'react-native-date-picker';

const ADULTSEX = [
  {
    id: 1,
    name: 'Ông',
    value: 'male'
  },
  {
    id: 2,
    name: 'Bà',
    value: 'female'
  },
];

const CHILDSEX = [
  {
    id: 1,
    name: 'Nam',
    value: 'male'
  },
  {
    id: 2,
    name: 'Nữ',
    value: 'female'
  },
];


export default function ModalAddInformation(props) {
  const INFO = props.data


  const closeModal = () => {
    props.setModalInformation(false);
    INFO.firstName = firstName;
    INFO.lastName = lastName;
    INFO.sex = sex;
    INFO.nation = nation;
    INFO.idCard = idCard;
  };


  const [selectItemSex, setSelectItemSex] = useState('');

  const onSelectSex = item => {
    setSelectItemSex(item);
    setSex(item.value)
  };

  const [openBirthDay, setOpenBirthDay] = useState(false);

  const [firstName, setFirstName] = useState(INFO.firstName)
  const [lastName, setLastName] = useState(INFO.lastName)
  const [birthDay, setbirthDay] = useState(new Date())
  const [nation, setNation] = useState(INFO.nation)
  const [idCard, setIdCard] = useState(INFO.idCard)
  const [sex, setSex] = useState(INFO.sex)

  const ageGroup = INFO.ageGroup


  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              paddingVertical: 20,
              //   paddingHorizontal: 60,
              fontWeight: 'bold',
            }}>
            Thêm thông tin hành khách
          </Text>
        </View>
        <View style={styles.modalContent}>
          {
            ageGroup == 'adult' &&
            <View style={styles.items}>
              <Text style={{ fontSize: 12 }}>Danh xưng</Text>
              <DropDown
                value={selectItemSex}
                onSelect={onSelectSex}
                data={ADULTSEX}
              />
            </View>
          }
          <View style={styles.items}>
            <Text style={{ fontSize: 12 }}>Họ</Text>
            <TextInput
              style={styles.inputItems}
              onChangeText={setLastName}
              value={lastName}
            />
          </View>

          <View style={styles.items}>
            <Text style={{ fontSize: 12 }}>Tên đệm và tên</Text>
            <TextInput
              style={styles.inputItems}
              onChangeText={setFirstName}
              value={firstName}
            />
          </View>

          {
            ageGroup != 'adult' &&
            <View style={styles.items}>
              <Text style={{ fontSize: 12 }}>Giới tính</Text>
              <DropDown
                value={selectItemSex}
                onSelect={onSelectSex}
                data={CHILDSEX}
              />
            </View>
          }

          <View style={styles.items}>
            <Text style={{ fontSize: 12 }}>Ngày sinh</Text>
            <TouchableOpacity onPress={() => setOpenBirthDay(true)}
              style={{
                ...styles.inputItems,
                flexDirection: 'row',
                alignItems: 'center',
              }}>

              <AntDesign name="calendar" size={18} color={'#686868'} />

              <DatePicker
                modal
                open={openBirthDay}
                date={birthDay}
                mode={'date'}
                title="Ngày sinh"
                confirmText="Chọn"
                cancelText="Hủy"
                locale="vi_VN"
                onConfirm={birthDay => {
                  setOpenBirthDay(false);
                  setbirthDay(birthDay);
                }}
                onCancel={() => {
                  setOpenBirthDay(false);
                }}
              />
              <Text
                style={{
                  padding: 2,
                  marginLeft: 10,
                  color: '#000',
                  fontSize: 15,
                }}>{`${birthDay.toLocaleDateString()}`}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.items}>
            <Text style={{ fontSize: 12 }}>Quốc tịch</Text>
            <TextInput
              style={styles.inputItems}
              onChangeText={setNation}
              value={nation}
            />
          </View>

          {ageGroup == 'adult' &&
            <View style={styles.items}>
              <Text style={{ fontSize: 12 }}>Số giấy tờ tùy thân</Text>
              <TextInput
                style={styles.inputItems}
                onChangeText={setIdCard}
                value={idCard}
              />
            </View>
          }
        </View>

        <View style={styles.buttonmodal}>
          <TouchableOpacity
            style={styles.buttonOk}
            onPress={() => closeModal()}>
            <Text style={styles.textStyle}>Xong</Text>
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
    // alignItems: 'center',

    backgroundColor: 'rgba(52, 52, 52, 0.7)',
  },
  modalView: {
    backgroundColor: 'white',
    margin: 25,
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
  modalContent: {
    paddingBottom: 20,
  },
  textStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
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
    // padding: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: '#3C5A99',
  },
  ImageMoney: {
    width: 35,
    height: 35,
  },
  people12add: {
    width: 36,
    height: 26,
    backgroundColor: '#C5DEFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  people12remove: {
    width: 36,
    height: 26,
    backgroundColor: '#C5DEFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  items: {
    marginBottom: 15,
    marginHorizontal: 20
  },
  inputItems: {
    borderBottomWidth: 1,
    borderColor: '#3C5A99',
    padding: 5,
  },
});
