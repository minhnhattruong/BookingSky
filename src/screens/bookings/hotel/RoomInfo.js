import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector, useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons'
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { getRoombyIdHotel } from '../../../api/apiHotel';
import { bookingRoom } from '../../../api/apiBooking';
import Header from '../../../component/headers/Header';
import { FormattedCurrency } from 'react-native-globalize';



export default function RoomInfo({ route, navigation }) {
    const userEmail = useSelector(store => store.auth.info.email);
    const { hotelId, hotelInfo } = route.params
    const [checkin, setCheckin] = useState(new Date())
    const [checkout, setCheckout] = useState(new Date())
    const [openCheckIn, setOpenCheckIn] = useState(false)
    const [openCheckOut, setOpenCheckOut] = useState(false)
    const [room, setRoom] = useState([])
    const [choosen, setChoosen] = useState([])
    const [choosenRoomKind, setChoosenRoomKind] = useState({})
    const [openShowRoom, setOpenShowRoom] = useState([])
    const sDate = moment(checkin).format('YYYY-MM-DD')
    const eDate = moment(checkout).format('YYYY-MM-DD')

    let difference = checkout.getTime() - checkin.getTime()
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));


    useEffect(() => {
        if (sDate !== eDate) {
            hotelInfo.rooms != [] && getRoom(hotelId, sDate, eDate)
        }
    }, [hotelId, sDate, eDate])

    console.log(hotelId);

    const getRoom = (id, startDate, endDate) => {
        getRoombyIdHotel(id, startDate, endDate).then(rep => {
            setRoom(rep.data)
        }).catch(e => {
            console.log(e)
        })
    }

    const onChooseRoom = (id, num) => {
        if (choosen.some(item => item.id === id) === false) {
            setChoosen([...choosen, {
                id: id,
                number: num,
            }])
        } else {
            setChoosen(choosen.filter(item => item.id !== id))
        }

    }

    const onShowRoomList = (id) => {
        if (openShowRoom.includes(id) == false) {
            setOpenShowRoom([...openShowRoom, id])
        } else {
            setOpenShowRoom(openShowRoom.filter(item => item !== id))
        }
    }

    console.log('hotelInfo', hotelInfo);

    const onBooking = () => {
        choosen.map((e, i) => {
            bookingHotel(e.id, {
                hotelId: hotelInfo._id,
                title: hotelInfo.title,
                roomNum: e.number,
                photos: hotelInfo.photos[0],
                email: userEmail,
                address: hotelInfo.address,
                dates: [sDate, eDate],
                totalPrice: totalDays * hotelInfo.cheapestPrice
            })
        })
        navigation.navigate('BookingSuccess')
    }

    const bookingHotel = (id, body) => {
        bookingRoom(id, body).then(rep => {
            console.log(rep);
        }).catch(e => {
            console.log(e)
        })
    }

    console.log(userEmail);

    return (
        <View style={styles.container}>
            <Header navigation={navigation} title={`Đặt phòng - ${hotelInfo.title}`} />
            <View style={{ height: 60 }} />
            <View style={styles.hotelRoom}>
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

                <ScrollView contentContainerStyle={styles.listRoom}>
                    {
                        room.map((e, i) => {
                            const roomList = e.roomNumbers
                            return (
                                <View key={i} style={styles.roomItem}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1, height: 120 }}>
                                            <Image style={{ height: '100%', width: '100%' }} source={e.photos.length > 0 ? { uri: `http://103.163.216.51:8000/${e.photos[0]}` }
                                                :
                                                { uri: 'https://img1.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg' }} />
                                        </View>
                                        <View style={{ flex: 2, padding: 10 }}>
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
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
                                        <TouchableOpacity
                                            style={styles.showRoomBtn}
                                            onPress={() => { onShowRoomList(e._id) }
                                            }>
                                            <Text style={{ fontWeight: '500', color: '#699BF7', marginRight: 5 }}>Xem phòng trống</Text>
                                            <AntDesign name={openShowRoom == e._id ? 'up' : 'down'} size={12} color={'#699BF7'} />
                                        </TouchableOpacity>

                                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                            <FormattedCurrency style={{ fontSize: 18, fontWeight: '500', color: '#000' }} value={Number(e.price)} />
                                            <Text style={{ fontSize: 15, marginBottom: 1, color: '#000' }}>/đêm</Text>
                                        </View>
                                    </View>
                                    {openShowRoom.includes(e._id) &&
                                        <View style={styles.roomNumbers}>
                                            {roomList.map((e, i) => (
                                                <TouchableOpacity key={i}
                                                    style={[styles.roomNumbersItem,
                                                    choosen.some(item => item.id === e._id) == true ? { backgroundColor: 'red' } :
                                                        { borderWidth: 1, borderColor: '#dadada' }
                                                    ]}
                                                    onPress={() => onChooseRoom(e._id, e.number)}
                                                >
                                                    <Text style={
                                                        choosen.some(item => item.id === e._id) == true ? { color: '#fff' }
                                                            : { color: '#888' }}>
                                                        {e.number}
                                                    </Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    }
                                </View>
                            )
                        })
                    }
                </ScrollView>

            </View >
            <View style={{ width: '100%', position: 'absolute', bottom: 30 }}>
                <TouchableOpacity
                    style={[styles.bookingBtn, choosen.length > 0 && { opacity: 1 }]}
                    disabled={choosen.length > 0 ? false : true}
                    onPress={onBooking}
                >
                    <Text style={{ fontWeight: '500', color: '#fff', fontSize: 16 }}>Đặt phòng ngay</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF1F9'
    },
    hotelRoom: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
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
        paddingHorizontal: 25,
        paddingBottom: 100
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
    },
    bookingBtn: {
        backgroundColor: '#ff0000',
        marginHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 15,
        alignItems: 'center',
        opacity: 0.6,
    },
    footer: {
        backgroundColor: '#fff',
        height: 120,
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