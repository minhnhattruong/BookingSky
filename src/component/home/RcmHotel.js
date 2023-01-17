import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FormattedCurrency } from 'react-native-globalize';

export default function RcmHotel(props) {
    const { navigation, data } = props
    return (
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
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        color: '#000'
                    }}>
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
                data={data}
                renderItem={
                    ({ item }) => (
                        <TouchableOpacity
                            style={styles.hotelItem}
                            onPress={() => {
                                navigation.navigate('HotelInfo', { hotelId: item._id })
                            }}
                        >
                            <Image style={styles.hotelImage}
                                source={
                                    item.photos.length > 0 ?
                                        { uri: `http://localhost:8000/${item.photos[0]}` }
                                        : require('../../assets/image/stock-hotel.png')
                                }
                            />
                            <View style={{ alignItems: 'center', marginTop: 10 }}>
                                <Text style={{ fontSize: 14, color: '#000', fontWeight: '500' }}>
                                    {item.title}
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
                                    <FormattedCurrency style={{ color: '#000', fontWeight: '500' }} value={Number(item.cheapestPrice)} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Ionicons name="md-location-sharp" size={14} color={'#686868'} />
                                    <Text style={{ fontSize: 11 }}>{item.city}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }
                keyExtractor={item => item._id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
})