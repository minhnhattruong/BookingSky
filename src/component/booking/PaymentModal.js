import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState, useCallback, useMemo, useRef } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import CustomBackdrop from '../CustomBackdrop ';


export default function PaymentModal({ bottomSheetRef }) {
    const snapPoints = useMemo(() => ['90%', '90%'], []);

    const handleSheetChanges = useCallback(index => {
        console.log('handleSheetChanges', index);
    }, []);

    const handlePresentModalClose = useCallback(() => {
        bottomSheetRef.current?.close();
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
        <BottomSheetModal
            ref={bottomSheetRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backdropComponent={renderBackdrop}>
            <View style={styles.contentContainer}>
                <BottomSheetScrollView>
                    <View style={styles.mainContent}>
                        <View style={{ marginTop: 30, alignItems: 'center' }}>
                            <View style={styles.qrcode} >
                                <Image source={require('../../assets/image/QrPay.png')} style={{ width: '100%', height: '100%' }} />
                            </View>
                        </View>
                    </View>
                </BottomSheetScrollView>
            </View>
        </BottomSheetModal>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: '#EDF1F9',
    },
    qrcode: {
        width: 220,
        height: 220,
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: "#000",
        marginVertical: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 10,
    }
});
