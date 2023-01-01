import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Animated from 'react-native-reanimated'
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet'

const WIDTH = Dimensions.get('window').width

export default function HeaderBookingFlight(props) {
    const title = props.title
    const navigation = props.navigation
    const animatedValue = props.animatedValue
    const { setOneWays } = props;
    const [oneWayClick, setOneWayClick] = useState(true)
    const AnimatedView = Animated.createAnimatedComponent(View);

    const HandlePress = (oneWayClick) => {
        setOneWayClick(oneWayClick)
        setOneWays(oneWayClick)
    }

    const inputAnimation = {
        transform: [
            {
                translateY: animatedValue?.interpolate({
                    inputRange: [0, 30],
                    outputRange: [0, -120],
                    extrapolate: 'clamp',
                })
            }
        ],
        opacity: animatedValue?.interpolate({
            inputRange: [0, 60],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        }),

    };
    const outputAnimation = {
        transform: [
            {
                translateY: animatedValue?.interpolate({
                    inputRange: [0, 40],
                    outputRange: [-120, 0],
                    extrapolate: 'clamp',
                })
            }
        ],
        opacity: animatedValue?.interpolate({
            inputRange: [0, 60],
            outputRange: [0, 0.95],
            extrapolate: 'clamp',
        }),

    };
    const inputTopTab = {
        transform: [
            {
                translateY: animatedValue?.interpolate({
                    inputRange: [0, 25],
                    outputRange: [0, -120],
                    extrapolate: 'clamp',
                })
            }
        ],
        opacity: animatedValue?.interpolate({
            inputRange: [0, 50],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        }),

    };

    const outputTopTab = {
        transform: [
            {
                translateY: animatedValue?.interpolate({
                    inputRange: [0, 60],
                    outputRange: [-120, 0],
                    extrapolate: 'clamp',
                })
            }
        ],
        opacity: animatedValue?.interpolate({
            inputRange: [0, 55],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        }),

    };




    return (
        <>
            <AnimatedView style={[inputAnimation, { zIndex: 3, position: 'absolute', }]}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={{ position: 'absolute', left: 20, top: 15 }}
                        onPress={() => navigation.goBack()}>
                        <AntDesign name='left' size={26} color={'#fff'} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>{title}</Text>
                </View>
                <AnimatedView style={[inputTopTab, styles.viewtabtop]}>
                    <TouchableOpacity
                        onPress={() => HandlePress(true)}
                        style={{
                            ...styles.directBtn,
                            backgroundColor: oneWayClick ? '#fff' : '#3C5A99',
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                        }}>
                        <Text
                            style={{ ...styles.oneway, color: oneWayClick ? '#3C5A99' : '#fff' }}>
                            Một chiều
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => HandlePress(false)}
                        style={{
                            ...styles.directBtn,
                            backgroundColor: oneWayClick ? '#3C5A99' : '#fff',
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                        }}>
                        <Text
                            style={{ ...styles.oneway, color: oneWayClick ? '#fff' : '#3C5A99' }}>
                            Khứ hồi
                        </Text>
                    </TouchableOpacity>
                </AnimatedView>
            </AnimatedView>
            <AnimatedView style={[outputAnimation, {
                zIndex: 3,
                position: 'absolute',
            }]}>
                <View style={styles.headerScroll}>
                    <TouchableOpacity
                        style={{ position: 'absolute', left: 20, top: 15 }}
                        onPress={() => navigation.goBack()}>
                        <AntDesign name='left' size={26} color={'#3C5A99'} />
                    </TouchableOpacity>
                    <Text style={{ color: '#3C5A99', fontSize: 18, fontWeight: '500' }}>{title}</Text>
                </View>
                <AnimatedView style={[outputTopTab, styles.viewtabtopScroll]}>
                    <TouchableOpacity
                        onPress={() => HandlePress(true)}
                        style={{
                            ...styles.directBtnScroll,
                            backgroundColor: oneWayClick ? '#3C5A99' : '#fff',
                            borderTopLeftRadius: 20,
                            borderBottomLeftRadius: 20,
                        }}>
                        <Text
                            style={{ ...styles.oneway, color: oneWayClick ? '#fff' : '#3C5A99' }}>
                            Một chiều
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => HandlePress(false)}
                        style={{
                            ...styles.directBtnScroll,
                            backgroundColor: oneWayClick ? '#fff' : '#3C5A99',
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                        }}>
                        <Text
                            style={{ ...styles.oneway, color: oneWayClick ? '#3C5A99' : '#fff' }}>
                            Khứ hồi
                        </Text>
                    </TouchableOpacity>
                </AnimatedView>
            </AnimatedView>
        </>

    )
}

const styles = StyleSheet.create({
    header: {
        width: WIDTH,
        backgroundColor: '#3C5A99',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
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

        elevation: 2,
    },
    oneway: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    viewtabtop: {
        top: 60,
        zIndex: -1,
        position: 'absolute',
        width: WINDOW_WIDTH,
        backgroundColor: '#3C5A99',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    viewtabtopScroll: {
        top: 60,
        zIndex: -1,
        position: 'absolute',
        width: WINDOW_WIDTH,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 4,
    },
    directBtn: {
        paddingVertical: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#fff'
    },
    directBtnScroll: {
        paddingVertical: 10,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#3C5A99'
    }
})