import { StyleSheet, Text, View, Image } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'

export default function ListCheckingTicket(props) {
    DATA = props.data

    return (
        <View style={styles.ticketList}>
            <Text style={{ color: '#000', fontSize: 16, fontWeight: '500' }}>
                Thông tin vé đặt
            </Text>
            {
                DATA.map((e, i) => (
                    <View key={i} style={styles.ticketItem}>
                        <View style={styles.ticketQuantity}>
                            <Text style={{ color: '#2E89FF', fontSize: 16 }}>
                                {e.quantity}x
                            </Text>
                        </View>
                        <View style={styles.ticketInfo}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    style={styles.logo}
                                    source={require('../../assets/image/logoVietnamAirline.png')}
                                />

                                <View style={styles.flight}>
                                    <View style={styles.placeInfo}>
                                        <MaterialCommunityIcons name="airplane-takeoff" size={18} color={'#686868'} />
                                        <Text style={{ color: '#000' }}>{e.departLocation}</Text>
                                        <Text style={{ fontSize: 10 }}>{e.departTime}</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <MaterialCommunityIcons name="circle-medium" size={16} />
                                            <View
                                                style={{
                                                    borderWidth: 1,
                                                    width: '45%',
                                                    borderColor: '#fff',
                                                    borderBottomColor: '#BBBBBB',
                                                    alignItems: 'center',
                                                }}
                                            />
                                            <MaterialCommunityIcons name="circle-medium" size={16} />
                                        </View>
                                    </View>

                                    <View style={styles.placeInfo}>
                                        <MaterialCommunityIcons name="airplane-landing" size={18} color={'#686868'}
                                        />
                                        <Text style={{ color: '#000', }}>{e.arriveLocation}</Text>
                                        <Text style={{ fontSize: 10 }}>{e.arriveTime}</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.dashedLine} />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={styles.seatName}>{e.seat}</Text>
                                        <View style={styles.briefcase}>
                                            <MaterialCommunityIcons name="briefcase-outline" color="#fff" size={14} />
                                        </View>
                                    </View>
                                    <Text style={styles.date}>
                                        {e.date}
                                    </Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'flex-end',
                                        marginRight: 5
                                    }}>
                                    <Text style={{ color: '#000' }}>VNĐ</Text>
                                    <Text
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                        style={styles.price}>
                                        {e.price}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    ticketList: {
        marginHorizontal: 15,
        marginVertical: 10,
    },
    padding: {
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    ticketItem: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 140,
        width: '100%',
        marginTop: 15,
        flexDirection: 'row',
    },
    placeInfo: {
        alignItems: 'center'
    },
    flight: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    ticketQuantity: {
        backgroundColor: '#C5DEFF',
        width: '15%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ticketInfo: {
        marginHorizontal: 10,
        marginVertical: 10,
        width: '80%',
    },
    dashedLine: {
        borderWidth: 0.6,
        borderStyle: 'dashed',
        borderColor: '#aaaaaa',
        borderTopColor: '#aaaaaa',
        marginVertical: 10,
    },
    seatName: {
        fontWeight: '500',
        fontSize: 15,
    },
    briefcase: {
        backgroundColor: '#F6C000',
        width: 30,
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 10,
    },
    date: {
        marginTop: 5,
        color: '#000',
    },
    price: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    logo: {
        width: 70,
        height: 50,
        marginRight: 10,
    },
})