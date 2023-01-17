import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { defaultStyles } from '../../../style/style'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default function BookingSuccess({ navigation }) {
    return (
        <View style={defaultStyles.containers}>
            <View style={styles.header}>
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>Thanh toán thành công</Text>
                <TouchableOpacity
                    style={styles.btnClose}
                    onPress={() => navigation.navigate('Home')}>
                    <AntDesign name='close' size={26} color={'#fff'} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={styles.mainContent}>
                    <AntDesign name='checkcircle' size={65} color={'#2CB67D'} />
                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#000', marginTop: 20, fontWeight: '500' }}>
                        Xin chúc mừng !
                    </Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: '#000', marginBottom: 20, fontWeight: '500' }}>
                        Đơn đặt phòng của bạn đã thành công !
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: 'center', fontWeight: '300', color: '#000' }}>
                        Vui lòng kiểm tra thông tin phòng đã đặt trong mục
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('YourBookingStack', { screen: 'YourBooking' })}>
                        <Text style={{ color: '#3C5A99', fontSize: 18 }}>"Đã Đặt"</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3C5A99',
        alignItems: 'center',
        justifyContent: 'center',
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
    mainContent: {
        width: 320,
        height: 520,
        backgroundColor: '#fff',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    btnClose: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 1,
        right: 15
    }
})