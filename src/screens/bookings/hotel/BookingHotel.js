import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, FlatList, ScrollView, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ListHotel from '../../../component/hotelItem/ListHotel'
import { useRef } from 'react'
import Animated from 'react-native-reanimated'
import HeaderAnimation from '../../../component/headers/HeaderAnimation'
import { buttonStyles, defaultStyles } from '../../../style/style'
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet'

const LOCALHOTEL = [
    {
        id: 1,
        name: 'GTC Hotel I',
        img: 'https://www.tripsavvy.com/thmb/-aBLb26VQL0Fnt3GduH0KGqOGQw=/1350x759/smart/filters:no_upscale()/EWOW-1600x900-587953e95f9b584db3825b8a.jpg',
        price: '2.500.000đ',
        city: 'Hà Nội'
    },
    {
        id: 2,
        name: 'Imperia Hotel',
        img: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/b9/db/2a/imperial-hotel-spa.jpg',
        price: '3.500.000đ',
        city: 'Hà Nội'
    },
    {
        id: 3,
        name: 'Metrople Hanoi',
        img: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21145818/3546897_XL-3.jpg',
        price: '4.500.000đ',
        city: 'Hà Nội'
    },
    {
        id: 4,
        name: 'Vinpearl Nha Trang',
        img: 'https://pix10.agoda.net/hotelImages/568/5685860/5685860_19101418000082056564.jpg?ca=9&ce=1&s=1024x768',
        price: '5.500.000đ',
        city: 'Nha Trang',
    },
    {
        id: 5,
        name: 'Mường Thanh Hạ Long',
        img: 'https://pix10.agoda.net/hotelImages/18868600/-1/3877fc23da23f6e3c183e67d9b4445b5.jpg?ce=0&s=1024x768',
        price: '6.500.000đ',
        city: 'Hạ Long'
    },
]

const FOREIGNHOTEL = [
    {
        id: 1,
        name: 'NewYork Hotel ',
        img: 'https://images.squarespace-cdn.com/content/v1/527679aee4b06f1a7db2bffd/1421684236130-8G9QXD1UG4O8YNOK6SUL/the-ludlow-room-view-from-bed-looking-out-copy-2.jpg',
        price: '2.500.000đ',
        city: 'NewYork'
    },
    {
        id: 2,
        name: 'Tokyo Hotel',
        img: 'https://www.designcurial.com/Uploads/Project/8957/images/256932/large/palace-hotel2.jpg',
        price: '3.500.000đ',
        city: 'Tokyo'
    },
    {
        id: 3,
        name: 'Bangkok Hotel',
        img: 'https://www.nz.kayak.com/rimg/himg/60/f3/2a/leonardo-2677892-parksuite_003_O-061800.jpg?width=720&height=576&crop=true',
        price: '4.500.000đ',
        city: 'Bangkok'
    },
    {
        id: 4,
        name: 'Seoul Hotel',
        img: 'https://images.trvl-media.com/hotels/19000000/18070000/18060400/18060379/725cb626.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium',
        price: '5.500.000đ',
        city: 'Seoul',
    },
    {
        id: 5,
        name: 'Beijing Hotel',
        img: 'https://www.destinasian.com/travel/wp-content/uploads/Raffles-Beijing-Personality-Suite1.jpg',
        price: '6.500.000đ',
        city: 'Beijing'
    },
]
const RECENTHOTEL = [
    {
        id: 1,
        name: 'NewYork Hotel ',
        img: 'https://images.squarespace-cdn.com/content/v1/527679aee4b06f1a7db2bffd/1421684236130-8G9QXD1UG4O8YNOK6SUL/the-ludlow-room-view-from-bed-looking-out-copy-2.jpg',
        price: '2.500.000đ',
        city: 'NewYork'
    },
    {
        id: 2,
        name: 'Imperia Hotel',
        img: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/b9/db/2a/imperial-hotel-spa.jpg',
        price: '3.500.000đ',
        city: 'Hà Nội'
    },
    {
        id: 3,
        name: 'Bangkok Hotel',
        img: 'https://www.nz.kayak.com/rimg/himg/60/f3/2a/leonardo-2677892-parksuite_003_O-061800.jpg?width=720&height=576&crop=true',
        price: '4.500.000đ',
        city: 'Bangkok'
    },
    {
        id: 4,
        name: 'Seoul Hotel',
        img: 'https://images.trvl-media.com/hotels/19000000/18070000/18060400/18060379/725cb626.jpg?impolicy=fcrop&w=670&h=385&p=1&q=medium',
        price: '5.500.000đ',
        city: 'Seoul',
    },
    {
        id: 5,
        name: 'Beijing Hotel',
        img: 'https://www.destinasian.com/travel/wp-content/uploads/Raffles-Beijing-Personality-Suite1.jpg',
        price: '6.500.000đ',
        city: 'Beijing'
    },
]



