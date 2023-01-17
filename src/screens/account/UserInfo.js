import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState, useCallback, useMemo, useRef } from 'react'
import Header from '../../component/headers/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux';
import { WINDOW_HEIGHT } from '@gorhom/bottom-sheet';

const HEIGHT = Dimensions.get('window').height

export default function UserInfo({ navigation }) {
    const userName = useSelector(store => store.auth.info.name);
    const userEmail = useSelector(store => store.auth.info.email);
    const userPhone = useSelector(store => store.auth.info.phone);
    const userNation = useSelector(store => store.auth.info.nation);
    const userIdentifyCard = useSelector(store => store.auth.info.identifyCard);

    const [nation, setNation] = useState(userNation)
    const [identifyCard, setIdentifyCard] = useState(userIdentifyCard)
    const [phone, setPhone] = useState(userPhone)

    return (
        <View style={styles.container}>
            <Header title='Hồ sơ của tôi' navigation={navigation} />
            <View style={{ height: 60 }} />
            <ScrollView>
                <View style={styles.userInfo}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        marginLeft: 15,
                        marginVertical: 10,
                        color: '#000'
                    }}>Thông tin cá nhân</Text>
                    <View style={styles.items}>
                        <Text style={styles.placeHolders}>Họ và tên</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.input}>{userName}</Text>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <Text style={styles.placeHolders}>Giấy tờ tùy thân</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setIdentifyCard}
                                value={identifyCard}
                            />
                            <MaterialCommunityIcons name='pencil-box-outline' size={16} color="#699BF7" />
                        </View>
                    </View>
                    <View style={[styles.items, { borderBottomColor: '#fff' }]}>
                        <Text style={styles.placeHolders}>Quốc tịch</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setNation}
                                value={nation}
                            />
                            <MaterialCommunityIcons name='pencil-box-outline' size={16} color="#699BF7" />
                        </View>
                    </View>
                </View>
                <View style={styles.contactInfo}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: '500',
                        marginLeft: 15,
                        marginVertical: 10,
                        color: '#000'
                    }}>Thông tin liên hệ</Text>
                    <View style={styles.items}>
                        <Text style={styles.placeHolders}>Điện thoại</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput
                                style={styles.input}
                                onChangeText={setPhone}
                                value={phone}
                                keyboardType='numeric'
                            />
                            <MaterialCommunityIcons name='pencil-box-outline' size={16} color="#699BF7" />
                        </View>
                    </View>
                    <View style={[styles.items, { borderBottomColor: '#fff' }]}>
                        <Text style={styles.placeHolders}>Email</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.input}>{userEmail}</Text>
                            <MaterialCommunityIcons name='pencil-box-outline' size={16} color="#699BF7" />
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.goBack()}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500' }}>Xong</Text>
                </TouchableOpacity>
            </ScrollView>
        </View >
    )
}

const SHEET_HEIGHT = WINDOW_HEIGHT * 0.3
const headerHeight = HEIGHT * 0.2
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF1F9'
    },
    header: {
        backgroundColor: '#fff',
        height: headerHeight,
        justifyContent: 'center',
        alignItems: 'center',
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
    avatar: {
        width: headerHeight * 0.8,
        height: headerHeight * 0.8,
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 110,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 4,
        zIndex: 2,
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
    placeHolders: {
        fontSize: 14,
        color: '#888'
    },
    input: {
        marginRight: 5
    },
    button: {
        backgroundColor: '#3C5A99',
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: WINDOW_HEIGHT * 0.065,
        marginTop: 30,
        marginBottom: 40,
        borderRadius: 15
    },
    btnCamera: {
        position: 'absolute',
        bottom: -5,
        right: 8,
        backgroundColor: '#fff',
        padding: 2,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 4,
        zIndex: 2,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    btmSheetItem: {
        height: SHEET_HEIGHT * 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    }
})