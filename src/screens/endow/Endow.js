
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
const SPECIAL = [
  {
    id: 1,
    img: require('../../assets/image/uudai1.jpg'),

  },
  {
    id: 2,
    img: require('../../assets/image/uudai2.jpg'),

  },
  {
    id: 3,
    img: require('../../assets/image/uudai1.jpg'),

  },



]
const SPECIAL1 = [
  {
    id: 1,
    img: require('../../assets/image/uudai1.jpg'),

  },
  {
    id: 2,
    img: require('../../assets/image/uudai2.jpg'),

  },
  {
    id: 3,
    img: require('../../assets/image/uudai1.jpg'),

  },
]

export default function Endow({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.option}>
        <View
          style={{
            width: '14.3%',
            height: 150,
            backgroundColor: '#FF0000',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}></View>
        <View
          style={{
            width: '14.3%',
            height: 150,
            backgroundColor: '#fff',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}></View>
        <View
          style={{
            width: '14.3%',
            height: 150,
            backgroundColor: '#FF0000',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}></View>
        <View
          style={{
            width: '14.3%',
            height: 150,
            backgroundColor: '#fff',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}></View>
        <View
          style={{
            width: '14.3%',
            height: 150,
            backgroundColor: '#FF0000',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}></View>
        <View
          style={{
            width: '14.3%',
            height: 150,
            backgroundColor: '#fff',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}></View>
        <View
          style={{
            width: '14.3%',
            height: 150,
            backgroundColor: '#FF0000',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}></View>

      </View>

      <ScrollView>
        <View style={styles.SpecialEndow}></View>
        <Text style={{
          marginLeft: 125,
          position: 'absolute',
          zIndex: 1,
          marginTop: 45,
          fontSize: 15,
          fontWeight: 'bold',
          color: '#fff',
        }}> ƯU ĐÃI ĐẶC BIỆT</Text>

        <View style={styles.mainEndow}>

          {SPECIAL.map((e, i) => (
            <TouchableOpacity key={i} style={styles.items} onPress={() => navigation.navigate('OfferDetails')} >
              <Image style={styles.imagestyle} source={e.img} />
              <View style={styles.content}>
                <View style={{ width: '100%' }}>
                  <Text style={{ fontWeight: 'bold', width: '100%' }}>Giảm giá 10% giá vé trị khứ hồi</Text>
                </View>
                <Text style={{ marginTop: 30, fontSize: 12 }}>HSD: 31.08.2022</Text>
              </View>
            </TouchableOpacity>
          ))}
          <View >
            <Text style={{ marginTop: 10 }} ellipsizeMode="clip" numberOfLines={1}>
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            </Text>
            <View style={styles.SpecialT8} >
              <Text style={{
                fontSize: 15,
                fontWeight: 'bold',
                color: '#fff',
                position: 'absolute',
                zIndex: 1,
              }}> ƯU ĐÃI THÁNG 8</Text>
            </View>


            {SPECIAL1.map((e, i) => (
              <TouchableOpacity key={i} style={styles.items1} onPress={() => navigation.navigate('OfferDetails')} >
                <Image style={styles.imagestyle} source={e.img} />

                <View style={styles.content}>
                  <View style={{ width: '100%' }}>
                    <Text style={{ fontWeight: 'bold', width: '100%' }}>Giảm giá 10% giá vé trị khứ hồi</Text>
                  </View>
                  <Text style={{ marginTop: 30, fontSize: 12 }}>HSD: 31.08.2022</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>

      </ScrollView>

    </View>



  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C5A99',
  },
  option: {
    flexDirection: 'row',
  },
  SpecialEndow: {
    width: 200,
    height: 50,
    backgroundColor: '#FFD233',
    position: 'absolute',
    zIndex: 1,
    marginTop: 30,
    borderRadius: 30,
    marginLeft: 90,
  },
  mainEndow: {
    backgroundColor: '#EDF1F9',
    marginHorizontal: 20,
    marginVertical: 50,
    paddingVertical: 30,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 15,
    marginTop: 50,
    paddingTop: 50,

  },
  imagestyle: {
    width: 160,
    height: 130,
  },
  items: {
    backgroundColor: '#fff',
    marginBottom: 15,
    flexDirection: 'row',
    width: '100%',
    height: 130,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

  },
  content: {
    marginTop: 10,
    padding: 10,
    flex: 1
  },
  items1: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '100%',
    height: 130,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginTop: 10,
  },
  SpecialT8: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    backgroundColor: '#FFD233',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 30,
    marginTop: -30
  }
});