import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useRef } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Animated from 'react-native-reanimated';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { useSelector } from 'react-redux';

const AnimatedView = Animated.createAnimatedComponent(View);

export default function HeaderMenu(props) {
    const username = useSelector(store => store.auth.info.name);
    const navigation = props.navigation
    const animatedValue = props.animatedValue

    const helloAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 20],
                    outputRange: [0, -120],
                    extrapolate: 'clamp',
                }),
                translateY: animatedValue.interpolate({
                    inputRange: [0, 25],
                    outputRange: [0, -50],
                    extrapolate: 'clamp',
                }),
                scaleX: animatedValue.interpolate({
                    inputRange: [0, 25],
                    outputRange: [1, 0],
                    extrapolate: 'clamp',
                }),
                scaleY: animatedValue.interpolate({
                    inputRange: [0, 25],
                    outputRange: [1, 0],
                    extrapolate: 'clamp',
                })
            }
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 10],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        }),

    }
    const userNameAnimation = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -15],
                    extrapolate: 'clamp',
                }),
                translateY: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -55],
                    extrapolate: 'clamp',
                }),
                scaleX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [1, 0.9],
                    extrapolate: 'clamp',
                }),
                scaleY: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [1, 0.9],
                    extrapolate: 'clamp',
                })
            }
        ],
    }

    const depositLogo = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, 0],
                    extrapolate: 'clamp',
                })
                ,
                translateY: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -50],
                    extrapolate: 'clamp',
                })
            }
        ],
    }

    const bigLogo = {
        transform: [
            {
                translateX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -5],
                    extrapolate: 'clamp',
                })
                ,
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [0, -12],
                    extrapolate: 'clamp',
                }),
                scaleX: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [1, 0],
                    extrapolate: 'clamp',
                }),
                scaleY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [1, 0],
                    extrapolate: 'clamp',
                }),

            }
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 25],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        }),

    }
    const smallLogo = {
        opacity: animatedValue.interpolate({
            inputRange: [0, 25],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        }),
    }

    const smallButton = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 70],
                    outputRange: [-110, 0],
                    extrapolate: 'clamp',
                }),
            }
        ],
        opacity: animatedValue.interpolate({
            inputRange: [30, 80],
            outputRange: [0, 0.95],
            extrapolate: 'clamp',
        }),
    }
    const bigButton = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [0, -100],
                    extrapolate: 'clamp',
                }),
                scaleX: animatedValue.interpolate({
                    inputRange: [0, 80],
                    outputRange: [1, 1.5],
                    extrapolate: 'clamp',
                }),
                scaleY: animatedValue.interpolate({
                    inputRange: [0, 60],
                    outputRange: [1, 0],
                    extrapolate: 'clamp',
                })
            }
        ],
        opacity: animatedValue.interpolate({
            inputRange: [20, 60],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        }),
    }
    const buttonName = {
        transform: [
            {
                scale: animatedValue.interpolate({
                    inputRange: [0, 20],
                    outputRange: [1, 0],
                    extrapolate: 'clamp',
                })
            }
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 15],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        })
    }


    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.upperHeader} />
                    <View style={styles.lowerHeader}>
                        <View style={{ flexDirection: 'row' }}>
                            <AnimatedView style={[depositLogo, styles.featureLogo]}>
                                <AnimatedView style={[bigLogo, styles.bigLogo]} >
                                    <FontAwesome name="plane" size={60} color={'white'} />
                                </AnimatedView>
                                <AnimatedView style={[smallLogo, styles.smallLogo]}>
                                    <FontAwesome name="plane" size={38} color={'white'} />
                                </AnimatedView>
                            </AnimatedView>
                            <View style={{ marginLeft: 10 }}>
                                <AnimatedView style={[helloAnimation]}>
                                    <Text style={{ color: '#fff', fontSize: 15 }}>Xin chào,</Text>
                                </AnimatedView>
                                <AnimatedView style={[userNameAnimation]}>
                                    <Text style={{ color: '#fff', fontSize: 17, fontWeight: '500' }}>
                                        {username} !
                                    </Text>
                                </AnimatedView>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <AnimatedView style={[bigButton, styles.bigButton]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('BookingHotel')}
                    style={styles.bigButtonItem}>
                    <View style={styles.bigButtonIcon}>
                        <Image
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/235/235889.png',
                            }}
                            style={{ width: 40, height: 40 }}
                        />
                    </View>
                    <AnimatedView style={buttonName}>
                        <Text style={{ fontWeight: '500', fontSize: 12 }}>Tìm khách sạn</Text>
                    </AnimatedView>
                </TouchableOpacity>
            </AnimatedView>
            <AnimatedView style={[smallButton, styles.smallButton]}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('BookingHotel')}
                    style={styles.smallButtonItem}>
                    <View style={styles.smallButtonIcon}>
                        <Image
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/512/235/235889.png',
                            }}
                            style={{ width: 30, height: 30, marginRight: 10 }}
                        />
                        <Text style={{ fontWeight: '500' }}>Tìm khách sạn </Text>
                    </View>
                </TouchableOpacity>
            </AnimatedView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: WINDOW_WIDTH,
        backgroundColor: '#3C5A99',
        paddingLeft: 20,
        paddingRight: 35,
    },
    upperHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: 60,

    },
    lowerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 96,
    },
    minibar: {
        width: 90,
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
    bigButton: {
        position: 'absolute',
        top: 120,
        left: WINDOW_WIDTH * 0.1,
        right: WINDOW_WIDTH * 0.1,
        zIndex: 4,
        height: 90,
        borderRadius: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.0,

        elevation: 2,
    },
    bigButtonItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%'
    },
    bigButtonIcon: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    },
    coin: {
        borderWidth: 1,
        height: 25,
        justifyContent: 'center',
        paddingHorizontal: 5,
        borderRadius: 8,
        borderColor: '#FFF',
        marginTop: 18,
    },
    smallLogo: {
        position: 'absolute',
        marginTop: 5,
        marginLeft: 5,
    },
    smallButton: {
        zIndex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: WINDOW_WIDTH,
        height: 55,
        position: 'absolute',
        top: 60,
        backgroundColor: '#fff',
        zIndex: 100,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.0,

        elevation: 2,
    },
    smallButtonItem: {
        width: '100%',
        alignItems: 'center',

    },
    smallButtonIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})