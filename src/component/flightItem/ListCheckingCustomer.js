import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function ListCheckingCustomer(props) {
    const DATA = props.data
    return (
        <>
            {
                DATA.map((e, i) => (
                    <View key={i}>
                        <View
                            style={styles.customer}>
                            <AntDesign name="user" size={20} color={'#888'} />
                            <Text style={styles.customerTitle}>Khách hàng {i + 1}</Text>
                        </View>
                        <View style={styles.customerInfo}>
                            <View style={styles.infoItems}>
                                <Text style={styles.itemPlaceholder}>Tên</Text>
                                <Text style={{ color: '#000' }}>
                                    {e.lastName + ' ' + e.firstName}
                                </Text>
                            </View>
                            <View style={styles.infoItems}>
                                <Text style={styles.itemPlaceholder}>Ngày sinh</Text>
                                <Text style={styles.itemValue}>{e.birth}</Text>
                            </View>
                            <View style={styles.infoItems}>
                                <Text style={styles.itemPlaceholder}>Giới tính</Text>
                                <Text style={styles.itemValue}>
                                    {e.sex == 'male' && `Nam`}
                                    {e.sex == 'female' && `Nữ`}
                                </Text>
                            </View>
                            <View style={styles.infoItems}>
                                <Text style={styles.itemPlaceholder}>Quốc tịch</Text>
                                <Text style={styles.itemValue}>{e.nation}</Text>
                            </View>
                            <View style={styles.infoItems}>
                                <Text style={styles.itemPlaceholder}>Giấy tờ tùy thân</Text>
                                <Text style={styles.itemValue}>{e.idCard}</Text>
                            </View>
                        </View>
                    </View>
                ))
            }
        </>
    )
}

const styles = StyleSheet.create({
    customer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginHorizontal: 15,
        marginVertical: 15,
    },
    customerTitle: {
        color: '#000',
        fontSize: 16,
        marginLeft: 5,
        fontWeight: '500'
    },
    customerInfo: {
        backgroundColor: '#fff',
    },
    infoItems: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: '#DDDDDD',
    },
    itemPlaceholder: {
        color: '#686868'
    },
    itemValue: {
        color: '#000'
    },
    dashedLine: {
        borderWidth: 0.6,
        borderStyle: 'dashed',
        borderColor: '#aaaaaa',
        borderTopColor: '#aaaaaa',
        marginVertical: 10,
    },
})