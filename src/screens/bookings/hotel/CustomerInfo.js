import { StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../component/headers/Header'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ContactCustomer from '../../../component/ContactCustomer';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet'
import { buttonStyles, defaultStyles } from '../../../style/style'

const USER_INFO = {
    firstName: 'Minh Nhat',
    lastName: 'Truong',
    phone: '768183914',
    countryCode: '84',
    email: 'truongminhnhat03042000@gmail.com'
}


export default function CustomerInfo({ navigation, route }) {
    const { hotelname } = route.params
    const { room } = route.params
    const [request, setRequest] = useState('');

    const [modalChangeInfo, setModalChangeInfo] = useState(false);
    const [modalAlert, setModalAlert] = useState(false);
    const [lastName, setLastName] = useState();
    const [firstName, setFirstName] = useState();
    const [countryCode, setCountryCode] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();


    return (
        <View style={defaultStyles.containers}>
            <Header title='Điền thông tin' navigation={navigation} />
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

                <View style={{ marginTop: 30, }}>
                    <ContactCustomer data={USER_INFO} />
                </View>

                <View style={styles.request}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, }}>
                        <MaterialCommunityIcons name='card-text-outline' size={22} color='#666' />
                        <Text style={{ fontSize: 15, color: '#000', marginLeft: 5 }}>Thêm yêu cầu</Text>
                    </View>
                    <TextInput
                        maxLength={100}
                        placeholder='Thêm yêu cầu của bạn tại đây !'
                        onChangeText={(request) => setRequest(request)}
                        value={request}
                        style={{ marginHorizontal: 20, marginVertical: 15, fontSize: 15, paddingBottom: 2, borderBottomWidth: 0.5, }}
                    />
                    <View style={{ width: '100%', alignItems: 'flex-end', paddingRight: 15 }}>
                        <Text>{request.length}/100</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={[buttonStyles.redButton1, { marginVertical: 30, marginHorizontal: 20 }]}
                    onPress={() => setModalAlert(true)}
                >
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500', }}>Tiếp tục</Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal
                transparent={true}
                visible={modalChangeInfo}
                onRequestClose={() => setModalChangeInfo(modalChangeInfo)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalChangeInfo}>
                        <Text style={{ marginTop: 20, fontSize: 16, color: '#000', textAlign: 'center' }}>Thêm thông tin người liên hệ</Text>
                        <View style={{ marginTop: 5, marginBottom: 30, paddingHorizontal: 20 }}>
                            <View style={styles.input}>
                                <Text style={styles.inputTitle}>Họ</Text>
                                <TextInput
                                    onChangeText={setLastName}
                                    value={lastName}
                                    style={styles.inputTxt}
                                />
                            </View>
                            <View style={styles.input}>
                                <Text style={styles.inputTitle}>Tên đệm và tên</Text>
                                <TextInput
                                    style={styles.inputTxt}
                                    onChangeText={setFirstName}
                                    value={firstName}
                                />
                            </View>
                            <View>
                                <Text style={styles.inputTitle}>Số điện thoại</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={styles.input}>
                                        <TextInput
                                            style={[styles.inputTxt, { width: 50 }]}
                                            onChangeText={setCountryCode}
                                            value={countryCode}
                                        />
                                    </View>
                                    <View style={styles.input}>
                                        <TextInput
                                            style={[styles.inputTxt, { width: 200 }]}
                                            onChangeText={setPhone}
                                            value={phone}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.input}>
                                <Text style={styles.inputTitle}>Email</Text>
                                <TextInput
                                    style={styles.inputTxt}
                                    onChangeText={setEmail}
                                    value={email}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.btnInfo} onPress={() => setModalChangeInfo(false)}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>Xong</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                transparent={true}
                visible={modalAlert}
                onRequestClose={() => setModalAlert(modalAlert)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalAlert}>
                        <Text style={{ textAlign: 'center', fontWeight: '500', color: '#000', fontSize: 16, marginTop: 15 }}>
                            Bạn đã chắc chắn thông tin đặt phòng chính xác ?
                        </Text>
                        <Text style={{ textAlign: 'center', marginTop: 15, marginBottom: 20 }}>Bạn sẽ không thể thay đổi thông tin đặt chỗ sau khi thanh toán. Bạn có muốn tiếp tục ?</Text>
                        <TouchableOpacity
                            style={{
                                height: 40,
                                borderWidth: 1.5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 15,
                                borderColor: '#3C5A99'
                            }}
                            onPress={() => setModalAlert(false)}
                        >
                            <Text style={{ color: '#3C5A99', fontWeight: '500' }}>Kiểm tra lại</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                marginTop: 5,
                                marginBottom: 15,
                                height: 41,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 15,
                                backgroundColor: '#3C5A99'
                            }}
                            onPress={() => {
                                setModalAlert(false)
                                navigation.navigate(
                                    'PaymentHotel',
                                    {
                                        request: request,
                                        hotelname: hotelname,
                                        room: room
                                    })
                            }}>
                            <Text style={{ color: '#fff', fontWeight: '500' }}>Đến bước Thanh toán </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View >
    )
}

const styles = StyleSheet.create({
    bookingInfo: {
        backgroundColor: '#EDF1F9',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
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
    customerInfo: {
        marginTop: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 2,
    },
    request: {
        backgroundColor: '#fff',
        paddingVertical: 15,
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.7)',
    },
    button: {
        height: 50,
        backgroundColor: '#FF0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 40,
        marginVertical: 30,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 1,
    },

    modalAlert: {
        width: 340,
        paddingHorizontal: 20,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden'
    }



})