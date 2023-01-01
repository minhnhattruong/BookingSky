import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable, } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useCallback, useMemo, useRef } from 'react';
import ModalFlightDetails from './ModalFlightDetails';
import CustomBackdrop from '../CustomBackdrop ';
import {
    BottomSheetModal,
    BottomSheetScrollView,
} from '@gorhom/bottom-sheet';



export default function ListFlight(props) {
    const DATA = props.data
    const routeName = props.routeName
    const navigation = props.navigation

    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['90%', '90%'], []);
    const handleSheetChanges = useCallback(index => {
        console.log('dong', index);
    }, []);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);
    const renderBackdrop = useCallback(
        props => (
            <CustomBackdrop
                {...props}
                disappearsOnIndex={1}
                appearsOnIndex={2}
                bottomSheetRef={bottomSheetRef}
            />
        ),
        [],
    );

    return (
        <View style={styles.listFights}>
            {
                DATA.map((e, i) =>
                    <View key={i}>
                        <View style={styles.item}>
                            <TouchableOpacity
                                onPress={() => handlePresentModalPress()}
                                style={styles.flightInfo}>
                                <Image source={e.image} style={styles.airwayLogo} />
                                <View style={styles.flight}>
                                    <View>
                                        <MaterialCommunityIcons name="airplane-takeoff" size={20} color={'#686868'} />
                                        <Text style={styles.title}>{e.from}</Text>
                                        <Text style={styles.titletime}>{e.departuretime}</Text>
                                    </View>

                                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 12, top: 7 }}>{e.total}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                            <MaterialCommunityIcons name="circle-medium" style={{ fontSize: 16 }} />
                                            <View
                                                style={{
                                                    borderWidth: 1,
                                                    width: '45%',
                                                    borderColor: '#fff',
                                                    borderBottomColor: '#BBBBBB',
                                                    alignItems: 'center',
                                                }}
                                            />
                                            <MaterialCommunityIcons
                                                name="circle-medium"
                                                style={{ fontSize: 16 }}
                                            />
                                        </View>
                                    </View>

                                    <View>
                                        <MaterialCommunityIcons
                                            name="airplane-landing"
                                            size={20}
                                            color={'#686868'}
                                        />
                                        <Text style={styles.title}>{e.to}</Text>
                                        <Text style={styles.titletime}>{e.arrivaltime}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View
                                style={{
                                    borderWidth: 0.6,
                                    borderStyle: 'dashed',
                                    borderColor: '#aaaaaa',
                                    borderTopColor: '#aaaaaa',
                                    marginBottom: 10,
                                }}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                }}>
                                <View style={{ width: '40%' }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text>Economy</Text>
                                        <View style={styles.briefcase}>
                                            <MaterialCommunityIcons name="briefcase-outline" color="white" />
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ color: '#000', fontSize: 13 }}>VNĐ</Text>
                                        <Text
                                            numberOfLines={1}
                                            ellipsizeMode="tail"
                                            style={{
                                                color: '#000',
                                                fontSize: 18,
                                                fontWeight: 'bold',
                                                marginLeft: 5,
                                            }}>
                                            2,000,000
                                        </Text>
                                    </View>
                                </View>

                                {/* OneWays */}
                                {routeName == 'FindOneWay' && (
                                    <View style={styles.btnOneWay}>
                                        <Pressable style={styles.btnOneWayLeft}>
                                            <Text style={{ color: '#F70202' }}>Yêu thích</Text>
                                        </Pressable>
                                        <Pressable
                                            onPress={() => navigation.navigate('FormInformation')}
                                            style={styles.btnOneWayRight}>
                                            <Text style={{ color: '#fff' }}>Đặt ngay</Text>
                                        </Pressable>
                                    </View>
                                )
                                }
                                {routeName == 'FindTicketDeparture' && (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('FindReturnTicket')}
                                        style={styles.btnDepart}>
                                        <Text style={{ color: '#fff', fontSize: 14 }}>Chọn chiều về</Text>
                                    </TouchableOpacity>
                                )
                                }
                                {routeName == 'FindReturnTicket' && (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('FormInformation')}
                                        style={styles.btnReturnDone}>
                                        <Text style={{ color: '#fff', fontSize: 14 }}>Xong</Text>
                                    </TouchableOpacity>
                                )
                                }

                            </View>
                        </View>
                    </View>)
            }
            <BottomSheetModal
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={renderBackdrop}>
                <BottomSheetScrollView style={styles.contentContainer}>
                    <ModalFlightDetails
                        navigation={navigation}
                        bottomSheetRef={bottomSheetRef}
                    />
                </BottomSheetScrollView>
            </BottomSheetModal>
        </View>
    )
}

const styles = StyleSheet.create({
    listFights: {
        paddingTop: 90,
        paddingBottom: 30
    },
    item: {
        backgroundColor: '#fff',
        marginVertical: 10,
        marginHorizontal: 15,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 1,
    },
    flightInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 8,
        marginRight: 7,
    },
    airwayLogo: {
        width: 90,
        height: 70,
    },
    flight: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    title: {
        color: '#000',
        fontSize: 15,
    },
    titletime: {
        fontSize: 11,
    },
    briefcase: {
        backgroundColor: '#F6C000',
        width: 30,
        alignItems: 'center',
        borderRadius: 20,
        marginLeft: 10,
    },
    btnOneWayLeft: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnOneWayRight: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#F70202',
        backgroundColor: '#F70202',
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
    },
    btnOneWay: {
        borderWidth: 1,
        width: '50%',
        borderColor: '#F70202',
        borderRadius: 15,
        marginTop: 7,
        flexDirection: 'row',
    },
    btnDepart: {
        borderRadius: 10,
        backgroundColor: '#F70202',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: 7,
    },
    btnReturnDone: {
        width: '30%',
        borderRadius: 10,
        backgroundColor: '#F70202',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginTop: 7,
    }
})