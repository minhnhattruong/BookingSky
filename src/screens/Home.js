import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderMenu from '../component/headers/HeaderMenu';
import { FormattedCurrency } from 'react-native-globalize';
import Animated from 'react-native-reanimated'
import { defaultStyles } from '../style/style'
import { getRCMHotel } from '../api/apiHotel';
import RcmHotel from '../component/home/RcmHotel';

const TOURIST = [
  {
    id: 1,
    img: 'https://pix10.agoda.net/geo/country/106/3_106_thailand_02.jpg?s=1920x',
    name: 'BANGKOK',
  },
  {
    id: 2,
    img: 'https://www.planetware.com/photos-large/F/france-paris-eiffel-tower.jpg',
    name: 'PARIS',
  },
  {
    id: 3,
    img: 'https://images.moneycontrol.com/static-mcnews/2021/07/Maldives-mike-swigunski-k9Zeq6EH_bk-unsplash.jpg',
    name: 'MALDIVES',
  },
  {
    id: 4,
    img: 'https://pix10.agoda.net/geo/country/106/3_106_thailand_02.jpg?s=1920x',
    name: 'BANGKOK',
  },
];

const ENDOW = [
  {
    id: 1,
    img: 'https://cdnmedia.baotintuc.vn/Upload/cVJiASFv9S8nriO7eNwA/files/2021/12/20-12/thumbnail.jpg',
  },
  {
    id: 2,
    img: 'https://vemaybayvietmy.com/wp-content/uploads/2021/05/cap-nhat-uu-dai-thang-5-cua-vietnam-airlines.jpg',
  },
  {
    id: 3,
    img: 'https://cms-uat.s3.ap-southeast-1.amazonaws.com/dat-ve-may-bay-quoc-te-vietjet-1601231872137.jpg',
  },
];

const Item = ({ img, name }) => (
  <TouchableOpacity style={styles.touristItem}>
    <Image style={styles.touristImage} source={{ uri: img }} />
    <View
      style={{ width: 180, position: 'absolute', top: 45, alignItems: 'center' }}>
      <Text
        style={{
          color: 'white',
          fontWeight: '600',
          fontSize: 22,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,

          elevation: 4,
        }}>
        {name}
      </Text>
    </View>
  </TouchableOpacity>
);

const Item2 = ({ img }) => (
  <TouchableOpacity style={styles.endowItem}>
    <Image style={styles.endowImage} source={{ uri: img }} />
  </TouchableOpacity>
);

export default function Home({ navigation }) {

  const renderItem = ({ item }) => <Item img={item.img} name={item.name} />;



  const renderItem2 = ({ item }) => <Item2 img={item.img} />;

  const animatedValue = useRef(new Animated.Value(0)).current;

  const [rcmHotel, setRCMHotel] = useState([])

  useEffect(() => {
    getSearch()
  }, [])

  const getSearch = () => {
    getRCMHotel().then(rep => {
      setRCMHotel(rep.data)
    }).catch(e => {
      console.log(e)
    })
  }


  return (
    <View style={defaultStyles.containers}>
      <StatusBar backgroundColor="#3C5A99" />
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceHolder} />
      </SafeAreaView>
      <HeaderMenu navigation={navigation} animatedValue={animatedValue} />
      <ScrollView
        onScroll={e => {
          animatedValue.setValue(e.nativeEvent.contentOffset.y)
        }}
        scrollEventThrottle={16}
      >

        <View style={styles.paddingForHeader} />

        <View style={styles.tourist}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingHorizontal: 10
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={defaultStyles.titles}>
                ĐỊA ĐIỂM NỔI BẬT
              </Text>
              <AntDesign name="star" size={20} color={'#FFD233'} style={{ marginLeft: 5 }} />
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{ color: '#699BF7', marginRight: 3, fontSize: 14 }}>
                Xem thêm
              </Text>
              <AntDesign name="right" size={13} color={'#699BF7'} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={TOURIST}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
        </View>
        <RcmHotel data={rcmHotel} navigation={navigation} />
        <View style={styles.endow}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              paddingVertical: 8,
              paddingHorizontal: 10
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={defaultStyles.titles}>
                ƯU ĐÃI HOT
              </Text>
              <AntDesign name="heart" size={18} color={'#F24E1E'} style={{ marginLeft: 5 }} />
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{ color: '#699BF7', marginRight: 3, fontSize: 14 }}>
                Xem thêm
              </Text>
              <AntDesign name="right" size={13} color={'#699BF7'} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={ENDOW}
            renderItem={renderItem2}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  upperHeaderPlaceHolder: {
    height: 60
  },
  paddingForHeader: {
    height: 95
  },
  tourist: {
    paddingTop: 60,
    backgroundColor: '#fff',
    paddingBottom: 5,
  },
  touristItem: {
    marginVertical: 8,
    marginHorizontal: 1.8,
    width: 180,
    height: 120,
  },
  touristImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  endow: {
    backgroundColor: '#fff',
  },
  endowItem: {
    marginVertical: 8,
    marginHorizontal: 1.8,
    width: 350,
    height: 160,
  },
  endowImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
});