export default function BookingHotel({ navigation }) {
    const [city, setCity] = useState('')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(50000000)

    const [checkin, setCheckin] = useState(new Date())
    const [checkout, setCheckout] = useState(new Date())
    const [people, setPeople] = useState('')
    const [openCheckIn, setOpenCheckIn] = useState(false)
    const [room, setRoom] = useState(0)
    const [openCheckOut, setOpenCheckOut] = useState(false)

    const animatedValue = useRef(new Animated.Value(0)).current;


    return (
        <KeyboardAvoidingView style={defaultStyles.containers}>
            <HeaderAnimation title='Tìm khách sạn' navigation={navigation} animatedValue={animatedValue} />
            <ScrollView
                onScroll={e => {
                    animatedValue.setValue(e.nativeEvent.contentOffset.y)
                }}
                scrollEventThrottle={16}>

                <View style={{ height: 160, backgroundColor: '#3C5A99', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 70, zIndex: 1 }}>
                    <View style={styles.searchingForm}>
                        <View style={{ width: '100%', marginTop: 25 }}>
                            <Text style={{ fontSize: 12 }}>Thành phố</Text>
                            <View style={styles.inputItems}>
                                <Ionicons name='md-location-sharp' size={20} color={'#686868'} />
                                <TextInput
                                    onChangeText={setCity}
                                    value={city}
                                    style={{
                                        flex: 1,
                                        padding: 0,
                                        marginLeft: 10,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={{ width: '100%', marginTop: 25, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: '45%' }}>
                                <Text style={{ fontSize: 12 }}>Giá thấp nhất</Text>
                                <View style={{ borderWidth: 0.25, borderColor: '#666', borderRadius: 5, marginTop: 5, flexDirection: 'row' }}>
                                    <TextInput
                                        onChangeText={setMinPrice}
                                        value={minPrice}
                                        placeholder={"0 đ"}
                                        style={{
                                            flex: 1,
                                            padding: 0,
                                            marginLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                            <Text>-</Text>
                            <View style={{ width: '45%' }}>
                                <Text style={{ fontSize: 12 }}>Giá cao nhất</Text>
                                <View style={{ borderWidth: 0.25, borderColor: '#666', borderRadius: 5, marginTop: 5 }}>
                                    <TextInput
                                        onChangeText={setMaxPrice}
                                        value={maxPrice}
                                        placeholder={"50.000.000 đ"}
                                        style={{
                                            flex: 1,
                                            padding: 0,
                                            marginLeft: 10,
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                            
                        </View> */}
                        {/* <View style={{ marginTop: 15 }}>
                            <Text style={{ fontSize: 12 }}>Số người</Text>
                            <View style={styles.inputItems}>
                                <Feather name='user' size={20} color={'#686868'} />
                                <TextInput
                                    onChangeText={setPeople}
                                    value={people}

                                    keyboardType={'number-pad'}
                                    style={{
                                        flex: 1,
                                        padding: 0,
                                        marginLeft: 10,
                                        fontSize: 15,
                                    }}
                                />
                            </View>
                        </View> */}

                        {/* <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Ionicons name='bed-outline' size={20} color={'#686868'} style={{ marginRight: 5 }} />
                                <Text style={{ fontSize: 12 }}>Số phòng</Text>
                            </View>
                            <View style={{ flexDirection: 'row', width: 130, justifyContent: 'space-between', marginRight: 20 }}>
                                <TouchableOpacity
                                    style={{ width: 36, height: 26, backgroundColor: '#E8E8E8', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}
                                    onPress={() => setRoom(prev => (prev > 0 ? prev - 1 : 0))}>
                                    <AntDesign name='minus' size={15} color={'#000'} />
                                </TouchableOpacity>
                                <View style={{ height: 30 }}>
                                    <TextInput
                                        onChangeText={setRoom}
                                        value={room.toString()}

                                        keyboardType={'number-pad'}
                                        style={{ borderWidth: 0.5, borderRadius: 5, borderColor: '#E1E1E1', width: 35, height: 25, padding: 0, textAlign: 'center' }} />

                                </View>
                                <TouchableOpacity
                                    style={{ width: 36, height: 26, backgroundColor: '#E8E8E8', alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}
                                    onPress={() => setRoom(prev => (prev + 1))}>
                                    <AntDesign name='plus' size={15} color={'#000'} />
                                </TouchableOpacity>
                            </View>
                        </View> */}

                        <TouchableOpacity style={styles.searchBtn}
                            onPress={() =>
                                navigation.navigate(
                                    'HotelList',
                                    {
                                        city: city,
                                        min: minPrice,
                                        max: maxPrice

                                    })

                            }>
                            <Text style={{ color: '#fff', fontWeight: '500' }}>Tìm kiếm khách sạn</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ height: 150 }} />
                <View style={styles.localHotels}>
                    <View style={styles.title}>

                        <Text style={defaultStyles.titles}> Top khách sạn trong nước</Text>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#699BF7', marginRight: 3, fontSize: 14 }}>Xem thêm</Text>
                            <AntDesign name='right' size={13} color={'#699BF7'} />
                        </TouchableOpacity>
                    </View>

                    <ListHotel data={LOCALHOTEL} />

                </View>
                <View style={styles.foreignHotels}>
                    <View style={styles.title}>
                        <Text style={defaultStyles.titles}> Top khách sạn nước ngoài</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#699BF7', marginRight: 3, fontSize: 14 }}>Xem thêm</Text>
                            <AntDesign name='right' size={13} color={'#699BF7'} />
                        </TouchableOpacity>
                    </View>

                    <ListHotel data={FOREIGNHOTEL} />
                </View>
                <View style={styles.recentHotels}>
                    <View style={styles.title}>
                        <Text style={defaultStyles.titles}> Tìm kiếm gần đây</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#699BF7', marginRight: 3, fontSize: 14 }}>Xem thêm</Text>
                            <AntDesign name='right' size={13} color={'#699BF7'} />
                        </TouchableOpacity>
                    </View>
                    <ListHotel data={RECENTHOTEL} />

                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    )
}

const styles = StyleSheet.create({
    searchingForm: {
        marginTop: 60,
        paddingVertical: 20,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 30,
        right: 30,
        borderRadius: 40,
        paddingHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 2,

    },
    inputItems: {
        height: 30,
        borderBottomWidth: 0.25,
        borderBottomColor: '#666',
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: WINDOW_WIDTH,
        paddingHorizontal: 10
    },
    searchBtn: {
        marginTop: 15,
        backgroundColor: '#F70202',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 10,
    },
    localHotels: {
        paddingTop: 20,
    },
    foreignHotels: {
        paddingTop: 15,
    },
    recentHotels: {
        paddingTop: 15,
        paddingBottom: 20
    }
})