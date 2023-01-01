import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Animated from 'react-native-reanimated'


const WIDTH = Dimensions.get('window').width
const AnimatedView = Animated.createAnimatedComponent(View);
export default function HeaderHotelList(props) {
    const navigation = props.navigation
    const animatedValue = props.animatedValue
    const location = props.location

    const inputAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 60],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        }),

    };
    const outputAnimation = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 10],
            outputRange: [0, 0.95],
            extrapolate: 'clamp',
        }),

    };



    return (
        <>
            <AnimatedView style={[styles.header, inputAnimation]}>
                <TouchableOpacity
                    style={{ position: 'absolute', left: 20, top: 15 }}
                    onPress={() => navigation.goBack()}>
                    <AntDesign name='left' size={26} color={'#fff'} />
                </TouchableOpacity>
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>{location}</Text>
            </AnimatedView>
            <AnimatedView style={[styles.headerScroll, outputAnimation]}>
                <TouchableOpacity
                    style={{ position: 'absolute', left: 20, top: 15 }}
                    onPress={() => navigation.goBack()}>
                    <AntDesign name='left' size={26} color={'#3C5A99'} />
                </TouchableOpacity>
                <Text style={{ color: '#3C5A99', fontSize: 18, fontWeight: '500' }}>{location}</Text>
            </AnimatedView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        zIndex: 3,
        position: 'absolute',
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#3C5A99'
    },
    headerScroll: {
        zIndex: 3,
        position: 'absolute',
        width: WIDTH,
        backgroundColor: '#fff',
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
})