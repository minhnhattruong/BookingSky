import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Animated from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons'
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { getRoombyIdHotel } from '../../../api/apiHotel';
import Header from '../../../component/headers/Header';


const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default function RoomInfo({ route, navigation }) {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const { hotelId, hotelInfo } = route.params

    const [checkin, setCheckin] = useState(new Date())
    const [checkout, setCheckout] = useState(new Date())
    const [openCheckIn, setOpenCheckIn] = useState(false)
    const [openCheckOut, setOpenCheckOut] = useState(false)
    const [room, setRoom] = useState([])
    const [choosen, setChoosen] = useState(false)
    const [openShowRoom, setOpenShowRoom] = useState(false)
    const sDate = moment(checkin).format('YYYY-MM-DD')
    const eDate = moment(checkout).format('YYYY-MM-DD')

    useEffect(() => {
        hotelInfo.rooms != [] && getRoom(hotelId, sDate, eDate)
    }, [sDate, eDate])

    const getRoom = (id, startDate, endDate) => {
        getRoombyIdHotel(id, startDate, endDate).then(rep => {
            setRoom(rep.data)
        }).catch(e => {
            console.log(e)
        })
    }
    const onChooseRoom = (id) => {
        if (choosen == id) {
            setChoosen(false)
        } else {
            setChoosen(id)
        }

    }

    const onShowRoomList = (id) => {
        if (openShowRoom == id) {
            setOpenShowRoom(false)
        } else {
            setOpenShowRoom(id)
        }
    }


    return (
        <View style={styles.container}>
            <Header navigation={navigation} animatedValue={animatedValue} title={'Đặt phòng'} />
            <ScrollView style={styles.hotelRoom}
                onScroll={e => {
                    animatedValue.setValue(e.nativeEvent.contentOffset.y)
                }}
                scrollEventThrottle={16}>
                <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: '500', color: '#000' }}>Loại Phòng</Text>
                <View style={styles.datePicker}>
                    <View style={{ width: '40%' }}>
                        <TouchableOpacity onPress={() => setOpenCheckIn(true)} style={styles.inputItems}>
                            <AntDesign name='calendar' size={18} color={'#686868'} />
                            <DatePicker modal open={openCheckIn} date={checkin} mode={'date'}
                                title='Ngày nhận phòng'
                                confirmText='Chọn'
                                cancelText='Hủy'
                                locale='vi_VN'
                                onConfirm={(checkin) => {
                                    setOpenCheckIn(false)
                                    setCheckin(checkin)
                                }}
                                onCancel={() => {
                                    setOpenCheckIn(false)
                                }}
                            />
                            <Text
                                style={{
                                    padding: 2,
                                    marginLeft: 10,
                                    color: '#000',
                                    fontSize: 15
                                }}
                            >{moment(checkin).format('DD/MM/YY')}</Text>
                        </TouchableOpacity>
                    </View>
                    <Text>đến</Text>
                    <View style={{ width: '40%' }}>
                        <TouchableOpacity onPress={() => setOpenCheckOut(true)} style={styles.inputItems}>
                            <AntDesign name='calendar' size={18} color={'#686868'} />
                            <DatePicker modal open={openCheckOut} date={checkout} mode={'date'}
                                title='Ngày trả phòng'
                                confirmText='Chọn'
                                cancelText='Hủy'
                                locale='vi_VN'
                                onConfirm={(checkout) => {
                                    setOpenCheckOut(false)
                                    setCheckout(checkout)
                                }}
                                onCancel={() => {
                                    setOpenCheckOut(false)
                                }}
                            />
                            <Text
                                style={{
                                    padding: 2,
                                    marginLeft: 10,
                                    color: '#000',
                                    fontSize: 15
                                }}
                            >{moment(checkout).format('DD/MM/YY')}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.listRoom}>
                    {
                        room.map((e, i) => {
                            const roomList = e.roomNumbers
                            return (
                                <View key={i} style={styles.roomItem}>
                                    <View style={{ marginLeft: 15, justifyContent: 'center' }}>
                                        <Text style={styles.roomTitle} numberOfLines={2} ellipsizeMode={'tail'}>
                                            {e.title}
                                        </Text>
                                        <View style={{ height: 60, justifyContent: 'center' }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Ionicons name='bed-outline' size={14} color={'#616161'} />
                                                <Text style={{ fontSize: 12, marginLeft: 5 }}>{e.beds} Giường</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Ionicons name='people' size={14} color={'#616161'} />
                                                <Text style={{ fontSize: 12, marginLeft: 5 }}>Tối đa {e.maxPeople} người</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                                            <TouchableOpacity
                                                style={styles.showRoomBtn}
                                                onPress={() => onShowRoomList(e._id)}>
                                                <Text style={{ fontWeight: '500', color: '#699BF7', marginRight: 5 }}>Xem phòng trống</Text>
                                                <AntDesign name={openShowRoom == e._id ? 'up' : 'down'} size={12} color={'#699BF7'} />
                                            </TouchableOpacity>

                                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                                <Text style={{ fontSize: 18, fontWeight: '500', color: '#000' }}>{e.price}</Text>
                                                <Text style={{ marginRight: 2, marginBottom: 8, color: '#000' }}>đ</Text>
                                                <Text style={{ fontSize: 15, marginBottom: 1, color: '#000' }}>/đêm</Text>
                                            </View>
                                        </View>
                                        {openShowRoom == e._id &&
                                            <View style={styles.roomNumbers}>
                                                {roomList.map((e, i) => (
                                                    <TouchableOpacity key={i}
                                                        style={[styles.roomNumbersItem,
                                                        choosen == e._id ? { backgroundColor: 'red' } :
                                                            { borderWidth: 1, borderColor: '#dadada' }
                                                        ]}
                                                        onPress={() => onChooseRoom(e._id)}
                                                    >
                                                        <Text style={
                                                            choosen == e._id ? { color: '#fff' }
                                                                : { color: '#888' }}>
                                                            {e.number}
                                                        </Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        }
                                    </View>
                                </View>
                            )
                        })
                    }
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
    hotelRoom: {
        marginTop: 80,
        paddingTop: 20,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,
        elevation: 1

    },
    datePicker: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: '#dadada'
    },
    inputItems: {
        height: 30,
        borderWidth: 0.25,
        borderColor: '#666',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    listRoom: {
        alignItems: 'center',
        paddingHorizontal: 25
    },
    roomItem: {
        paddingVertical: 15,
        width: '100%',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#888'
    },
    roomTitle: {
        color: '#000',
        fontSize: 16,
        fontWeight: '500',
        textTransform: 'uppercase',
        width: '95%',
    },
    showRoomBtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    roomNumbers: {
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    roomNumbersItem: {
        width: 50,
        height: 30,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    }
})