import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState, useCallback, useMemo, useRef, } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { BottomSheetModal, BottomSheetScrollView, WINDOW_HEIGHT, WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import CustomBackdrop from './CustomBackdrop ';
import { buttonStyles } from '../style/style';

const VOUCHER = [
    {
        id: 1,
        title: 'Giảm 10% trên hóa đơn tiền phòng',
        valid: '26.09',
        img: 'https://www.easemytrip.com/images/hotel-img/emtbook-23apr-lp.png',

    },
    {
        id: 2,
        title: 'Giảm 20% trên hóa đơn tiền phòng',
        valid: '26.09',
        img: 'https://www.easemytrip.com/images/hotel-img/emtbook-23apr-lp.png',

    },
    {
        id: 3,
        title: 'Giảm 30% trên hóa đơn tiền phòng',
        valid: '26.09',
        img: 'https://www.easemytrip.com/images/hotel-img/emtbook-23apr-lp.png',

    },
    {
        id: 4,
        title: 'Giảm 40% trên hóa đơn tiền phòng',
        valid: '26.09',
        img: 'https://www.easemytrip.com/images/hotel-img/emtbook-23apr-lp.png',

    },
    {
        id: 5,
        title: 'Giảm 50% trên hóa đơn tiền phòng',
        valid: '26.09',
        img: 'https://www.easemytrip.com/images/hotel-img/emtbook-23apr-lp.png',

    },
]



export default function VoucherPicker() {

    const Item = ({ id, title, valid, img }) => (
        <TouchableOpacity
            style={styles.voucherItems}
            onPress={() => tick == id ? handlePress() : handlePress(id)}>
            <Image source={{ uri: img }} style={styles.voucherImg} />
            <View style={styles.voucherInfo}>
                <Text style={styles.voucherTitle} numberOfLines={3} ellipsizeMode={'tail'}>{title}</Text>
                <Text style={{ marginTop: 10 }}>HSD {valid}</Text>
            </View>
            <View style={styles.voucherTick}>
                {
                    tick == id && <AntDesign name='checkcircle' size={22} color='#4ECB71' />
                }
            </View>
        </TouchableOpacity>
    )


    const bottomSheetRef = useRef(null);

    const snapPoints = useMemo(() => ['90%', '90%'], []);

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);

    }, []);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);
    const handlePresentModalClose = useCallback(() => {
        bottomSheetRef.current?.close();
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
        []
    );



    const [tick, setTick] = useState()

    const handlePress = (id) => {
        setTick(id)
    }

    return (
        <View>
            {
                tick ? (
                    <TouchableOpacity
                        style={styles.voucher}
                        onPress={() => handlePresentModalPress()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons name='ticket-confirmation-outline' size={24} color='#F6C000' />
                            <Text style={{ fontSize: 15, color: '#000', marginLeft: 6 }}> Áp dụng Voucher</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign name='checkcircle' size={22} color='#4ECB71' style={{ marginRight: 10 }} />
                            <AntDesign name='right' size={18} color={'#999'} />
                        </View>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity
                        style={styles.voucher}
                        onPress={() => handlePresentModalPress()}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons name='ticket-confirmation-outline' size={24} color='#F6C000' />
                            <Text style={{ fontSize: 15, color: '#000', marginLeft: 6 }}> Áp dụng Voucher</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: '#999', marginRight: 5 }}>Chọn</Text>
                            <AntDesign name='right' size={18} color={'#999'} />
                        </View>
                    </TouchableOpacity>
                )
            }
            <BottomSheetModal
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={renderBackdrop}

            >
                <View style={styles.contentContainer}>
                    <View style={styles.header}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>Voucher của tôi</Text>
                    </View>
                    <BottomSheetScrollView>
                        <View style={styles.mainContent}>
                            {
                                VOUCHER.map((item) =>
                                    <Item key={item.id} id={item.id} title={item.title} img={item.img} valid={item.valid} />)
                            }
                        </View>
                        <TouchableOpacity
                            style={[buttonStyles.blueButton1, { marginTop: 30, marginBottom: 50, marginHorizontal: 20 }]}
                            onPress={() => handlePresentModalClose()}>
                            <Text style={{ color: '#fff', fontSize: 16 }}>Xong</Text>
                        </TouchableOpacity>

                    </BottomSheetScrollView>
                </View>
            </BottomSheetModal>
        </View>

    )
}

const ITEM_WIDTH = WINDOW_WIDTH * 0.9
const ITEM_HEIGHT = WINDOW_HEIGHT * 0.18
const styles = StyleSheet.create({
    voucher: {
        height: 60,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 2,
    },
    header: {
        backgroundColor: '#3C5A99',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#EDF1F9',
    },
    voucherItems: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        marginVertical: 5,
        borderRadius: 30,
        overflow: 'hidden',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,
        elevation: 2,
    },
    voucherInfo: {
        paddingLeft: 15,
        width: ITEM_WIDTH * 0.45,
    },
    voucherTitle: {
        width: '100%',
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: '500',
        color: '#000'
    },
    voucherImg: {
        width: ITEM_WIDTH * 0.40,
        height: ITEM_HEIGHT,
    },
    voucherTick: {
        width: ITEM_WIDTH * 0.15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContent: {
        paddingTop: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 1,
    }
})