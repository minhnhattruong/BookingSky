import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-web-swiper';
import Animated from 'react-native-reanimated';
import Header from '../../../component/headers/Header';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { defaultStyles } from '../../../style/style'
import { getHotelbyId, getRoombyIdHotel } from '../../../api/apiHotel';


export default function HotelInfo({ route, navigation }) {
    const { hotelId } = route.params
    const [hotelInfo, setHotelInfo] = useState([])



    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        getHotelInfo(hotelId)
    }, [hotelId])

    const getHotelInfo = (id) => {
        getHotelbyId(id).then(rep => {
            setHotelInfo(rep.data)
        }).catch(e => {
            console.log(e)
        })
    }



    const ratingStar = []
    for (let i = 0; i < hotelInfo.rating; i++) {
        ratingStar.push(i)
    }

    return (
        <View style={defaultStyles.containers}>
            <Header navigation={navigation} animatedValue={animatedValue} title={hotelInfo.title} />
            <ScrollView
                onScroll={e => {
                    animatedValue.setValue(e.nativeEvent.contentOffset.y)
                }}
                scrollEventThrottle={16}>
                <View style={styles.header}>
                    <View style={{ width: WINDOW_WIDTH, height: WINDOW_HEIGHT * 0.3 }}>
                        <Swiper
                            loop={true}
                            controlsProps={{
                                prevPos: false,
                                nextPos: false
                            }}
                        >
                            {
                                hotelInfo.photos?.map((e, i) => {
                                    return (
                                        <View key={i} style={styles.slideContainer}>
                                            <Image source={{ uri: `http://localhost:8000/${e}` }} style={styles.hotelImage} />
                                        </View>
                                    )
                                })
                            }
                        </Swiper>
                    </View>
                    <View style={styles.hotelInfo}>
                        <View>
                            <Text style={styles.hotelName} numberOfLines={2} ellipsizeMode={'tail'}>{hotelInfo.title}</Text>
                            <View style={styles.hotelStar}>
                                {
                                    ratingStar.map((e, i) => (
                                        <AntDesign key={i} name='star' size={18} color={'#f29c00'} />
                                    ))
                                }
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name='md-location-sharp' size={20} color={'#686868'} />
                                <Text style={{ fontSize: 12 }}>{hotelInfo.address}</Text>
                            </View>
                        </View>
                        <View style={[styles.hotelType,
                        hotelInfo.type == 'Khách sạn' && { backgroundColor: '#699BF7' }
                        || hotelInfo.type == 'Homestay' && { backgroundColor: '#ff0000' }
                        || hotelInfo.type == 'Resort' && { backgroundColor: '#319c57' }
                        ]}>
                            <Text style={{ fontWeight: '500', color: '#fff' }}>{hotelInfo.type}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.description}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>Giới thiệu</Text>
                    <View style={{ marginTop: 5 }}>
                        <Text>
                            {hotelInfo.description}
                        </Text>
                    </View>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 30, width: '100%' }}>
                <TouchableOpacity
                    style={styles.bookingBtn}
                    onPress={() => navigation.navigate('RoomInfo', {
                        hotelInfo: hotelInfo,
                        hotelId: hotelId
                    })}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Đặt phòng ngay !</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const ITEM_WIDTH = WINDOW_WIDTH * 0.9
const styles = StyleSheet.create({
    hotelInfo: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    slideContainer: {
        height: WINDOW_HEIGHT * 0.3,
        width: WINDOW_WIDTH,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    hotelName: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
        marginBottom: 5
    },
    hotelImage: {
        flex: 1,
    },
    hotelStar: {
        flexDirection: 'row',
        marginBottom: 5
    },
    hotelType: {
        width: 85,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        borderRadius: 5
    },
    description: {
        marginTop: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    bookingBtn: {
        backgroundColor: '#3C5A99',
        marginHorizontal: 30,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },

})