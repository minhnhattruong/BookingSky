import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { FormattedCurrency } from 'react-native-globalize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getAllBooking, cancelBooking } from '../../api/apiBooking';
import Header from '../../component/headers/Header';
import PaymentModal from '../../component/booking/PaymentModal';


const YourBooking = ({ navigation }) => {

    const [data, setData] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const [chooseBooking, setChooseBooking] = useState();

    const bottomSheetRef = useRef(null);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);

    useEffect(() => {
        getMyBooking()
    }, [refreshing])

    const getMyBooking = () => {
        getAllBooking().then(rep => {
            setData(rep.data)
        }).catch(e => {
            console.log(e)
        })
    }

    const onCancel = (id) => {
        cancelBooking(id).then(rep => {
            setRefreshing(!refreshing)
        }).catch(e => {
            console.log(e)
        })
    }

    const onPay = (e) => {
        handlePresentModalPress()
        setChooseBooking(e)
    }

    return (
        <View style={styles.container}>
            <Header title="Đã đặt" />
            <View style={{ height: 50 }} />
            <ScrollView
                style={{ paddingTop: 10, marginBottom: 60 }}
            >
                <View style={{ marginTop: 10, marginBottom: 10, paddingHorizontal: 15 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Phòng đã đặt</Text>
                </View>
                {
                    data.map((e, i) => (
                        <View key={i} style={styles.items}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1, height: 120 }}>
                                    <Image style={{ height: '100%', width: '100%' }} source={e.photos.length > 0 ? { uri: `http://103.163.216.51:8000/${e.photos[0]}` } : { uri: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg' }} />
                                </View>
                                <View style={{ flex: 2, padding: 10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>
                                        <FontAwesome name='hotel' size={18} color={'#3C5A99'} />
                                        <Text
                                            style={styles.roomName}
                                            numberOfLines={2}
                                            ellipsizeMode={'tail'}
                                        >
                                            {e.title}
                                        </Text>
                                        <View style={styles.room}>
                                            <Text style={{
                                                paddingHorizontal: 10,
                                                paddingVertical: 3,
                                                color: '#fff',
                                                fontSize: 12
                                            }}>P. {e.roomNum}</Text>
                                        </View>
                                    </View>

                                    <View style={{ marginTop: 10 }}>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 12, width: 80 }}>Nhận phòng:</Text>
                                            <Text style={{ fontSize: 12 }}>{e.reserveDates[0]}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 12, width: 80 }}>Trả phòng:</Text>
                                            <Text style={{ fontSize: 12 }}>{e.reserveDates[1]}</Text>
                                        </View>
                                        <View style={{ marginTop: 5, flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 12, width: 80 }}>ID Đặt phòng:</Text>
                                            <Text style={{ fontSize: 12, textTransform: 'uppercase', fontWeight: '500', color: '#000' }}>{e._id.slice(0, 9)}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.dashedLine} />
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                paddingVertical: 15,
                                paddingHorizontal: 15,
                            }}>
                                <View>
                                    <Text>Giá</Text>
                                    <FormattedCurrency style={styles.price} value={Number(e.price)} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        style={styles.cancelButton}
                                        onPress={() => onCancel(e._id)}
                                    >
                                        <Text style={{ fontWeight: '500', color: '#fff', fontSize: 12 }}>Hủy phòng</Text>
                                    </TouchableOpacity>
                                    {e.isPaid === false ? (
                                        <TouchableOpacity
                                            style={styles.payButton}
                                            onPress={() => onPay(e._id.slice(0, 9))}
                                        >
                                            <Text style={{ fontWeight: '500', color: '#fff', fontSize: 12 }}>Thanh toán</Text>
                                        </TouchableOpacity>
                                    ) : (
                                        <Text style={{ fontWeight: '500', color: '#319c57', fontSize: 12, marginLeft: 10 }}>Đã thanh toán</Text>
                                    )
                                    }
                                    <PaymentModal bottomSheetRef={bottomSheetRef} data={chooseBooking} />
                                </View>
                            </View>
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default YourBooking

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDF1F9',
        flex: 1
    },
    items: {
        marginVertical: 10,
        marginHorizontal: 15,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,
        elevation: 4,
    },
    room: {
        backgroundColor: '#f29c00',
        borderRadius: 5,
        marginLeft: 5
    },
    roomName: {
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'uppercase',
        marginLeft: 5
    },
    cancelButton: {
        width: 80,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5
    },
    payButton: {
        marginLeft: 10,
        width: 80,
        backgroundColor: '#319c57',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: '#666',
        borderRadius: 5
    },
    dashedLine: {
        height: 1,
        width: '100%',
        borderWidth: 1,
        borderColor: '#dadada',
        borderStyle: 'dashed'
    },
    price: {
        fontSize: 20,
        color: '#000',
        fontWeight: '500'
    }

})