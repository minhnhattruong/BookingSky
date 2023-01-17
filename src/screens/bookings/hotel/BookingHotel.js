import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, FlatList, ScrollView, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ListHotel from '../../../component/hotelItem/ListHotel'
import { useRef } from 'react'
import Animated from 'react-native-reanimated'
import HeaderAnimation from '../../../component/headers/HeaderAnimation'
import { buttonStyles, defaultStyles } from '../../../style/style'
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet'


export default function BookingHotel({ navigation }) {
    const [city, setCity] = useState('Hà Nội')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(50000000)

    const animatedValue = useRef(new Animated.Value(0)).current;


    return (
        <KeyboardAvoidingView style={defaultStyles.containers}>
            <HeaderAnimation title='Tìm khách sạn' navigation={navigation} animatedValue={animatedValue} />
            <ScrollView
                onScroll={e => {
                    animatedValue.setValue(e.nativeEvent.contentOffset.y)
                }}
                scrollEventThrottle={16}>

                <View style={{ height: 160, backgroundColor: '#3C5A99', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 70, zIndex: 1 }}>
                    <View style={styles.searchingForm}>
                        <View style={{ width: '100%', marginTop: 25 }}>
                            <Text style={{ fontSize: 12 }}>Thành phố</Text>
                            <View style={styles.inputItems}>
                                <Ionicons name='md-location-sharp' size={20} color={'#686868'} />
                                <TextInput
                                    onChangeText={setCity}
                                    value={city}
                                    style={{
                                        flex: 1,
                                        padding: 0,
                                        marginLeft: 10,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ width: '100%', marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: '45%' }}>
                                <Text style={{ fontSize: 12 }}>Giá thấp nhất</Text>
                                <View style={{ borderWidth: 0.25, borderColor: '#666', borderRadius: 5, marginTop: 5, flexDirection: 'row' }}>
                                    <TextInput
                                        onChangeText={setMinPrice}
                                        value={minPrice}
                                        placeholder={"0 đ"}
                                        style={{
                                            flex: 1,
                                            padding: 0,
                                            marginLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                            <Text>-</Text>
                            <View style={{ width: '45%' }}>
                                <Text style={{ fontSize: 12 }}>Giá cao nhất</Text>
                                <View style={{ borderWidth: 0.25, borderColor: '#666', borderRadius: 5, marginTop: 5 }}>
                                    <TextInput
                                        onChangeText={setMaxPrice}
                                        value={maxPrice}
                                        placeholder={"50.000.000 đ"}
                                        style={{
                                            flex: 1,
                                            padding: 0,
                                            marginLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.searchBtn}
                            onPress={() =>
                                navigation.navigate(
                                    'HotelList',
                                    {
                                        city: city,
                                        min: minPrice,
                                        max: maxPrice

                                    })

                            }>
                            <Text style={{ color: '#fff', fontWeight: '500' }}>Tìm kiếm khách sạn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 150 }} />
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

const styles = StyleSheet.create({
    searchingForm: {
        marginTop: 60,
        paddingVertical: 20,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 30,
        right: 30,
        borderRadius: 40,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 2,

    },
    inputItems: {
        height: 30,
        borderBottomWidth: 0.25,
        borderBottomColor: '#666',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: WINDOW_WIDTH,
        paddingHorizontal: 10
    },
    searchBtn: {
        marginTop: 15,
        backgroundColor: '#F70202',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 10,
    },
    localHotels: {
        paddingTop: 20,
    },
    foreignHotels: {
        paddingTop: 15,
    },
    recentHotels: {
        paddingTop: 15,
        paddingBottom: 20
    }
})