import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../component/headers/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import PaymentPicker from '../../../component/PaymentPicker'
import VoucherPicker from '../../../component/VoucherPicker'
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet'
import { defaultStyles } from '../../../style/style'

export default function PaymentHotel({ navigation, route },) {
    const { hotelname } = route.params
    const { room } = route.params
    const { request } = route.params
    const [alert, setAlert] = useState(false)
    const [payment, setPayment] = useState()

    return (
        <View style={defaultStyles.containers}>
            <Header title={'Thanh toán'} navigation={navigation} />
            <ScrollView>
                <View style={styles.bookingInfo}>
                    <View style={styles.timeBooking}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesome name='building' size={16} color={'#3C5A99'} />
                            <Text style={{ fontSize: 16, color: '#000', fontWeight: '500', marginLeft: 10 }}>{hotelname}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ width: WINDOW_WIDTH * 0.4 }}>
                                <Text style={{ fontSize: 15 }}>Nhận phòng</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: WINDOW_WIDTH * 0.4 }}>
                                <Text style={{ fontSize: 15 }}>14:00</Text>
                                <Text style={{ fontSize: 15 }}>T2, 8-8-2022</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <View style={{ width: WINDOW_WIDTH * 0.4 }}>
                                <Text style={{ fontSize: 15 }}>Trả phòng</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: WINDOW_WIDTH * 0.4 }}>
                                <Text style={{ fontSize: 15 }}>12:00</Text>
                                <Text style={{ fontSize: 15 }}>T5, 11-8-2022</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 25 }}>
                            <View style={{ width: WINDOW_WIDTH * 0.4 }}>
                                <Text style={{ fontSize: 15 }}>Tổng thời gian</Text>
                            </View>
                            <Text style={{ fontSize: 15 }}>2 đêm</Text>
                        </View>
                    </View>
                    <View style={styles.priceBooking}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '40%' }}>
                            <Text style={{ fontSize: 14, marginRight: 5 }}>X1</Text>
                            <View style={{ height: 28, width: 1, backgroundColor: '#666' }} />
                            <Text style={{ fontSize: 14, marginHorizontal: 5, width: '70%' }}>{room}</Text>
                            <View style={{ height: 28, width: 1, backgroundColor: '#666' }} />
                            <Text style={{ fontSize: 14, marginLeft: 5 }}>2 đêm</Text>
                        </View>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: '#000', width: '40%', textAlign: 'right' }}>126.000.000đ</Text>
                    </View>
                    <View style={styles.totalPrice}>
                        <Text style={{ fontSize: 16, fontWeight: '500', width: '40%' }}> Tổng thanh toán</Text>
                        <Text style={{ fontSize: 17, fontWeight: '500', color: '#000', width: '40%', textAlign: 'right' }}>6.000.000đ</Text>
                    </View>
                </View>
                <View style={styles.request}>
                    <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                        <MaterialCommunityIcons name='card-text-outline' size={22} color='#666' />
                        <Text style={{ fontSize: 15, color: '#000', marginLeft: 5 }}>Thêm yêu cầu</Text>
                    </View>
                    <Text
                        style={{ marginHorizontal: 20, marginVertical: 10, fontSize: 14, }}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}>
                        {request}
                    </Text>
                </View>
                <View style={styles.customerInfo}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <AntDesign name='user' size={20} color={'#999'} />
                        <Text style={{ color: '#000', fontWeight: '500', fontSize: 16, marginLeft: 5 }}>Truong Minh Nhat</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 15, marginTop: 5 }}>
                        <Text style={{ fontSize: 13, width: '60%' }}>minhnhat030402000@gmail.com</Text>
                        <View style={{ backgroundColor: '#616161', width: 5, height: 5, borderRadius: 7, marginHorizontal: 5, }}></View>
                        <Text style={{ fontSize: 13, width: '28%', textAlign: 'right' }}
                            numberOfLines={1}
                            ellipsizeMode={'tail'} >
                            076818391422</Text>
                    </View>
                </View>

                <VoucherPicker />

                <PaymentPicker setPayment={setPayment} navigation={navigation} />

                {alert && (
                    <View style={{ paddingLeft: 15, paddingTop: 15, flexDirection: 'row', alignItems: 'center' }}>
                        <MaterialCommunityIcons name='alert-circle-outline' size={20} color='#FF0000' />
                        <Text style={{ color: '#FF0000' }}> Vui lòng chọn phương thức trước khi thanh toán! </Text>
                    </View>
                )}

                <View style={styles.footer}>
                    <View style={{ flexDirection: 'row', height: 70, }}>
                        <View style={{ width: '50%', justifyContent: 'center', alignItems: 'flex-end', paddingRight: 15 }}>
                            <Text style={{ color: '#999' }}>Tổng thanh toán</Text>
                            <Text style={{ fontSize: 20, fontWeight: '500', color: '#000' }}>6.000.000 VNĐ</Text>
                        </View>
                        <TouchableOpacity
                            style={{ backgroundColor: '#FF0000', width: '50%', justifyContent: 'center', alignItems: 'center' }}
                            onPress={() =>
                                payment ? (navigation.navigate('PaymentSuccess'))
                                    : setAlert(true)}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>Thanh toán</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF1F9'
    },
    bookingInfo: {
        backgroundColor: '#EDF1F9',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 1,
    },
    timeBooking: {
        paddingTop: 20,
        paddingHorizontal: 30,
        marginBottom: 2,
        backgroundColor: '#fff'
    },
    priceBooking: {
        height: 80,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        marginBottom: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    totalPrice: {
        height: 80,
        backgroundColor: '#fff',
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    request: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingBottom: 30,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 1,
    },
    customerInfo: {
        height: 80,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        paddingLeft: 20,
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 1,
    },
    footer: {
        backgroundColor: '#fff',
        height: 120,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 1,
    }
})