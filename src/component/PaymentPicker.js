import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useCallback, useMemo, useRef } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import CustomBackdrop from './CustomBackdrop ';
import * as Animatable from 'react-native-animatable';
import { set } from 'immer/dist/internal';
import { buttonStyles } from '../style/style';

const CREDIT = [
  {
    id: 1,
    name: 'TRUONG MINH NHAT',
    credit: 'visa',
    number: '*0304',
  },
  {
    id: 2,
    name: 'TRUONG MINH NHAT',
    credit: 'master',
    number: '*4460',
  },
  {
    id: 3,
    name: 'NGUYEN LUU LY',
    credit: 'visa',
    number: '*0912',
  },
];

const MOMO = [
  {
    id: 4,
    name: 'TRUONG MINH NHAT',
    number: '*3914',
  },
  {
    id: 5,
    name: 'NGUYEN LUU LY',
    number: '*9119',
  },
];

export default function PaymentPicker(props) {
  const { setPayment } = props;
  const navigation = props.navigation

  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ['90%', '90%'], []);

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);
  const handlePresentModalClose = useCallback(() => {
    bottomSheetRef.current?.close();
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

  const Item = ({ id, name, credit, number }) => {
    return (
      <TouchableOpacity
        style={styles.items}
        onPress={() => handlePress(id, name, number)}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={
              credit == 'visa'
                ? {
                  uri: 'https://brademar.com/wp-content/uploads/2022/05/Visa-Logo-PNG-2006-%E2%80%93-2014.png',
                }
                : {
                  uri: 'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png',
                }
            }
            style={{ width: 35, height: 20 }}
          />
          <Text
            style={{ marginLeft: 10, color: '#000', width: '50%' }}
            numberOfLines={1}
            ellipsizeMode={'tail'}
          >
            {name}
          </Text>
          <Text style={{ color: '#999', width: '25%', textAlign: 'right' }}>{number}</Text>
        </View>
        {tick == id && (
          <AntDesign name="checkcircle" size={20} color="#4ECB71" />
        )}
      </TouchableOpacity>
    );
  };

  const Item1 = ({ id, name, number }) => {
    return (
      <TouchableOpacity
        style={styles.items}
        onPress={() => {
          handlePress(id, name, number);
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ marginLeft: 10, color: '#000', width: '60%' }}>
            {name}
          </Text>
          <Text style={{ marginLeft: 10, color: '#999', width: '20%', textAlign: 'right' }}>
            {number}
          </Text>
        </View>
        {tick == id && (
          <AntDesign name="checkcircle" size={20} color="#4ECB71" />
        )}
      </TouchableOpacity>
    );
  };

  const [tick, setTick] = useState();
  const [name, setName] = useState('');
  const [number, setNumber] = useState();

  const handlePress = (id, name, number) => {
    setName(name);
    setNumber(number);
    {
      tick != id ? (
        setTick(id),
        setPayment(id))
        :
        (
          setTick(),
          setPayment()
        )
    }
  };

  const [dropdownCredit, setdropdownCredit] = useState(false);
  const [dropdownMomo, setdropdownMomo] = useState(false);

  return (
    <View>
      {tick ? (
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => handlePresentModalPress()}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="creditcard" size={22} color="#F6C000" />
            <Text
              style={{
                fontSize: 15,
                color: '#000',
                marginLeft: 15,
                width: 180,
                fontWeight: '300',
              }}>
              {name}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: '#999',
                marginLeft: 6,
                fontWeight: '300',
              }}>
              {number}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: '#999', marginRight: 5 }}>
              Thay đổi
            </Text>
            <AntDesign name="right" size={18} color={'#999'} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.paymentMethods}
          onPress={() => handlePresentModalPress()}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <AntDesign name="creditcard" size={22} color="#F6C000" />
            <Text style={{ fontSize: 15, color: '#000', marginLeft: 6 }}>
              Phương thức thanh toán
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, color: '#999', marginRight: 5 }}>
              Chọn
            </Text>
            <AntDesign name="right" size={18} color={'#999'} />
          </View>
        </TouchableOpacity>
      )}

      <BottomSheetModal
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>
              Phương thức thanh toán
            </Text>
          </View>
          <BottomSheetScrollView>
            <View style={styles.mainContent}>
              <Text
                style={{
                  fontSize: 15,
                  color: '#000',
                  marginLeft: 15,
                  fontWeight: '500',
                  marginHorizontal: 15,
                  marginVertical: 20,
                }}>
                Vui lòng chọn phương thức thanh toán
              </Text>
              <View style={styles.credit}>
                <TouchableOpacity
                  style={
                    dropdownCredit ? styles.ItemsActive : styles.ItemsInactive
                  }
                  onPress={() => setdropdownCredit(!dropdownCredit)}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="creditcard" size={25} color={'#F70202'} />
                    <Text style={{ fontSize: 15, color: '#000', marginLeft: 15 }}>
                      Thanh toán bằng thẻ
                    </Text>
                  </View>
                  {dropdownCredit ? (
                    <AntDesign name="up" size={25} color={'#999'} />
                  ) : (
                    <AntDesign name="down" size={25} color={'#999'} />
                  )}
                </TouchableOpacity>
                {dropdownCredit ? (
                  <View style={styles.dropdown}>
                    {CREDIT.map(item => (
                      <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        credit={item.credit}
                        number={item.number}
                      />
                    ))}
                    <TouchableOpacity
                      style={{
                        height: 65,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 50,
                        marginRight: 30,
                      }}
                    >
                      <AntDesign name="plus" size={18} color={'#999'} />
                      <Text style={{ marginLeft: 40, color: '#000' }}>
                        Thêm thẻ ngân hàng mới
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
              <View style={styles.momo}>
                <TouchableOpacity
                  style={
                    dropdownCredit ? styles.ItemsActive : styles.ItemsInactive
                  }
                  onPress={() => setdropdownMomo(!dropdownMomo)}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                      source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png',
                      }}
                      style={{ width: 30, height: 30 }}
                    />
                    <Text style={{ fontSize: 15, color: '#000', marginLeft: 13 }}>
                      Thanh toán bằng ví Momo
                    </Text>
                  </View>
                  {dropdownMomo ? (
                    <AntDesign name="up" size={25} color={'#999'} />
                  ) : (
                    <AntDesign name="down" size={25} color={'#999'} />
                  )}
                </TouchableOpacity>
                {dropdownMomo ? (
                  <View style={styles.dropdown}>
                    {MOMO.map(item => (
                      <Item1
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        credit={item.credit}
                        number={item.number}
                      />
                    ))}
                    <TouchableOpacity
                      style={{
                        height: 65,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 50,
                        marginRight: 30,
                      }}
                    >
                      <AntDesign name="plus" size={18} color={'#999'} />
                      <Text style={{ marginLeft: 40, color: '#000' }}>
                        Thêm ví mới
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
              <TouchableOpacity
                style={[buttonStyles.blueButton1, { marginTop: 50, marginBottom: 30, marginHorizontal: 20 }]}
                onPress={() => handlePresentModalClose()}>
                <Text style={{ color: '#fff', fontSize: 16 }}>Xong</Text>
              </TouchableOpacity>
            </View>
          </BottomSheetScrollView>
        </View>
      </BottomSheetModal>
    </View>
  );
}

const styles = StyleSheet.create({
  paymentMethods: {
    height: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.0,

    elevation: 2,
  },
  header: {
    backgroundColor: '#3C5A99',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#EDF1F9',
  },
  ItemsInactive: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 30,
    borderRadius: 10,
  },
  ItemsActive: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 30,
  },
  credit: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  dropdown: {
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  items: {
    height: 65,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 40,
    marginRight: 20,
    borderBottomWidth: 0.5,
    borderColor: '#999',
  },
  momo: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});
