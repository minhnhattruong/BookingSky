import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'

const HOTEL = [
  {
    id: 1,
    img: 'https://i.pinimg.com/originals/48/fe/a0/48fea08a252ca06dd4b86b2679203ee8.jpg',
    name: 'GTC HOTEL I',
    evaluate: '789',
    address: '89, Nguyễn Phong Sắc, Cầu Giấy, Phú Quốc..',
    price: '2.500.000đ'
  },
  {
    id: 2,
    img: 'https://i.pinimg.com/564x/2f/ad/a9/2fada9d2abe2719ea544c9c4015e4c32.jpg',
    name: 'GTC HOTEL II',
    evaluate: '678',
    address: '87, Minh Khai, Phú Quốc..',
    price: '3.000.000đ'
  },
  {
    id: 3,
    img: 'https://i.pinimg.com/564x/3e/ec/37/3eec376c0a87d6a426c3f3548190cc51.jpg',
    name: 'GTC HOTEL III',
    evaluate: '456',
    address: '144, An Dương Vương, Cầu Giấy, Phú Quốc..',
    price: '2.090.000đ'
  },
  {
    id: 4,
    img: 'https://i.pinimg.com/564x/f0/d7/07/f0d7073c0d8251cfc1e80c478e564b92.jpg',
    name: 'GTC HOTEL IV',
    evaluate: '345',
    address: '53, ngõ Văn Chương, Khâm Thiên, Phú Quốc..',
    price: '2.050.000đ'
  },
  {
    id: 5,
    img: 'https://i.pinimg.com/564x/86/4d/4c/864d4c063c6668461592723c9a19d19d.jpg',
    name: 'GTC HOTEL V',
    evaluate: '234',
    address: '48A, Trần Hưng Đạo, Phú Quốc..',
    price: '2.000.000đ'
  },
  {
    id: 6,
    img: 'https://i.pinimg.com/564x/f3/96/4b/f3964bd22e71e2197b9ce1d459e48a81.jpg',
    name: 'GTC HOTEL VI',
    evaluate: '123',
    address: '33, ngõ 33/4 Lê Thanh Nghị, Phú Quốc..',
    price: '2.000.000đ'
  },

]

const Item = ({ img, name, evaluate, address, price, navigation }) => {

  return (
    <TouchableOpacity style={styles.item}
      onPress={() => {
        navigation.navigate('HomeStack', {
          screen: 'HotelInfo',
          params: {
            name: name,
            evaluate: evaluate,
            address: address
          },
        });

      }}
    >


      <Image style={styles.hotelImage} source={{ uri: img }} />

      <View style={{ justifyContent: 'center', marginHorizontal: 15 }}>
        <Text style={{ width: '100%', fontWeight: '600', fontSize: 14, color: '#000' }}>{name}</Text>
        <View style={{ flexDirection: 'row', marginTop: 2, alignItems: 'center', marginBottom: 12 }}>
          <AntDesign name='star' size={12} color={'#FFD233'} />
          <AntDesign name='star' size={12} color={'#FFD233'} />
          <AntDesign name='star' size={12} color={'#FFD233'} />
          <AntDesign name='star' size={12} color={'#FFD233'} />
          <AntDesign name='star' size={12} color={'#FFD233'} />
          <Text style={{ fontSize: 11, marginLeft: 5 }}>({evaluate} đánh giá)</Text>
        </View>
        <Text style={{ width: 200, height: 30, fontSize: 11 }}>{address}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 7 }}>
          <Text style={{ fontSize: 12, marginBottom: 0.5, marginRight: 5 }}>Từ </Text>
          <Text style={{ color: '#000', fontSize: 17, fontWeight: '500' }}>{price}</Text>
          <Text> /đêm</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};


const Favourite = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <Item img={item.img} name={item.name} evaluate={item.evaluate} address={item.address} price={item.price} navigation={navigation} />
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#EDF1F9' }}>
      <View style={styles.header}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>Ưa thích</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={HOTEL}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
          style={{ marginTop: 10 }}
        />
      </View>
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    backgroundColor: '#3C5A99',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.00,
    elevation: 4,
  },
  item: {
    backgroundColor: '#fff',
    marginBottom: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.00,

    elevation: 2.5,
    overflow: 'hidden'

  },
  hotelImage: {
    width: 130,
    height: 130
  }
});
