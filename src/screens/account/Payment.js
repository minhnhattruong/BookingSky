import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../component/headers/Header'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { WINDOW_HEIGHT } from '@gorhom/bottom-sheet'

const CREDIT = [
    {
        id: 1,
        name: 'Truong Minh Nhat',
        number: '107869255825',
        credit: 'visa',
        valid: '9/25',
        cvv: '034'
    },
    {
        id: 2,
        name: 'Nguyen Luu Ly',
        number: '1078693293839',
        credit: 'master',
        valid: '3/27',
        cvv: '912',
    },
    {
        id: 3,
        name: 'Truong Van Pom',
        number: '107869255825',
        credit: 'momo',
        valid: '0',
        cvv: '0',
    }
]


export default function Payment({ navigation }) {

    const Item = ({ id, name, number, credit, cvv, valid }) => (
        <TouchableOpacity
            style={styles.items}
            onPress={() =>
                navigation.navigate(
                    'PaymentInfo',
                    {
                        credit: credit,
                        name: name,
                        number: number,
                        valid: valid,
                        cvv: cvv
                    }
                )
            }
        >

            {credit == 'visa' && <Image style={{ width: 35, height: 20 }} source={{ uri: 'https://brademar.com/wp-content/uploads/2022/05/Visa-Logo-PNG-2006-%E2%80%93-2014.png' }} />}
            {credit == 'master' && <Image style={{ width: 35, height: 20 }} source={{ uri: 'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png' }} />}
            {credit == 'momo' && <Image style={{ width: 30, height: 30 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png' }} />}

            <Text style={{ textTransform: 'uppercase', color: '#000' }}>{name}</Text>
            <Text style={{ color: '#999', fontWeight: '300' }}>*{number.slice(-4)}</Text>
        </TouchableOpacity>
    )

    return (
        <View style={styles.container}>
            <Header title='Phương thức thanh toán' navigation={navigation} />
            <ScrollView>
                <Text style={{
                    fontSize: 16,
                    fontWeight: '500',
                    marginLeft: 15,
                    paddingTop: 10,
                    paddingBottom: 20,
                    color: '#000'
                }}>Thẻ đã đăng ký</Text>
                <View style={styles.creditList}>
                    {
                        CREDIT.map((item) =>
                            <Item key={item.id}
                                id={item.id}
                                name={item.name}
                                number={item.number}
                                credit={item.credit}
                                valid={item.valid}
                                cvv={item.cvv}
                            />)
                    }
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('AddPayment')} >
                    <AntDesign name='plus' size={22} color='#699BF7' />
                    <Text style={{ fontSize: 16, color: '#699BF7', marginLeft: 5 }}>Thêm phương thức mới</Text>
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
    items: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        height: WINDOW_HEIGHT * 0.07,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 35,
        marginBottom: 2,
    },
    button: {
        borderWidth: 2,
        borderColor: '#699BF7',
        marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginTop: 80,
        borderRadius: 15,
        flexDirection: 'row'
    }
})