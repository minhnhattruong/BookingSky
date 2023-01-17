import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Animated from 'react-native-reanimated'
import { FormattedCurrency } from 'react-native-globalize';
import Header from '../../../component/headers/Header';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { defaultStyles } from '../../../style/style'
import { getSearchHotels } from '../../../api/apiHotel'


export default function HotelList({ route, navigation }) {

    const animatedValue = useRef(new Animated.Value(0)).current;
    const { city, min, max } = route.params
    const [data, setData] = useState([])

    useEffect(() => {
        getSearch(city, min, max)
    }, [city, min, max])

    const getSearch = (city, min, max) => {
        getSearchHotels(city, min, max).then(rep => {
            setData(rep.data)
        }).catch(e => {
            console.log(e)
        })
    }

    console.log('data', data);



    return (
        <View style={defaultStyles.containers}>
            <Header navigation={navigation} title={city} animatedValue={animatedValue} />
            <View style={{ height: 60 }} />
            <ScrollView
                onScroll={e => {
                    animatedValue.setValue(e.nativeEvent.contentOffset.y)
                }}
                scrollEventThrottle={16}>
                <View style={styles.mainContent}>
                    {
                        data.map((e, i) => {
                            const ratingStar = []

                            for (let i = 0; i < e.rating; i++) {
                                ratingStar.push(i)
                            }
                            return (
                                <TouchableOpacity key={i} style={styles.item} onPress={() => {
                                    console.log(e._id)
                                    navigation.navigate(
                                        'HotelInfo', { hotelId: e._id, }
                                    )
                                }}>


                                    <Image style={styles.hotelImage} source={{ uri: 'https://i.pinimg.com/564x/f0/d7/07/f0d7073c0d8251cfc1e80c478e564b92.jpg' }} />

                                    <View style={styles.hotelInfo}>
                                        <Text style={styles.hotelName} numberOfLines={2} ellipsizeMode={'tail'}>{e.title}</Text>
                                        <View style={styles.hotelStar}>
                                            {
                                                ratingStar.map((e, i) => (
                                                    <AntDesign key={i} name='star' size={18} color={'#f29c00'} />
                                                ))
                                            }
                                        </View>
                                        <Text style={styles.hotelAddress} numberOfLines={2} ellipsizeMode={'tail'}>{e.address}</Text>

                                        {e.freeCancel &&
                                            <View style={styles.freeTaxi}>
                                                <View style={styles.dotTag} />
                                                <Text style={{ fontSize: 10, color: '#fff', fontWeight: '500' }}>Miễn phí huỷ</Text>
                                            </View>
                                        }
                                        <View style={styles.hotelPrice}>
                                            <Text style={{ fontSize: 12, marginBottom: 0.5, marginRight: 3 }}>Từ </Text>
                                            <FormattedCurrency style={{ color: '#000', fontSize: 16, fontWeight: '500' }} value={Number(e.cheapestPrice)} />
                                            <Text> đ/đêm</Text>
                                        </View>
                                        <View style={styles.location}>
                                            <Ionicons name='md-location-sharp' size={14} color={'#686868'} />
                                            <Text style={{ fontSize: 12, marginLeft: 5 }}>{e.city}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const ITEM_HEIGHT = WINDOW_HEIGHT * 0.25
const ITEM_WIDTH = WINDOW_WIDTH * 0.90
const styles = StyleSheet.create({
    item: {
        height: ITEM_HEIGHT,
        width: ITEM_WIDTH,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 25,
    },
    hotelName: {
        width: '65%',
        fontWeight: '600',
        fontSize: 14,
        color: '#000'
    },
    hotelImage: {
        width: ITEM_WIDTH * 0.45,
        height: ITEM_HEIGHT
    },
    hotelInfo: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: ITEM_WIDTH * 0.55,
    },
    hotelPrice: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '70%'
    },
    hotelStar: {
        flexDirection: 'row'
    },
    hotelAddress: {
        width: '70%',
        height: 30,
        fontSize: 11
    },
    mainContent: {
        alignItems: 'center',
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 1,
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    freeTaxi: {
        backgroundColor: '#ea4e14',
        width: 80,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row'
    },
    dotTag: {
        width: 5,
        height: 5,
        borderRadius: 3,
        backgroundColor: '#fff',
        marginRight: 3
    }
})