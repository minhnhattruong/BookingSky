import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    TextInput,
    Image,
} from 'react-native';
import React, { useState, useCallback } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../component/headers/Header'

const TicketHotel = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <Header title={'Chi tiết thông tin phòng'} navigation={navigation} />
            <ScrollView>
                <View style={{
                    backgroundColor: '#fff',
                    borderBottomColor: '#000',
                    borderBottomWidth: 1,
                    borderStyle: 'dashed'
                }}>
                    <View style={{ padding: 20, borderBottomColor: '#000', borderBottomWidth: 1 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={{ uri: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21145818/3546897_XL-3.jpg' }} style={{ height: 150, width: 150 }} />
                            <View style={{ marginLeft: 10, justifyContent: 'space-around' }}>
                                <Text style={{ fontWeight: 'bold', color: '#000' }}>
                                    GTC Hotel
                                </Text>
                                <Text>
                                    DELUXE ROOM
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>
                                        Số phòng:

                                    </Text>
                                    <Text style={{ fontWeight: 'bold', color: '#000' }}>
                                        2
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>
                                        Số người:

                                    </Text>
                                    <Text style={{ fontWeight: 'bold', color: '#000' }}>
                                        4
                                    </Text>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, padding: 20, borderBottomColor: '#000', borderBottomWidth: 1 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <View>
                                <Text>
                                    Nhận phòng:
                                </Text>
                                <Text>
                                    Trả phòng:
                                </Text>
                            </View>
                            <View style={{ marginLeft: 10, justifyContent: 'space-around' }}>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text>
                                        14:00 T2, 8 - 8 - 2022

                                    </Text>

                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>
                                        11:30 T4, 10 - 8 - 2022

                                    </Text>

                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, padding: 20, }}>
                        <Text>
                            Ghi chú:
                        </Text>
                    </View>

                </View>
                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', backgroundColor: '#EDF1F9' }}>
                    <AntDesign name='user' size={24} color='#999999' />
                    <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold', marginLeft: 5 }}>
                        Thông tin người đặt
                    </Text>
                </View>
                <View style={{ backgroundColor: '#fff', flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomColor: '#999', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500' }}>
                            Tên
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>
                            Mr Truong Minh Nhat
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomColor: '#999', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500' }}>
                            Ngày sinh
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>
                            03/04/2000
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomColor: '#999', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500' }}>
                            Quốc tịch
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>
                            VIỆT NAM
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomColor: '#999', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500' }}>
                            Giấy tờ tuỳ thân
                        </Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#000' }}>
                            013668428
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomColor: '#999', borderBottomWidth: 1 }}>
                        <Text style={{ fontSize: 14, fontWeight: '500' }}>
                            Mã đặt vé 44
                        </Text>
                        <Image source={{ uri: 'https://labelbarcode.vn/wp-content/uploads/2019/08/phan-mem-tra-cuu-ma-vach-5-min.png' }} style={{ width: 150, height: 50 }} />
                    </View>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ marginTop: 30, marginBottom: 30, backgroundColor: '#F6C000', justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 10 }}
                        onPress={() => navigation.navigate('FeedBack')}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold', paddingHorizontal: 40, fontSize: 18 }}>
                            Đánh giá
                        </Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}

export default TicketHotel

const styles = StyleSheet.create({})