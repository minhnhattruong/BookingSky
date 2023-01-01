import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import OfferDetails from './OfferDetails'

export default function Order({ navigation }) {
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(OfferDetails)}>
            <Ionicons name="arrow-back" size={40} color={'#FFFFFF'} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3C5A99',
    }
})