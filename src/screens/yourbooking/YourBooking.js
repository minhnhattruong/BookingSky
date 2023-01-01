import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';

const YourBooking = ({ navigation }) => {
    const data = [1, 2, 3, 4]
    return (
        <View style={{ flex: 1, backgroundColor: '#EDF1F9' }}>
            <View style={styles.header}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>Ưa thích</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView style={{ marginLeft: 10, marginRight: 10 }}>

                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Phòng đã đặt</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('TicketHotel')} style={{
                        backgroundColor: '#fff', shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 1,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 1.00,
                        elevation: 4,
                        display: 'flex',
                        flexDirection: 'row',

                    }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View >
                                <Image source={{ uri: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21145818/3546897_XL-3.jpg' }} style={{ width: 130, height: 130 }} />
                            </View>

                            <View style={{ flexDirection: 'row', flex: 1, marginLeft: 10, marginRight: 10, paddingVertical: 5 }}>
                                <View style={{ flex: 1, }}>
                                    <Text style={{ fontWeight: 'bold', color: '#000' }}>
                                        GTC Hotel
                                    </Text>
                                    <Text>
                                        DELUXE ROOM
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                                        <View style={{ flexDirection: 'column', height: '100%', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                            <Entypo name='dot-single' size={18} color='#000' style={{ padding: 0, }} />
                                            <View style={{ borderRightWidth: 1, borderRightColor: '#000', borderStyle: 'dashed', flex: 1, }}></View>
                                            <Entypo name='dot-single' size={18} color='#000' />
                                        </View>
                                        <View style={{ flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingVertical: 5 }}>
                                            <Text style={{ fontSize: 12 }}>11:30 T4, 10 - 8 - 2022</Text>
                                            <Text style={{ fontSize: 12 }}>14:00 T2, 8 - 8 - 2022</Text>
                                        </View>
                                    </View>
                                    <Text>
                                        4 người
                                    </Text>
                                </View>
                                <View style={{ justifyContent: 'space-between', alignItems: 'flex-end', }}>
                                    <Text style={{ color: '#000', fontWeight: 'bold' }}>
                                        X2
                                    </Text>
                                    <Text style={{ color: '#53CF76' }}>
                                        Đã đặt
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: 10, marginBottom: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#000' }}>Phòng đã hoàn thành</Text>
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        {data.map((e, i) => (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate('TicketHotel')} style={{
                                backgroundColor: '#fff', shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 1.00,
                                elevation: 4,
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 10

                            }}>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <View >
                                        <Image source={{ uri: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21145818/3546897_XL-3.jpg' }} style={{ width: 130, height: 130 }} />
                                    </View>

                                    <View style={{ flexDirection: 'row', flex: 1, marginLeft: 10, marginRight: 10, paddingVertical: 5 }}>
                                        <View style={{ flex: 1, }}>
                                            <Text style={{ fontWeight: 'bold', color: '#000' }}>
                                                GTC Hotel
                                            </Text>
                                            <Text>
                                                DELUXE ROOM
                                            </Text>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, }}>
                                                <View style={{ flexDirection: 'column', height: '100%', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
                                                    <Entypo name='dot-single' size={18} color='#000' style={{ padding: 0, }} />
                                                    <View style={{ borderRightWidth: 1, borderRightColor: '#000', borderStyle: 'dashed', flex: 1, }}></View>
                                                    <Entypo name='dot-single' size={18} color='#000' />
                                                </View>
                                                <View style={{ flexDirection: 'column', height: '100%', justifyContent: 'space-between', paddingVertical: 5 }}>
                                                    <Text style={{ fontSize: 12 }}>11:30 T4, 10 - 8 - 2022</Text>
                                                    <Text style={{ fontSize: 12 }}>14:00 T2, 8 - 8 - 2022</Text>
                                                </View>
                                            </View>
                                            <Text>
                                                4 người
                                            </Text>
                                        </View>
                                        <View style={{ justifyContent: 'space-between', alignItems: 'flex-end', }}>
                                            <Text style={{ color: '#000', fontWeight: 'bold' }}>
                                                X2
                                            </Text>
                                            <Text style={{ color: '#FF6B00' }}>
                                                Đã hoàn thành
                                            </Text>
                                        </View>
                                    </View>

                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>


                </ScrollView>

            </View>
        </View>
    )
}

export default YourBooking

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        backgroundColor: '#3C5A99',
        justifyContent: 'center',
        alignItems: 'center',
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
    tabBar: {
        backgroundColor: '#fff',
        color: '#3C5A99',
        padding: 5,
    },

})