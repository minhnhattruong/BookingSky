import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../component/headers/Header'
import { changePassword } from '../../api/apiUser'
import { useSelector } from 'react-redux'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function ChangePass({ navigation }) {
    const userId = useSelector(store => store.auth.info.idUser);
    const [oldPass, setOldPass] = useState(new String)
    const [newPass, setNewPass] = useState(new String)
    const [newPass2nd, setNewPass2nd] = useState(new String)
    const [btnDisable, setBtnDisable] = useState()
    const [wrongPass, setWrongPass] = useState()
    const [openEye, setOpenEye] = useState(false)

    useEffect(() => {
        if (oldPass.length > 0
            && newPass.length > 0
            && newPass2nd.length > 0
            && newPass == newPass2nd) {
            setBtnDisable(false)
        } else {
            setBtnDisable(true)
        }
    }, [oldPass, newPass, newPass2nd])


    const onHandle = () => {
        updatePassword()
    }

    const updatePassword = () => {
        changePassword(userId, {
            password: oldPass,
            newPass: newPass
        }).then(rep => {
            if (newPass == newPass2nd) {
                if (rep.data.status == true) {
                    setWrongPass(false)
                    navigation.goBack()
                } else {
                    setWrongPass(true)
                }
            }
        }).catch(e => {
            console.log(e)
        })
    }

    const onOpenEye = (id) => {
        setOpenEye(id)
    }

    return (
        <View style={styles.container}>
            <Header title='Thay đổi mật khẩu' navigation={navigation} />
            <View style={{ height: 60 }} />
            <ScrollView>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    marginLeft: 15,
                    marginTop: 20,
                    paddingBottom: 10,
                    color: '#000'
                }}>Thay đổi mật khẩu</Text>
                <Text style={{ marginHorizontal: 30, color: '#3C5A99' }}>Vui lòng nhập mật khẩu cũ và mật khẩu muốn thay đổi !</Text>
                <View style={styles.input}>
                    <Text style={styles.inputTitle}>Mật khẩu cũ</Text>
                    <View style={styles.inputItem}>
                        <TextInput
                            style={{ paddingVertical: 5, flex: 6 }}
                            placeholder='Mật khẩu cũ'
                            value={oldPass}
                            secureTextEntry={openEye == 1 ? false : true}
                            onChangeText={setOldPass}
                        />
                        <TouchableOpacity
                            style={{ flex: 1, alignItems: 'center' }}
                            onPressIn={() => onOpenEye(1)}
                            onPressOut={() => onOpenEye(false)}
                        >
                            <AntDesign name='eyeo' size={18} color={'#000'} />
                        </TouchableOpacity>
                    </View>
                    {wrongPass && <Text style={{ color: '#ff0000', marginTop: 5 }}>Mật khẩu cũ không chính xác !</Text>}
                    <Text style={styles.inputTitle}>Mật khẩu mới</Text>
                    <View style={styles.inputItem}>
                        <TextInput
                            placeholder='Mật khẩu mới'
                            style={{ paddingVertical: 5, flex: 6 }}
                            value={newPass}
                            secureTextEntry={openEye == 2 ? false : true}
                            onChangeText={setNewPass}
                        />
                        <TouchableOpacity
                            style={{ flex: 1, alignItems: 'center' }}
                            onPressIn={() => onOpenEye(2)}
                            onPressOut={() => onOpenEye(false)}
                        >
                            <AntDesign name='eyeo' size={18} color={'#000'} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.inputTitle}>Nhập lại mật khẩu mới</Text>
                    <View style={styles.inputItem}>
                        <TextInput
                            placeholder='Nhập lại mật khẩu mới'
                            style={{ paddingVertical: 5, flex: 6 }}
                            value={newPass2nd}
                            secureTextEntry={openEye == 3 ? false : true}
                            onChangeText={setNewPass2nd}
                        />
                        <TouchableOpacity
                            style={{ flex: 1, alignItems: 'center' }}
                            onPressIn={() => onOpenEye(3)}
                            onPressOut={() => onOpenEye(false)}
                        >
                            <AntDesign name='eyeo' size={18} color={'#000'} />
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={[styles.button, btnDisable && { opacity: 0.5 }]}
                    disabled={btnDisable ? true : false}
                    onPress={() => onHandle()} >
                    <Text style={{ fontSize: 16, color: '#fff', marginLeft: 5 }}>Đổi mật khẩu</Text>
                </TouchableOpacity>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF1F9'
    },
    input: {
        marginHorizontal: 30,
    },
    inputTitle: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 12,
        fontWeight: '500',
    },
    inputItem: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3C5A99',
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: '#3C5A99',
        marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 30,
        borderRadius: 15,
    }
})