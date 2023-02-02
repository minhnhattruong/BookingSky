import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useRef, useState, Fragment } from 'react'
import Swiper from 'react-native-swiper'
import Animated from 'react-native-reanimated';
import { defaultStyles } from '../../style/style'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import Header from '../../component/headers/Header';

export default function PlaceInfo({ navigation, route }) {
    const { data } = route.params
    const animatedValue = useRef(new Animated.Value(0)).current;

    return (
        <View style={defaultStyles.containers}>
            <Header title={data.title} navigation={navigation} animatedValue={animatedValue} />
            <ScrollView
                onScroll={e => {
                    animatedValue.setValue(e.nativeEvent.contentOffset.y)
                }}
                scrollEventThrottle={16}
                style={{ paddingTop: 50 }}>
                <View style={styles.header}>
                    <View style={{ width: WINDOW_WIDTH, height: WINDOW_HEIGHT * 0.25 }}>
                        {data.photos &&
                            (<Swiper loop={true}>
                                {
                                    data.photos.map((e, i) => {
                                        return (
                                            <View key={i} style={styles.slideContainer}>
                                                <Image source={{ uri: `http://localhost:8000/${e}` }} style={styles.hotelImage} />
                                            </View>
                                        )
                                    })
                                }
                            </Swiper>)
                        }
                    </View>
                </View>
                <View style={styles.mainContent}>
                    <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>{data.title}</Text>
                    <Text style={{ marginTop: 20 }}>
                        {data.desc}
                    </Text>
                </View>
            </ScrollView>
            <View style={{ position: 'absolute', bottom: 30, width: '100%' }}>
                <TouchableOpacity
                    style={styles.bookingBtn}
                    onPress={() => navigation.navigate('HotelList', {
                        city: data.title,
                        min: 0,
                        max: 50000000
                    })}>
                    <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Tìm khách sạn ngay !</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slideContainer: {
        height: WINDOW_HEIGHT * 0.3,
        width: WINDOW_WIDTH,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    hotelImage: {
        width: '100%',
        height: '100%'

    },
    mainContent: {
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