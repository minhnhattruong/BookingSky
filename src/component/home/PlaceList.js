import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { defaultStyles } from '../../style/style';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function PlaceList(props) {
    const { navigation, data } = props

    const dataFlatlist = data.slice(0, 9)

    const getPlace = (e) => {
        navigation.navigate('PlaceInfo', { data: e })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.touristItem} onPress={() => getPlace(item)}>
            <Image style={styles.touristImage} source={{ uri: `http://103.163.216.51:8000/${item.photos[0]}` }} />
            <View
                style={{ width: 180, position: 'absolute', top: 45, alignItems: 'center' }}>
                <Text
                    style={{
                        color: '#fff',
                        fontWeight: '600',
                        fontSize: 22,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,

                        elevation: 4,
                    }}>
                    {item.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
    return (
        <View style={styles.tourist}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    paddingHorizontal: 10
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={defaultStyles.titles}>
                        ĐỊA ĐIỂM NỔI BẬT
                    </Text>
                    <AntDesign name="star" size={20} color={'#FFD233'} style={{ marginLeft: 5 }} />
                </View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate(
                        'PlaceList', { data: data })
                    }
                >
                    <Text style={{ color: '#699BF7', marginRight: 3, fontSize: 14 }}>
                        Xem thêm
                    </Text>
                    <AntDesign name="right" size={13} color={'#699BF7'} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={dataFlatlist}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    tourist: {
        paddingTop: 60,
        backgroundColor: '#fff',
        paddingBottom: 5,
    },
    touristItem: {
        marginVertical: 8,
        marginHorizontal: 1.8,
        width: 180,
        height: 120,
    },
    touristImage: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
})