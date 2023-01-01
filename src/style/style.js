import { StyleSheet } from 'react-native'
import React from 'react'


export const defaultStyles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: '#EDF1F9'
    },
    titles: {
        fontSize: 16,
        fontWeight: '500',
        color: '#000'
    }
})

export const buttonStyles = StyleSheet.create({
    blueButton1: {
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: '#3C5A99',
        alignItems: 'center',
    },
    blueButton2: { //use for modal
        paddingVertical: 12,
        borderRadius: 15,
        backgroundColor: '#3C5A99',
        alignItems: 'center',
    },
    borderBlueButton2: { //use for modal
        paddingVertical: 12,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: '#3C5A99',
        alignItems: 'center',
    },
    redButton1: {
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    redButton3: {   //search button
        backgroundColor: '#F70202',
        alignItems: 'center',
        borderRadius: 15,
        paddingVertical: 10,
    }
})