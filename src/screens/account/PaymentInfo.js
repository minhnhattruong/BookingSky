import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/headers/Header'
import { WINDOW_HEIGHT } from '@gorhom/bottom-sheet'

export default function PaymentInfo({ navigation, route }) {
    const { credit } = route.params
    const { name } = route.params
    const { number } = route.params
    const { cvv } = route.params
    const { valid } = route.params
    const [modalAlert, setModalAlert] = useState(false);

    return (
        <View style={styles.container}>
            <Header title='Thông tin phương thức thanh toán' navigation={navigation} />
            <View style={styles.credit}>
                {credit == 'momo' ? (
                    <>
                        <View style={styles.momoContent}>
                            <Image style={{ width: 80, height: 80 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png' }} />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ textTransform: 'uppercase', fontSize: 12, fontWeight: '300' }}>Phương thức thanh toán</Text>
                                <Text style={{ fontSize: 18, color: '#000', marginTop: 5 }}>MoMo E-Wallet</Text>
                            </View>
                        </View>
                        <View style={styles.info}>
                            <Text style={{ color: '#000', fontSize: 16, fontWeight: '500', marginLeft: 20, marginVertical: 10 }}>Thông tin tài khoản</Text>
                            <View style={styles.infoItems}>
                                <Text style={styles.placeholder}>Tên</Text>
                                <Text style={styles.txt}>{name}</Text>
                            </View>
                            <View style={[styles.infoItems, { borderBottomColor: '#fff' }]}>
                                <Text style={styles.placeholder}>Số điện thoại</Text>
                                <Text style={styles.txt}>{number}</Text>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <Text style={{ color: '#699BF7', marginTop: 20, marginHorizontal: 20 }}>Sử dụng tài khoản MoMo E-Wallet khác</Text>
                        </TouchableOpacity>
                    </>
                ) : (
                    <>
                        <View style={styles.visaMasterContent}>
                            {
                                credit == 'visa' && (<Image style={{ width: 90, height: 50 }} source={{ uri: 'https://brademar.com/wp-content/uploads/2022/05/Visa-Logo-PNG-2006-%E2%80%93-2014.png' }} />)
                            }
                            {
                                credit == 'master' && (<Image style={{ width: 90, height: 50 }} source={{ uri: 'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png' }} />)
                            }

                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ textTransform: 'uppercase', fontSize: 12, fontWeight: '300' }}>Phương thức thanh toán</Text>
                                <Text style={{ fontSize: 16, color: '#000', marginTop: 5 }}>Thẻ Tín dụng/ Ghi nợ {credit == 'visa' ? 'Visa' : 'Master'}</Text>
                            </View>
                        </View>
                        <View style={styles.info}>
                            <Text style={{ color: '#000', fontSize: 16, fontWeight: '500', marginLeft: 20, marginVertical: 10 }}>Thông tin thẻ</Text>
                            <View style={styles.infoItems}>
                                <Text style={styles.placeholder}>Tên</Text>
                                <Text style={styles.txt}>{name}</Text>
                            </View>
                            <View style={[styles.infoItems, { borderBottomColor: '#fff' }]}>
                                <Text style={styles.placeholder}>Số</Text>
                                <Text style={styles.txt}>{number}</Text>
                            </View>
                            <View style={styles.infoItems}>
                                <Text style={styles.placeholder}>Hết hạn</Text>
                                <Text style={styles.txt}>{valid}</Text>
                            </View>
                            <View style={styles.infoItems}>
                                <Text style={styles.placeholder}>CVV</Text>
                                <Text style={styles.txt}>{cvv}</Text>
                            </View>
                        </View>
                    </>
                )
                }
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => setModalAlert(true)}>
                <Text style={{ color: '#ff0000', fontSize: 16 }}>Gỡ bỏ phương thức thanh toán</Text>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={modalAlert}
                onRequestClose={() => setModalAlert(modalAlert)}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalAlert}>
                        <Text style={{ textAlign: 'center', fontWeight: '500', color: '#000', fontSize: 16, marginTop: 15 }}>
                            Bạn đã chắc chắn thông muốn gỡ bỏ phương thức thanh toán này ?
                        </Text>
                        <Text style={{ textAlign: 'center', marginTop: 15, marginBottom: 20 }}>
                            {credit == 'momo' && `MoMo E-Wallet liên kết với số điện thoại ******${number.slice(-4)} sẽ bị gỡ bỏ.`}
                            {credit == 'master' && `Thẻ Master số ******${number.slice(-4)} sẽ bị gỡ bỏ.`}
                            {credit == 'visa' && `Thẻ Visa liên kết với số ******${number.slice(-4)} sẽ bị gỡ bỏ.`}
                        </Text>
                        <TouchableOpacity
                            style={{
                                height: 40,
                                borderWidth: 1.5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 15,
                                borderColor: '#ff0000'
                            }}
                            onPress={() => setModalAlert(false)}
                        >
                            <Text style={{ color: '#ff0000', fontWeight: '500' }}>Hủy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                marginTop: 5,
                                marginBottom: 15,
                                height: 41,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 15,
                                backgroundColor: '#ff0000'
                            }}
                            onPress={() => {
                                setModalAlert(false),
                                    navigation.goBack()
                            }}>
                            <Text style={{ color: '#fff', fontWeight: '500' }}>Gỡ bỏ ngay </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF1F9'
    },
    momoContent: {
        backgroundColor: '#fff',
        height: 110,
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    infoItems: {
        backgroundColor: '#fff',
        height: WINDOW_HEIGHT * 0.07,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 2,
    },
    placeholder: {
        color: '#888',
        width: 125,
        fontWeight: '500'

    },
    txt: {
        color: '#000',
        fontSize: 15,
        fontWeight: '300'
    },
    button: {
        marginTop: 50,
        height: WINDOW_HEIGHT * 0.065,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        borderWidth: 1.5,
        borderColor: '#ff0000',
        borderRadius: 15

    },
    visaMasterContent: {
        backgroundColor: '#fff',
        height: 110,
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.7)'
    },
    modalAlert: {
        marginHorizontal: 20,
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