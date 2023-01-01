import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, FlatList, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

export default function ListItem(props) {
    const DATA = props.data
    const renderItem = ({ item }) => (
        <Item name={item.name} img={item.img} price={item.price} city={item.city} />
    );

    const Item = ({ img, name, price, city }) => (
        <TouchableOpacity style={styles.hotelItem}>
            <Image style={styles.hotelImage} source={{ uri: img }} />
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 14, color: '#000', fontWeight: '500' }}>{name}</Text>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <AntDesign name='star' size={16} color={'#FFD233'} />
                    <AntDesign name='star' size={16} color={'#FFD233'} />
                    <AntDesign name='star' size={16} color={'#FFD233'} />
                    <AntDesign name='star' size={16} color={'#FFD233'} />
                    <AntDesign name='star' size={16} color={'#FFD233'} />
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginHorizontal: 10, marginTop: 10 }}>
                <View style={{ alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 11, color: '#686868' }}>Ngày</Text>
                    <Text style={{ color: '#000', fontWeight: '500' }}>{price}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name='md-location-sharp' size={14} color={'#686868'} />
                    <Text style={{ fontSize: 11 }}>{city}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    hotelItem: {
        backgroundColor: '#fff',
        marginVertical: 8,
        marginHorizontal: 1.8,
        width: 190,
        height: 220,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.7,

        elevation: 2,
    },
    hotelImage: {
        width: '100%',
        height: '50%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
})