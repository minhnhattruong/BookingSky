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
import React, { useRef } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HeaderMenu from '../component/headers/HeaderMenu';
import Animated from 'react-native-reanimated'
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { defaultStyles } from '../style/style'

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

const HOTEL = [
  {
    id: 1,
    name: 'Maldives Hotel I',
    img: 'https://www.tripsavvy.com/thmb/-aBLb26VQL0Fnt3GduH0KGqOGQw=/1350x759/smart/filters:no_upscale()/EWOW-1600x900-587953e95f9b584db3825b8a.jpg',
    price: '2.500.000đ',
    location: 'Maldives',
  },
  {
    id: 2,
    name: 'Imperia Hotel',
    img: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/b9/db/2a/imperial-hotel-spa.jpg',
    price: '3.500.000đ',
    location: 'Hà Nội',
  },
  {
    id: 3,
    name: 'Metrople Hanoi',
    img: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21145818/3546897_XL-3.jpg',
    price: '4.500.000đ',
    location: 'Hà Nội',
  },
  {
    id: 4,
    name: 'Vinpearl Nha Trang',
    img: 'https://pix10.agoda.net/hotelImages/568/5685860/5685860_19101418000082056564.jpg?ca=9&ce=1&s=1024x768',
    price: '5.500.000đ',
    location: 'Nha Trang',
  },
  {
    id: 5,
    name: 'Mường Thanh Hạ Long',
    img: 'https://pix10.agoda.net/hotelImages/18868600/-1/3877fc23da23f6e3c183e67d9b4445b5.jpg?ce=0&s=1024x768',
    price: '6.500.000đ',
    location: 'Hạ Long',
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

const Item1 = ({ img, name, price, location }) => (
  <TouchableOpacity style={styles.hotelItem}>
    <Image style={styles.hotelImage} source={{ uri: img }} />
    <View style={{ alignItems: 'center', marginTop: 10 }}>
      <Text style={{ fontSize: 14, color: '#000', fontWeight: '500' }}>
        {name}
      </Text>
      <View style={{ flexDirection: 'row', marginTop: 5 }}>
        <AntDesign name="star" size={16} color={'#FFD233'} />
        <AntDesign name="star" size={16} color={'#FFD233'} />
        <AntDesign name="star" size={16} color={'#FFD233'} />
        <AntDesign name="star" size={16} color={'#FFD233'} />
        <AntDesign name="star" size={16} color={'#FFD233'} />
      </View>
    </View>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: 10,
        marginTop: 10,
      }}>
      <View style={{ alignItems: 'flex-start' }}>
        <Text style={{ fontSize: 11, color: '#686868' }}>Ngày</Text>
        <Text style={{ color: '#000', fontWeight: '500' }}>{price}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="md-location-sharp" size={14} color={'#686868'} />
        <Text style={{ fontSize: 11 }}>{location}</Text>
      </View>
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

  const renderItem1 = ({ item }) => (
    <Item1
      name={item.name}
      img={item.img}
      price={item.price}
      location={item.location}
    />
  );

  const renderItem2 = ({ item }) => <Item2 img={item.img} />;

  const animatedValue = useRef(new Animated.Value(0)).current;

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

        <View style={styles.hotels}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              backgroundColor: '#fff',
              paddingVertical: 8,
              paddingHorizontal: 10
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={defaultStyles.titles}>
                KHÁCH SẠN LÝ TƯỞNG
              </Text>
              <AntDesign name="like1" size={18} color={'#3C5A99'} style={{ marginLeft: 5 }} />
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
            data={HOTEL}
            renderItem={renderItem1}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
          />
        </View>
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
  hotels: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  hotelItem: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 1.8,
    width: 190,
    height: 220,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.7,

    elevation: 2,
  },
  hotelImage: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
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
