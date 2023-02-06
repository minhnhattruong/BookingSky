import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState, Fragment } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Swiper from 'react-native-swiper'
import Animated from 'react-native-reanimated';
import Header from '../../../component/headers/Header';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { defaultStyles } from '../../../style/style'
import { getHotelbyId } from '../../../api/apiHotel';
import { addFavoriteHotel, deleteFavorite, getAllFavorite } from '../../../api/apiFavorite';
import { useSelector, useDispatch } from 'react-redux'
import { setState } from '../../../reducers/BookingSlice'

export default function HotelInfo({ route, navigation }) {
    const dispatch = useDispatch()
    const userId = useSelector(store => store.auth.info.idUser)
    const { hotelId, fromScreen } = route.params
    const [refresh, setRefresh] = useState(true)
    const [likechecked, setLikeChecked] = useState(false)
    const [hotelInfo, setHotelInfo] = useState([])
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        getHotelInfo(hotelId)
        favoriteCheck()
    }, [refresh])

    const favoriteCheck = () => {
        getAllFavorite(userId).then(rep => {
            setLikeChecked(rep.data.some(e => e.idHotel === hotelId))
        }).catch(e => {
            console.log(e)
        })
    }

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

    const onHandle = () => {
        if (likechecked) {
            deleteFavorite(userId, hotelId).then(rep => {
                dispatch(setState())
                setRefresh(!refresh)
            }).catch(e => {
                console.log(e)
            })
        } else {
            addFavoriteHotel(userId, hotelId).then(rep => {
                dispatch(setState())
                setRefresh(!refresh)
            }).catch(e => {
                console.log(e)
            })
        }
    }

    return (
        <View style={defaultStyles.containers}>
            <Header navigation={navigation} animatedValue={animatedValue} title={hotelInfo.title} fromScreen={fromScreen} />
            <ScrollView
                onScroll={e => {
                    animatedValue.setValue(e.nativeEvent.contentOffset.y)
                }}
                scrollEventThrottle={16}
                style={{ paddingTop: 50 }}>
                <View style={styles.header}>
                    <View style={{ width: WINDOW_WIDTH, height: WINDOW_HEIGHT * 0.25 }}>
                        <TouchableOpacity
                            style={[styles.likeBtn, likechecked === true ? { backgroundColor: '#ff6666' } : { borderWidth: 2, borderColor: '#fff' }]}
                            onPress={() => onHandle()}
                        >
                            <AntDesign name='heart' size={20} color={'#fff'} />
                        </TouchableOpacity>
                        {hotelInfo.photos &&
                            (<Swiper loop={true}>
                                {
                                    hotelInfo.photos.map((e, i) => {
                                        return (
                                            <View key={i} style={styles.slideContainer}>
                                                <Image source={{ uri: `http://103.163.216.51:8000/${e}` }} style={styles.hotelImage} />
                                            </View>
                                        )
                                    })
                                }
                            </Swiper>)
                        }
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
    likeBtn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        position: 'absolute',
        zIndex: 10,
        top: 20,
        right: 15
    },
    slideContainer: {
        height: WINDOW_HEIGHT * 0.3,
        width: WINDOW_WIDTH,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    hotelName: {
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
        marginBottom: 5
    },
    hotelImage: {
        width: '100%',
        height: '100%'

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
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 15
    },

})