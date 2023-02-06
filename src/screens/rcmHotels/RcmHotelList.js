import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import React, { useRef } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Animated from 'react-native-reanimated'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { FormattedCurrency } from 'react-native-globalize';
import Header from '../../component/headers/Header';
import { defaultStyles } from '../../style/style';

export default function RcmHotelList({ navigation, route }) {
    const { data } = route.params
    const animatedValue = useRef(new Animated.Value(0)).current;

    console.log(data);

    const getPlace = (e) => {
        navigation.navigate('HotelInfo', { hotelId: e._id })
    }
    return (
        <View style={defaultStyles.containers}>
            <Header title='Khách sạn lý tưởng' navigation={navigation} animatedValue={animatedValue} />
            <View style={{ height: 60 }} />
            <ScrollView
                style={styles.mainContent}
                onScroll={e => {
                    animatedValue.setValue(e.nativeEvent.contentOffset.y)
                }}
                scrollEventThrottle={16}
            >
                {data.length > 0 &&
                    data.map((e, i) => {
                        const ratingStar = []
                        for (let i = 0; i < e.rating; i++) {
                            ratingStar.push(i)
                        }
                        return (
                            <TouchableOpacity
                                key={i}
                                style={styles.item}
                                onPress={() => getPlace(e)}>
                                <Image
                                    source={{ uri: `http://103.163.216.51:8000/${e.photos[0]}` }}
                                    style={styles.itemImage}
                                />
                                <View style={styles.hotelInfo}>
                                    <Text style={styles.hotelName} numberOfLines={2} ellipsizeMode={'tail'}>{e.title}</Text>
                                    <View style={{ flexDirection: 'row' }}>
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
                                        <Text> /đêm</Text>
                                    </View>
                                    <View style={styles.location}>
                                        <Ionicons name='md-location-sharp' size={14} color={'#686868'} />
                                        <Text style={{ fontSize: 12, marginLeft: 5 }}>{e.city}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
            </ScrollView>
        </View>
    )
}

const ITEM_HEIGHT = WINDOW_HEIGHT * 0.25
const ITEM_WIDTH = WINDOW_WIDTH * 0.90

const styles = StyleSheet.create({
    mainContent: {
        paddingHorizontal: 20, paddingTop: 20
    },
    item: {
        height: ITEM_HEIGHT,
        width: ITEM_WIDTH,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 25,
    },
    itemImage: {
        width: ITEM_WIDTH * 0.45,
        height: ITEM_HEIGHT
    },
    title: {
        width: '65%',
        fontWeight: '600',
        fontSize: 14,
        color: '#000'
    },
    info: {
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: ITEM_WIDTH * 0.55,
    },
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
        height: ITEM_HEIGHT,
        width: ITEM_WIDTH,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 25,
    },
    itemImage: {
        width: ITEM_WIDTH * 0.45,
        height: ITEM_HEIGHT
    },
    hotelName: {
        width: '65%',
        fontWeight: '600',
        fontSize: 14,
        color: '#000'
    },
    hotelInfo: {
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: ITEM_WIDTH * 0.55,
    },
    hotelAddress: {
        width: '70%',
        height: 30,
        fontSize: 11
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
    },
    hotelPrice: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        width: '70%'
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    unlikedBtn: {
        width: 30,
        height: 30,
        backgroundColor: '#ff0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        right: 20
    }
})