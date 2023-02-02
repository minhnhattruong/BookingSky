import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import Animated from 'react-native-reanimated'
import React, { useRef } from 'react'
import Header from '../../component/headers/Header'
import { defaultStyles } from '../../style/style'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '@gorhom/bottom-sheet'

export default function PlaceList({ navigation, route }) {
    const { data } = route.params
    const animatedValue = useRef(new Animated.Value(0)).current;

    const getPlace = (e) => {
        navigation.navigate('PlaceInfo', { data: e })
    }
    return (
        <View style={defaultStyles.containers}>
            <Header title='Địa điểm ưa thích' navigation={navigation} animatedValue={animatedValue} />
            <View style={{ height: 60 }} />
            <ScrollView
                style={styles.mainContent}
                onScroll={e => {
                    animatedValue.setValue(e.nativeEvent.contentOffset.y)
                }}
                scrollEventThrottle={16}
            >
                {data.length > 0 &&
                    data.map((e, i) => (
                        <TouchableOpacity
                            key={i}
                            style={styles.item}
                            onPress={() => getPlace(e)}>
                            <Image
                                source={{ uri: `http://localhost:8000/${e.photos[0]}` }}
                                style={styles.itemImage}
                            />
                            <View style={styles.info}>
                                <Text style={styles.title} numberOfLines={2} ellipsizeMode={'tail'}>{e.title}</Text>
                                <Text style={{ marginTop: 10 }} numberOfLines={5} ellipsizeMode={'tail'}>{e.desc}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
            </ScrollView>
        </View>
    )
}

const ITEM_HEIGHT = WINDOW_HEIGHT * 0.20
const ITEM_WIDTH = WINDOW_WIDTH * 0.90

const styles = StyleSheet.create({
    mainContent: {
        paddingHorizontal: 20, paddingTop: 20
    },
    item: {
        height: ITEM_HEIGHT,
        width: ITEM_WIDTH,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 25,
    },
    itemImage: {
        width: ITEM_WIDTH * 0.45,
        height: ITEM_HEIGHT
    },
    title: {
        width: '65%',
        fontWeight: '600',
        fontSize: 14,
        color: '#000'
    },
    info: {
        justifyContent: 'flex-start',
        paddingHorizontal: 15,
        paddingVertical: 15,
        width: ITEM_WIDTH * 0.55,
    },
})