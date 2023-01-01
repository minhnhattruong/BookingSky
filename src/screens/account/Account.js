import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { clearState, insFCMYtokenAPI } from '../../reducers/AuthSlice';
import { useSelector, useDispatch } from 'react-redux';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@gorhom/bottom-sheet'

export default function Account({ navigation }) {
    const dispatch = useDispatch();
    const onLogout = async () => {
        dispatch(clearState());
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerTop} />
            <View style={styles.headerBot}>
                <View>
                    <View style={styles.avatar}>
                        <Image style={{ flex: 1, borderRadius: 110, }} source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' }} />
                    </View>
                </View>
                <View style={{ width: '55%' }}>
                    <View style={styles.name}>
                        <Text style={{
                            marginRight: 5,
                            fontSize: 16,
                            ontWeight: '500',
                            color: '#000'
                        }}>Mr</Text>
                        <Text style={{
                            marginRight: 5,
                            fontSize: 17,
                            ontWeight: '500',
                            color: '#000'
                        }}>Truong Minh Nhat</Text>
                    </View>
                    <View style={styles.coins}>
                        <Text style={{ color: '#fff', fontSize: 15, marginRight: 5 }}>10000</Text>
                        <Entypo name='database' size={18} color="#fff" />
                    </View>
                </View>
            </View>
            <ScrollView>
                <View style={styles.userInfo}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        marginLeft: 15,
                        marginVertical: 10,
                        color: '#000'
                    }}>Thông tin thành viên</Text>
                    <TouchableOpacity
                        style={styles.items}
                        onPress={() => navigation.navigate('UserInfo')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.icons}>
                                <AntDesign name='user' size={20} color="#699BF7" />
                            </View>
                            <Text style={styles.titles}>Hồ sơ của tôi</Text>
                        </View>
                        <AntDesign name='right' size={18} color="#699BF7" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.items}
                        onPress={() => navigation.navigate('Payment')}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.icons}>
                                <AntDesign name='creditcard' size={18} color="#699BF7" />
                            </View>
                            <Text style={styles.titles}>Phương thức thanh toán</Text>
                        </View>
                        <AntDesign name='right' size={18} color="#699BF7" />
                    </TouchableOpacity>
                </View>
                <View style={styles.endow}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        marginLeft: 15,
                        marginVertical: 10,
                        color: '#000'
                    }}>Ưu đãi</Text>
                    <TouchableOpacity
                        style={styles.items}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.icons}>
                                <Entypo name='database' size={19} color="#699BF7" />
                            </View>
                            <Text style={styles.titles}>Xu tích lũy</Text>
                        </View>
                        <AntDesign name='right' size={18} color="#699BF7" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.items}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.icons}>
                                <MaterialCommunityIcons name='ticket-percent-outline' size={22} color="#699BF7" />
                            </View>
                            <Text style={styles.titles}>Voucher dành cho tôi</Text>
                        </View>
                        <AntDesign name='right' size={18} color="#699BF7" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={onLogout}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>Đăng xuất</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF1F9'
    },
    headerTop: {
        backgroundColor: '#3C5A99',
        height: 60,
    },
    headerBot: {
        backgroundColor: '#fff',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 4,
        zIndex: 1,
    },
    userInfo: {
        marginTop: 20
    },
    name: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    coins: {
        flexDirection: 'row',
        backgroundColor: '#FFCC4D',
        width: 100,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    avatar: {
        width: WINDOW_WIDTH * 0.3,
        height: WINDOW_WIDTH * 0.3,
        backgroundColor: '#fff',
        position: 'absolute',
        top: -80,
        padding: 5,
        left: 20,
        borderRadius: 110,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 4,
    },
    items: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        height: WINDOW_HEIGHT * 0.07,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    titles: {
        marginLeft: 5,
        fontSize: 15,
        color: '#000'
    },
    icons: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 50,
        height: WINDOW_HEIGHT * 0.065,
        backgroundColor: '#FF0000',
        marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15
    }
})