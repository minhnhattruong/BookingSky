import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Animated from 'react-native-reanimated'


const WIDTH = Dimensions.get('window').width
const AnimatedView = Animated.createAnimatedComponent(View);
export default function Header(props) {
    const navigation = props.navigation
    const animatedValue = props.animatedValue
    const fromScreen = props.fromScreen
    const title = props.title

    const inputAnimation = {
        opacity: animatedValue?.interpolate({
            inputRange: [0, 60],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        }),

    };
    const outputAnimation = {
        opacity: animatedValue?.interpolate({
            inputRange: [0, 10],
            outputRange: [0, 0.95],
            extrapolate: 'clamp',
        }),

    };

    console.log(fromScreen);



    return (
        <>
            <AnimatedView style={[styles.header, inputAnimation]}>
                {navigation &&
                    <TouchableOpacity
                        style={{ position: 'absolute', left: 20, top: 15 }}
                        onPress={() => navigation.goBack()}>
                        <AntDesign name='left' size={26} color={'#fff'} />
                    </TouchableOpacity>
                }
                <View style={{ width: '80%', alignItems: 'center' }}>
                    <Text
                        style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}>
                        {title}
                    </Text>
                </View>
            </AnimatedView>
            <AnimatedView style={[styles.headerScroll, outputAnimation]}>
                {navigation &&
                    <TouchableOpacity
                        style={{ position: 'absolute', left: 20, top: 15 }}
                        onPress={() => (
                            fromScreen ? navigation.navigate('FavouriteStack', { screen: 'Favourite' })
                                :
                                navigation.goBack()
                        )
                        }
                    >
                        <AntDesign name='left' size={26} color={'#3C5A99'} />
                    </TouchableOpacity>
                }
                <View style={{ width: '80%', alignItems: 'center' }}>
                    <Text
                        style={{ color: '#3C5A99', fontSize: 18, fontWeight: '500' }}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}>
                        {title}
                    </Text>
                </View>
            </AnimatedView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        zIndex: 3,
        position: 'absolute',
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#3C5A99'
    },
    headerScroll: {
        zIndex: 3,
        position: 'absolute',
        width: WIDTH,
        backgroundColor: '#fff',
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