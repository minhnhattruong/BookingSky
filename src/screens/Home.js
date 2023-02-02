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
import { getAllPlaces } from '../api/apiPost';
import RcmHotel from '../component/home/RcmHotel';
import PlaceList from '../component/home/PlaceList';


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


const Item2 = ({ img }) => (
  <TouchableOpacity style={styles.endowItem}>
    <Image style={styles.endowImage} source={{ uri: img }} />
  </TouchableOpacity>
);

export default function Home({ navigation }) {

  const renderItem2 = ({ item }) => <Item2 img={item.img} />;

  const animatedValue = useRef(new Animated.Value(0)).current;

  const [rcmHotel, setRCMHotel] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    getRCMHotels()
    getAllPlace()
  }, [])

  const getRCMHotels = () => {
    getRCMHotel().then(rep => {
      setRCMHotel(rep.data)
    }).catch(e => {
      console.log(e)
    })
  }

  const getAllPlace = () => {
    getAllPlaces().then(rep => {
      setPlaces(rep.data)
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
        <PlaceList data={places} navigation={navigation} />
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
