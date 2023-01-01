import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HeaderNoti(props) {
  const title = props.title;
  const navigation = props.navigation;
  const check = props.check;
  const checkin = props.checkin;
  const checkout = props.checkout;

  return check ? (
    <View style={styles.headerHotel}>
      <TouchableOpacity
        style={{position: 'absolute', left: 20, top: 15}}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={26} color={'#fff'} />
      </TouchableOpacity>
      <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>
        {title}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff'}}>{checkin}</Text>
        <View
          style={{
            backgroundColor: '#ffffff',
            width: 5,
            height: 5,
            borderRadius: 7,
            marginHorizontal: 10,
          }}></View>
        <Text style={{color: '#fff'}}>{checkout}</Text>
      </View>
    </View>
  ) : (
    <View style={styles.header}>
      <TouchableOpacity
        style={{position: 'absolute', left: 20, top: 15}}
        onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={26} color={'#fff'} />
      </TouchableOpacity>
      <Text style={{color: '#fff', fontSize: 18, fontWeight: '500'}}>
        {title}
      </Text>
      <TouchableOpacity
        style={{position: 'absolute', right: 20, top: 15}}
        onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={26}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3C5A99',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.0,

    elevation: 4,
  },
  headerHotel: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3C5A99',
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.0,

    elevation: 4,
  },
});
