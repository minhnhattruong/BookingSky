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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
import { matrixVecMul3 } from 'react-native-redash';
export default function Successful({ navigation }) {
    return (
        <View style={styles.container}>


            <View style={styles.maincontent}>
                <Ionicons style={{ marginTop: -50 }} name='checkmark-circle' size={100} color={'#53CF76'} />


                <Text style={{ marginTop: 30, fontSize: 30, color: 'black', textAlign: 'center', fontWeight: 'bold' }}>
                    Xin chào, Minh !
                </Text>



                <Text style={{ marginTop: 30, width: CONTENT_WIDTH * 0.9, color: '#666666' }}>
                    Tài khoản của bạn đã được đăng ký thành công. Chúc các bạn có những trải nghiệm tuyệt vời nhất trên ứng dụng của chúng tôi !                    </Text>


                <View style={styles.continue}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} >
                        <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>
                            Xong</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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

    maincontent: {
        width: CONTENT_WIDTH,
        backgroundColor: '#fff',
        paddingVertical: 130,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },



    continue: {
        backgroundColor: "#F70202",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: CONTENT_WIDTH * 0.75,
        marginTop: 60,

    },
})