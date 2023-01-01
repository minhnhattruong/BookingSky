import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'

const HeaderFav = (props) => {
    const title = props.title
    const navigation = props.navigation
    return (
        <View style={styles.header}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>{title}</Text>
            </View>
        </View>
    )
}

export default HeaderFav

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#3C5A99',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,
        elevation: 4,
    },
})