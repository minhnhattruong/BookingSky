import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../component/headers/Header'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { WINDOW_HEIGHT } from '@gorhom/bottom-sheet'

const METHODS = [
    {
        id: 1,
        name: 'Thẻ tín dụng, ghi nợ ( VISA, MasterCard )'
    },
    {
        id: 2,
        name: 'MoMo E-Wallet'
    },
]
export default function AddPayment({ navigation, route }) {
    const [tick, setTick] = useState(METHODS[0].id)
    const [number, setNumber] = useState()
    const [cvv, setCVV] = useState()
    const [validDate, setValidDate] = useState()

    const handlePress = (id) => {
        setTick(id)
    };

    const Item = ({ name, id }) => (
        <TouchableOpacity
            style={styles.items}
            onPress={() => {
                handlePress(id);
            }}>
            <Text style={{ color: '#000', width: 280 }}>{name}</Text>
            {tick == id && (
                <AntDesign name="checkcircle" size={22} color="#4ECB71" />
            )}
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <Header title='Thêm phương thức' navigation={navigation} />
            <View style={styles.paymentKind}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    marginLeft: 15,
                    marginVertical: 10,
                    color: '#000'
                }}>Phương thức thanh toán</Text>
                {
                    METHODS.map((item) =>
                        <Item key={item.id}
                            id={item.id}
                            name={item.name}
                        />)
                }
            </View>
            <View style={styles.creditInfo}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    marginLeft: 15,
                    marginTop: 20,
                    marginBottom: 10,
                    color: '#000'
                }}>Thông tin phương thức</Text>
                {
                    tick == 1 &&
                    (
                        <View>
                            <View style={styles.items}>
                                <Text style={styles.placeHolders}>Số</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TextInput
                                        placeholder='XXXX - XXXX - XXXX - XXXX'
                                        style={styles.input}
                                        onChangeText={setNumber}
                                        value={number}
                                        keyboardType='numeric'
                                    />
                                    <MaterialCommunityIcons name='pencil-box-outline' size={16} color="#699BF7" />
                                </View>
                            </View>
                            <View style={styles.items}>
                                <Text style={styles.placeHolders}>Hết hạn</Text>
                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TextInput
                                        placeholder='MM / YYYY'
                                        style={styles.input}
                                        onChangeText={setValidDate}
                                        value={validDate}
                                        keyboardType='numeric'
                                    />
                                    <MaterialCommunityIcons name='pencil-box-outline' size={16} color="#699BF7" />
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.items, { borderBottomColor: '#fff' }]}>
                                <Text style={styles.placeHolders}>CVV</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <TextInput
                                        placeholder='XXX'
                                        style={styles.input}
                                        onChangeText={setCVV}
                                        value={cvv}
                                        keyboardType='numeric'
                                    />
                                    <MaterialCommunityIcons name='pencil-box-outline' size={16} color="#699BF7" />
                                </View>
                            </View>
                        </View>
                    )
                }
                {tick == 2 &&
                    (
                        <TouchableOpacity style={styles.items}>
                            <Text style={{ color: '#699BF7' }}>Đăng nhập vào MoMo E-Wallet</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Payment')}>
                <Text style={{ fontSize: 16, color: '#fff', marginLeft: 5 }}>Xong</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF1F9'
    },
    paymentKind: {
        marginTop: 20
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
        color: '#000'
    },
    input: {
        marginRight: 5
    },
    button: {
        backgroundColor: '#3C5A99',
        marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: WINDOW_HEIGHT * 0.065,
        marginTop: 80,
        borderRadius: 15,
        flexDirection: 'row'
    }
})