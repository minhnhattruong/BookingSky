import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useCallback, useMemo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import CustomBackdrop from '../CustomBackdrop ';


export default function PaymentModal(props) {
    const email = useSelector(store => store.auth.info.email);
    const bookingId = props.data
    const bottomSheetRef = props.bottomSheetRef

    const snapPoints = useMemo(() => ['90%', '90%'], []);

    const handleSheetChanges = useCallback(index => {
        console.log('handleSheetChanges', index);
    }, []);

    const renderBackdrop = useCallback(
        props => (
            <CustomBackdrop
                {...props}
                disappearsOnIndex={1}
                appearsOnIndex={2}
                bottomSheetRef={bottomSheetRef}
            />
        ),
        [],
    );

    return (
        <BottomSheetModal
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}>
            <View style={styles.contentContainer}>
                <BottomSheetScrollView>
                    <View style={styles.mainContent}>
                        <View style={{ marginTop: 30, alignItems: 'center' }}>
                            <View style={styles.qrcode} >
                                <Image source={require('../../assets/image/QrPay.png')} style={{ width: '100%', height: '100%' }} />
                            </View>
                            <Text style={{ paddingHorizontal: 20, paddingVertical: 5, textAlign: 'center', color: '#3C5A99' }}>Vui lòng chuyển khoản hoặc quét mã QR theo thông tin dưới đây !</Text>
                            <View style={styles.info}>
                                <Text style={{ fontSize: 16, fontWeight: '500', color: '#000', marginHorizontal: 15, marginVertical: 10 }}>Thông tin tài khoản</Text>
                                <View style={{ backgroundColor: '#dadada' }}>
                                    <View style={styles.infoItem}>
                                        <Text style={{ fontSize: 16 }}>Ngân hàng</Text>
                                        <Image source={{ uri: 'https://inkythuatso.com/uploads/images/2021/11/mb-bank-logo-inkythuatso-01-10-09-01-10.jpg' }} style={{ width: 80, height: 30 }} />
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text style={{ fontSize: 16 }}>Số TK</Text>
                                        <Text style={{ fontSize: 16 }}>68 03042000</Text>
                                    </View>
                                    <View style={styles.infoItem}>
                                        <Text style={{ fontSize: 16 }}>Chủ TK</Text>
                                        <Text style={{ fontSize: 16 }}>TRUONG MINH NHAT</Text>
                                    </View>
                                    <View style={{
                                        backgroundColor: '#fff',
                                        flexDirection: 'row',
                                        alignItems: 'flex-start',
                                        justifyContent: 'space-between',
                                        marginBottom: 0.55,
                                        paddingHorizontal: 20,
                                        paddingVertical: 15
                                    }}>
                                        <Text style={{ fontSize: 16 }}>Nội dung CK</Text>
                                        <View style={{ width: '45%' }}>
                                            <Text style={{ fontSize: 16 }}>{email} CK {bookingId}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* <TouchableOpacity style={styles.btnPay}>
                            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Xác nhận Thanh toán</Text>
                        </TouchableOpacity> */}
                    </View>
                </BottomSheetScrollView>
            </View>
        </BottomSheetModal>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: '#EDF1F9',
    },
    qrcode: {
        width: 220,
        height: 220,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: "#000",
        marginVertical: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 10,
    },
    info: {
        width: '100%'
    },
    infoItem: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        height: 45,
        justifyContent: 'space-between',
        marginBottom: 0.55,
        paddingHorizontal: 20
    },
    // btnPay: {
    //     marginTop: 20,
    //     marginHorizontal: 50,
    //     backgroundColor: '#3C5A99',
    //     paddingVertical: 15,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 15
    // }
});
