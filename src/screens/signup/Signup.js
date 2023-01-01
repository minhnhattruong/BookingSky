import {
    View,
    Alert,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    Image,
    Text,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
    Button,
    Pressable,
} from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';


export default function Register({ navigation }) {
    const [Ho, setHo] = React.useState("");
    const [TenDem, setTenDem] = React.useState("");
    const [Date, setDate] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Phone, setPhone] = React.useState("");
    const [Mk, setMk] = React.useState("");
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={styles.backButton}>
                    <Ionicons name='arrow-back-outline' size={40} color={'white'} />
                </TouchableOpacity>
                <View style={styles.Title}>
                    <Text style={{ fontSize: 19, color: 'white', textAlign: 'center' }}>
                        Đăng ký thành viên
                    </Text>
                </View>

                <View style={styles.maincontent}>
                    <View style={styles.box1}>
                        <Text style={{ fontSize: 15, color: '#000000', fontWeight: '500' }}>
                            Họ và Tên *
                        </Text>
                    </View>
                    <View style={styles.box2}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setHo}
                            value={Ho}
                            placeholder="Họ"
                        />
                        <TextInput
                            style={styles.input}
                            onChangeText={setTenDem}
                            value={TenDem}
                            placeholder="Tên và đệm"
                        />
                    </View>
                    <View style={styles.box3}>
                        <Text style={{ fontSize: 15, color: '#000000', fontWeight: '500' }}>
                            Ngày sinh *
                        </Text>
                    </View>
                    <View style={styles.box4}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setDate}
                            value={Date}
                            placeholder="DD/MM/YYYY"
                        />
                    </View>
                    <View style={styles.box5}>
                        <Text style={{ fontSize: 15, color: '#000000', fontWeight: '500' }}>
                            Email
                        </Text>
                    </View>
                    <View style={styles.box6}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={Email}
                            placeholder="vveco@gmail.com"
                        />
                    </View>
                    <View style={styles.box7}>
                        <Text style={{ fontSize: 15, color: '#000000', fontWeight: '500' }}>
                            Điện Thoại*
                        </Text>
                    </View>
                    <View style={styles.box8}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPhone}
                            value={Phone}
                            placeholder="(+84)"
                        />
                    </View>
                    <View style={styles.box9}>
                        <Text style={{ fontSize: 16, color: '#000000', fontWeight: '500' }}>
                            Mật khẩu
                        </Text>
                    </View>
                    <View style={styles.box10}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setMk}
                            value={Mk}
                            placeholder="Nhập từ 6 kí tự trở lên"
                        />

                    </View>
                    <TouchableOpacity>
                        <Ionicons style={styles.Logoeyes} name='eye-off-outline' size={20} color={'#878787'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.logins} onPress={() => navigation.navigate('Verification')}>
                        <Text style={{ fontSize: 15, color: 'white' }}>
                            Đăng ký</Text>
                    </TouchableOpacity>

                    <View style={styles.option}>
                        <View style={{ width: 50, height: 1, backgroundColor: '#D9D9D9', marginRight: 10 }}></View>
                        <Text style={{ fontSize: 12, color: '#878787' }}>
                            Hoặc đăng ký với</Text>
                        <View style={{ width: 50, height: 1, backgroundColor: '#D9D9D9', marginLeft: 10 }}></View>
                    </View>

                    <View style={styles.Logo}>
                        <TouchableOpacity>
                            <Image style={{ width: '20%', paddingVertical: 22, paddingHorizontal: 22, height: 30, marginTop: 3 }}
                                source={require('../../assets/image/gg2.png')}>
                            </Image>
                        </TouchableOpacity>
                        <FontAwesome name='circle' size={15} color={'#D9D9D9'} />
                        <TouchableOpacity>
                            <FontAwesome name='facebook-square' size={50} color={'#3C5A99'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>

    )
}
const CONTENT_WIDTH = WINDOW_WIDTH * 0.9
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3C5A99',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Title: {
        top: 25,
        position: 'absolute',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
    },
    maincontent: {
        width: CONTENT_WIDTH,
        backgroundColor: '#fff',
        paddingVertical: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,


    },
    box1: {
        marginRight: 220,
    },
    box2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        marginRight: 100,


    },
    box3: {
        marginRight: 220,
    },
    box4: {
        marginRight: 200,

    },
    box5: {
        marginRight: 250,
    },
    box6: {
        marginRight: 170,

    },
    box7: {
        marginRight: 210,

    },
    box8: {
        marginRight: 250,

        color: '#fff'
    },
    box9: {
        marginRight: 220,
    },
    box10: {
        marginRight: 150,
        flexDirection: 'row',

    },
    logins: {
        paddingVertical: 15,
        paddingHorizontal: 100,
        backgroundColor: "#F70202",

        borderRadius: 20,
    },

    option: {
        height: 40,
        margin: 12,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

    },
    Logo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 200,
    },
    Logoeyes: {
        marginTop: -35,
        marginLeft: 250,
    },
})