import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Animated from 'react-native-reanimated'

const WIDTH = Dimensions.get('window').width

export default function HeaderAnimation(props) {
    const routeName = props.routeName
    const depart = props.depart
    const arrival = props.arrival
    const date = props.date
    const ticket = props.ticket
    const navigation = props.navigation
    const animatedValue = props.animatedValue
    const AnimatedView = Animated.createAnimatedComponent(View);

    const inputAnimation = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 30],
                    outputRange: [0, -120],
                    extrapolate: 'clamp',
                })
            }
        ],
        opacity: animatedValue.interpolate({
            inputRange: [0, 60],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        }),

    };
    const outputAnimation = {
        transform: [
            {
                translateY: animatedValue.interpolate({
                    inputRange: [0, 40],
                    outputRange: [-120, 0],
                    extrapolate: 'clamp',
                })
            }
        ],
        opacity: animatedValue?.interpolate({
            inputRange: [0, 60],
            outputRange: [0, 0.9],
            extrapolate: 'clamp',
        }),

    };



    return (
        <>
            <AnimatedView style={[inputAnimation, styles.header]}>
                <TouchableOpacity
                    style={{ position: 'absolute', left: 20, top: 25 }}
                    onPress={() => navigation.goBack()}>
                    <AntDesign name='left' size={26} color={'#fff'} />
                </TouchableOpacity>

                <View style={styles.oneways}>
                    <Text style={styles.location}>
                        {routeName == 'FindOneWay' || routeName == 'FindTicketDeparture' ? depart : arrival}
                    </Text>
                    <MaterialCommunityIcons name="arrow-right-thin" size={20} color={'#fff'} />
                    <Text style={styles.location}>
                        {routeName == 'FindOneWay' || routeName == 'FindTicketDeparture' ? arrival : depart}
                    </Text>
                </View>
                <Text style={styles.date}>
                    {date}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 3,
                    }}>
                    <Text style={styles.date}>{ticket} vé</Text>
                    <MaterialCommunityIcons
                        name="circle-medium"
                        style={{ fontSize: 14, color: '#fff' }}
                    />
                    <Text style={styles.date}>Economy</Text>
                </View>
            </AnimatedView>
            <AnimatedView style={[outputAnimation, styles.headerScroll]}>
                <TouchableOpacity
                    style={{ position: 'absolute', left: 20, top: 15 }}
                    onPress={() => navigation.goBack()}>
                    <AntDesign name='left' size={26} color={'#3C5A99'} />
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.oneways}>
                        <Text style={styles.locationScroll}>{depart}</Text>
                        <MaterialCommunityIcons name="arrow-right-thin" size={20} color={'#3C5A99'} />
                        <Text style={styles.locationScroll}>{arrival}</Text>
                    </View>
                    <View style={{ width: 5, height: 5, borderRadius: 5, backgroundColor: '#3C5A99', marginHorizontal: 5 }} />
                    <Text style={styles.dateScroll}>{date}</Text>
                </View>
            </AnimatedView>
        </>

    )
}

const styles = StyleSheet.create({
    header: {
        zIndex: 3,
        position: 'absolute',
        width: WIDTH,
        backgroundColor: '#3C5A99',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
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
    oneways: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        fontSize: 18,
        color: '#fff',
        marginHorizontal: 5
    },
    locationScroll: {
        fontSize: 16,
        fontWeight: '500',
        color: '#3C5A99',
        marginHorizontal: 5
    },
    date: {
        fontSize: 12,
        color: '#fff',
    },
    dateScroll: {
        fontSize: 16,
        color: '#3C5A99',
    },

})