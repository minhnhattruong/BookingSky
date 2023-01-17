import {
    View,
    Alert,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { register } from '../../api/apiLogin';


export default function Register({ navigation }) {
    const [fullName, setFullName] = useState(new String)
    const [email, setEmail] = useState(new String)
    const [phone, setPhone] = useState(new String)
    const [identifyCard, setIdentifyCard] = useState(new String)
    const [nation, setNation] = useState(new String)
    const [password, setPassword] = useState(new String)
    const [password2, setPassword2] = useState(new String)
    const [btnDisable, setBtnDisable] = useState()
    const [err, setErr] = useState()

    useEffect(() => {
        if (fullName.length > 0
            && email.length > 0
            && phone.length > 0
            && password2.length > 0
            && password == password2) {
            setBtnDisable(false)
        } else {
            setBtnDisable(true)
        }
    }, [fullName, email, phone, password2, password])


    const onRegister = () => {
        register({
            name: fullName,
            email: email,
            password: password,
            phone: phone,
            identifyCard: identifyCard,
            nation: nation
        }).then(rep => {
            setErr(false)
            navigation.navigate('SignupSuccess', {
                name: fullName
            })
        }).catch(e => {
            console.log(e.status);
            setErr(true)
        })
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={styles.backButton}>
                        <Ionicons name='arrow-back-outline' size={30} color={'white'} />
                    </TouchableOpacity>
                    <Text style={{ color: '#fff', fontWeight: '500', fontSize: 18 }}>Đăng ký tài khoản</Text>
                </View>
                <View style={{ height: 60 }} />
                <ScrollView
                    contentContainerStyle={{ justifyContent: 'center', height: '100%' }}
                    style={{ width: '100%', paddingHorizontal: 30, }}
                >
                    <View style={styles.mainContent}>
                        <Text style={styles.inputTitle}>Họ và tên <Text style={{ color: '#ff0000' }}>(*)</Text></Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setFullName}
                            placeholder="Họ và tên"
                        />
                        <Text style={styles.inputTitle}>Email <Text style={{ color: '#ff0000' }}>(*)</Text></Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            placeholder="Email"
                        />
                        <Text style={styles.inputTitle}>Điện thoại <Text style={{ color: '#ff0000' }}>(*)</Text></Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPhone}
                            placeholder="Số điện thoại"
                        />
                        <Text style={styles.inputTitle}>CMND</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setIdentifyCard}
                            placeholder="CMND/ Căn cước công dân"
                        />
                        <Text style={styles.inputTitle}>Quốc tịch</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNation}
                            placeholder="Quốc tịch"
                        />
                        <Text style={styles.inputTitle}>Nhập lại mật khẩu <Text style={{ color: '#ff0000' }}>(*)</Text></Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPassword}
                            placeholder="Mật khẩu"
                            secureTextEntry={true}
                        />
                        <Text style={styles.inputTitle}>Nhập lại mật khẩu <Text style={{ color: '#ff0000' }}>(*)</Text></Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setPassword2}
                            placeholder="Mật khẩu"
                            secureTextEntry={true}
                        />
                        {btnDisable &&
                            <Text style={styles.alert}>Vui lòng điền đủ các trường thông tin bắt buôc <Text style={{ color: '#ff0000' }}>(*)</Text></Text>
                        }
                        <TouchableOpacity
                            style={[styles.loginBtn, btnDisable ? { opacity: 0.5 } : { marginTop: 30 }]}
                            disabled={btnDisable ? true : false}
                            onPress={onRegister}
                        >
                            <Text style={{ color: '#fff', fontWeight: '500' }}>Đăng ký</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3C5A99',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        position: 'absolute',
        top: 0,
        zIndex: 1000,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#3C5A99',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 3,
    },
    backButton: {
        position: 'absolute',
        zIndex: 1000,
        left: 20,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainContent: {
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: 35,
        paddingHorizontal: 20,
        borderRadius: 40,
    },
    input: {
        height: 40,
        borderWidth: 0.5,
        borderColor: '#dadada',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    inputTitle: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        fontWeight: '500',
    },
    alert: {
        fontSize: 12,
        fontStyle: 'italic',
        marginTop: 20,
        marginBottom: 10,
    },
    loginBtn: {
        height: 40,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#ff0000',
        alignItems: 'center',
    }
})