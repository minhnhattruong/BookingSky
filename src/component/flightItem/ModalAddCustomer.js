import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import React, { useState } from 'react';
import DropDown from '../DropDown';


const CUSTOMER = [
    {
        id: 1,
        name: 'Người lớn',
        value: 'adult'
    },
    {
        id: 2,
        name: 'Trẻ em',
        value: 'child'
    },
    {
        id: 3,
        name: 'Em bé',
        value: 'baby'
    },
]



export default function ModalAddInformation(props) {
    const DATA = props.data
    const closeModal = () => {
        props.setModalAddPeople(false);
        if (ageGroup) {
            DATA.push({
                firstName: '',
                lastName: '',
                sex: '',
                birth: '',
                idCard: '',
                nation: '',
                ageGroup: ageGroup
            })
        }
    };

    const [selectItemCustomer, setSelectItemCustomer] = useState('');

    const [ageGroup, setAgeGroup] = useState()

    const onSelectCustomer = item => {
        setSelectItemCustomer(item);
        setAgeGroup(item.value)
    };

    return (
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 15,
                            paddingVertical: 20,
                            //   paddingHorizontal: 60,
                            fontWeight: 'bold',
                        }}>
                        Thêm thông tin hành khách
                    </Text>
                </View>
                <View style={styles.modalContent}>
                    <View style={styles.dropdown}>
                        <DropDown
                            value={selectItemCustomer}
                            onSelect={onSelectCustomer}
                            data={CUSTOMER}
                        />
                    </View>

                </View>

                <View style={styles.buttonmodal}>
                    <TouchableOpacity
                        style={styles.buttonOk}
                        onPress={() => closeModal()}>
                        <Text style={styles.textStyle}>Xong</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.7)',
    },
    modalView: {
        backgroundColor: 'white',
        margin: 25,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    dropdown: {
        marginHorizontal: 15,
    },
    modalContent: {
        paddingBottom: 20,
    },
    textStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    buttonOk: {
        backgroundColor: '#3C5A99',
        padding: 15,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    buttonmodal: {
        // padding: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: '#3C5A99',
    },
    items: {
        marginBottom: 15,
        marginHorizontal: 20
    },
});