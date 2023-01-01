import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import React from 'react'
import Header from '../../component/headers/Header'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

const FeedBack = ({ navigation }) => {


    const [star, setStar] = useState(0)
    const handlOnOption = (id) => {
        setStar(id)
    }


    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
                <Header title='Đánh giá khách sạn' navigation={navigation} />
                <View style={{ flexDirection: 'row', padding: 15 }}>
                    <Image source={{ uri: 'https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/95/2016/12/21145818/3546897_XL-3.jpg' }} style={{ width: 70, height: 70 }} resizeMode='cover' />
                    <View style={{ justifyContent: 'space-around', marginLeft: 20 }}>
                        <Text style={{ fontSize: 16 }}>
                            GTC Hotel
                        </Text>
                        <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 16 }}>
                            DELUXE ROOMS
                        </Text>
                    </View>
                </View>
                <View style={{ borderTopColor: '#ccc', borderTopWidth: 1, marginTop: 10, }}>
                    <View style={{ marginHorizontal: 15, marginTop: 15 }}>
                        <Text style={{ color: '#000', fontSize: 16, fontWeight: 'bold' }}>Độ hài lòng của bạn?</Text>
                    </View>
                </View>
                <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                        <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => handlOnOption(1)}>
                            <Ionicons name={star >= 1 ? 'ios-star' : 'ios-star-outline'} size={30} color={'#FF8C00'} />
                        </TouchableOpacity  >
                        <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => handlOnOption(2)}>
                            <Ionicons name={star >= 2 ? 'ios-star' : 'ios-star-outline'} size={30} color={'#FF8C00'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => handlOnOption(3)}>
                            <Ionicons name={star >= 3 ? 'ios-star' : 'ios-star-outline'} size={30} color={'#FF8C00'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => handlOnOption(4)}>
                            <Ionicons name={star >= 4 ? 'ios-star' : 'ios-star-outline'} size={30} color={'#FF8C00'} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => handlOnOption(5)}>
                            <Ionicons name={star >= 5 ? 'ios-star' : 'ios-star-outline'} size={30} color={'#FF8C00'} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ color: '#4ECB71', fontWeight: 'bold', fontSize: 16 }}>Rất hài lòng</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 15, marginTop: 20 }}>
                    <View style={{ borderColor: '#ccc', borderWidth: 1, borderRadius: 10, backgroundColor: '#fff', height: 200 }}>
                        <TextInput multiline={true} placeholder='Chia sẻ nhận xét của bạn ..' />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={{ marginTop: 30, marginBottom: 30, backgroundColor: '#F6C000', justifyContent: 'center', alignItems: 'center', padding: 15, borderRadius: 10 }}
                        onPress={() => navigation.navigate('FeedBack')}
                    >
                        <Text style={{ color: '#fff', fontWeight: 'bold', paddingHorizontal: 40, fontSize: 18 }}>
                            Đánh giá
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default FeedBack

const styles = StyleSheet.create({})