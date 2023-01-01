import {
    View,
    StyleSheet,
    TextInput,
    Text,
    TouchableOpacity,

} from 'react-native';
import React, { useState } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';
export default function Verification({ navigation }) {
    const [Mxt, setMxt] = React.useState("");

    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => navigation.navigate('Signup')}
                style={styles.backButton}>
                <Ionicons name='arrow-back-outline' size={40} color={'white'} />
            </TouchableOpacity>

            <View style={styles.Title}>
                <Text style={{ fontSize: 16, color: 'white' }}> Xác thực </Text>
            </View>

            <View style={styles.maincontent}>
                <View style={styles.circle}>
                    <FontAwesome name='circle' size={15} color={'#3C5A99'} />
                    <FontAwesome name='circle' size={15} color={'#3C5A99'} />
                    <FontAwesome name='circle' size={15} color={'#3C5A99'} />
                </View>
                <Text style={{ fontSize: 16, color: '#000000', marginTop: 80, textAlign: 'center', width: CONTENT_WIDTH * 0.9 }}>
                    Mã xác thực đã được gửi đến số điện thoại của bạn!
                    Vui lòng nhập mã xác thực để tiếp tục
                </Text>
                <View style={styles.VerificationCodes}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setMxt}
                        value={Mxt}
                        placeholder="Mã xác thực"
                    />
                </View>
                <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('Successful')}>
                    <Text style={{ color: 'white', }}>Tiếp tục</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.text2}>
                    <Text style={{ color: '#2E89FF', textAlign: 'center' }}>
                        Gửi lại mã xác thực?
                    </Text>
                </TouchableOpacity>
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
        paddingVertical: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,


    },
    circle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 100,
    },
    VerificationCodes: {
        marginLeft: 30,
        width: CONTENT_WIDTH * 0.75,
        borderBottomWidth: 0.3,
        margin: 30,
    },
    input: {
        fontSize: 14,
        marginRight: 100,
    },
    continueBtn: {
        backgroundColor: "#F70202",
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: CONTENT_WIDTH * 0.75
    },
    text2: {
        marginTop: 30
    },

})