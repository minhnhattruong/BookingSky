import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler'

export default function OfferDetails({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoback} onPress={() => navigation.navigate('Endow')}>
                <Ionicons name="arrow-back" size={40} color={'#FFFFFF'} />
            </TouchableOpacity>
            <Image
                style={styles.banneroffer}
                source={require('../../assets/image/banner_offer.jpg')}
            />
            <ScrollView>
                <View style={styles.maincontent}>
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', marginTop: 20, fontSize: 18, color: '#000000', width: '80%', marginLeft: 30 }}>
                        Vietnam Airlines giảm 10% giá vé đường bay Châu Âu
                    </Text>
                    <Image
                        style={styles.Imagetitle}
                        source={require('../../assets/image/banner_offer.jpg')}
                    />
                    <Text style={styles.content}>
                        Tưng bừng săn đón chương trình Flash Sale của Vietnam Airlines giảm 10% giá vé đường bay Châu Âu. Chương trình giảm giá diễn ra trong vòng 7 ngay vàng. Nhanh tay săn vé khuyến mãi tại Đại lý vé máy bay Việt Mỹ để có những tấm vé đi châu Âu giá rẻ. Khám phá bầu trời châu Âu hoa lệ cùng Vietnam Airlines ngay hôm nay!
                        Lên kế hoạch bay châu Âu ngay tại Việt Mỹ vì ở đây có ưu đãi cực hời được tài trợ bởi Vietnam Airlines. Hành khách sẽ được giảm ngay 10% giá vé hành trình Việt Nam – Anh/ Pháp/ Đức.
                    </Text>
                    <TouchableOpacity style={styles.order} onPress={() => navigation.navigate('Favourite')}>
                        <Text style={{ color: '#fff', position: 'absolute', zIndex: 1, marginTop: 15 }} >
                            Đặt ngay
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3C5A99',
    },
    logoback: {
        position: 'absolute',
        zIndex: 1,
        marginLeft: 15,
        marginTop: 10,
    },
    banneroffer: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
    },
    maincontent: {
        backgroundColor: '#fff',
        width: '90%',
        height: 480,
        marginTop: 10,
        marginLeft: 25,
        borderRadius: 30,
        marginBottom: 20,

    },
    Imagetitle: {
        width: '60%',
        height: 100,
        marginLeft: 60,
        marginTop: 10,
    },
    content: {
        marginLeft: 40,
        width: '85%',
        color: '#000000',
        marginTop: 10,

    },
    order: {

        backgroundColor: '#FF0000',
        marginHorizontal: 80,
        marginVertical: 20,
        borderRadius: 20,
        alignItems: 'center',
        paddingTop: 50,
    },

})