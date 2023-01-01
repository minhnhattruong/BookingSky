import { StyleSheet, Text, View, TouchableOpacity, Modal, Pressable } from 'react-native'
import React, { useState } from 'react'
import ModalAddInformation from './ModalAddInformation'
import ModalAddCustomer from './ModalAddCustomer'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function CustomerList(props) {
    DATA = props.data
    const [modalInformation, setModalInformation] = useState(false);
    const [modalAddPeople, setModalAddPeople] = useState(false)
    const [customerInfo, setCustomerInfo] = useState()
    const [onClickDel, setOnClickDel] = useState(false)
    const [delItem, setDeleItem] = useState(false)

    const deleteItem = (i) => {
        DATA.splice(i, 1)
        setDeleItem(!delItem)
    }


    return (
        <View style={styles.customerList}>
            <View style={styles.titleCustomer}>
                <Text style={{ fontSize: 16, color: '#000' }}>Thông tin khách hàng</Text>
                <Pressable
                    style={{ flexDirection: 'row', alignItems: 'center' }}
                    onPress={() => setOnClickDel(!onClickDel)}
                >
                    <Text style={{ color: '#699BF7', fontSize: 15, fontWeight: '500' }}>{onClickDel ? `Xong` : `Chọn`}</Text>
                </Pressable>
            </View>
            {DATA.map((e, i) =>
                <View style={styles.customerItem} key={i}>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', alignItems: 'center', width: '70%' }}
                        onPress={() => {
                            setCustomerInfo(e)
                            setModalInformation(true)
                        }
                        }
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <MaterialCommunityIcons name="account-outline" size={25} style={{ marginRight: 5 }} />
                            {
                                e.firstName != '' ? (
                                    <Text style={{ color: '#000', textTransform: 'uppercase' }}>
                                        {e.lastName + ' ' + e.firstName}
                                    </Text>
                                ) : (
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: '#000' }}>
                                            {e.ageGroup == 'adult' && `Người Lớn`}
                                            {e.ageGroup == 'child' && `Trẻ Em`}
                                            {e.ageGroup == 'baby' && `Em bé`}
                                        </Text>
                                        <Text style={{ color: 'red', marginLeft: 5 }}>*</Text>
                                    </View>
                                )
                            }
                        </View>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'flex-end', width: '30%' }}>
                        {
                            onClickDel ? (
                                <TouchableOpacity
                                    onPress={() => {
                                        deleteItem(i)
                                    }
                                    }>
                                    <MaterialCommunityIcons name="trash-can-outline" color={'#ff0000'} size={20} />
                                </TouchableOpacity>
                            )
                                : (
                                    <AntDesign name="right" size={20} color={'#3C5A99'} />
                                )
                        }
                    </View>
                </View>
            )
            }
            <TouchableOpacity
                onPress={() => setModalAddPeople(true)}
                style={styles.customerItem}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons
                        name="plus-circle-outline"
                        style={{ fontSize: 25, marginRight: 5, color: '#699BF7' }}
                    />
                    <Text style={{ color: '#000', marginLeft: 10 }}>
                        Thêm hành khách
                    </Text>
                </View>
            </TouchableOpacity>

            <Modal
                transparent={true}
                visible={modalInformation}
                RequestClose={() => setModalInformation(modalInformation)}>
                <ModalAddInformation
                    setModalInformation={setModalInformation}
                    data={customerInfo}
                />
            </Modal>
            <Modal
                transparent={true}
                visible={modalAddPeople}
                RequestClose={() => setModalAddPeople(modalAddPeople)}>
                <ModalAddCustomer setModalAddPeople={setModalAddPeople} data={DATA} />
            </Modal>

        </View >
    )
}

const styles = StyleSheet.create({
    customerList: {
        marginHorizontal: 15,
    },
    titleCustomer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 30,
        marginRight: 10,
    },
    customerItem: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 10,
    },
})