import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TopTabbar(props) {
    const navigation = props.navigation
    return (
        <View style={styles.minibar}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Setting')}
                style={styles.setting}>
                <Ionicons name="settings" size={21} color={'#fff'} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}
                style={styles.notification}>
                <MaterialCommunityIcons name="bell" size={21} color={'#fff'} />
                <View
                    style={{
                        backgroundColor: '#F70202',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 12,
                        height: 12,
                        borderRadius: 10,
                        position: 'absolute',
                        top: 14,
                        left: 10,
                    }}>
                    <Text style={{ color: '#fff', fontSize: 8 }}>5</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.chat}>
                <Ionicons name="chatbubble-ellipses" size={21} color={'#fff'} />
                <View
                    style={{
                        backgroundColor: '#F70202',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 12,
                        height: 12,
                        borderRadius: 10,
                        position: 'absolute',
                        top: 14,
                        left: 10,
                    }}>
                    <Text style={{ color: '#fff', fontSize: 8 }}>2</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    minibar: {
        zIndex: 1,
        position: 'absolute',
        right: 30,
        top: 20,
        width: 90,
        justifyContent: 'space-between',
        flexDirection: 'row',

    },
})