import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useCallback, useMemo, useRef, } from 'react'
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import CustomBackdrop from '../CustomBackdrop ';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Slider } from '@miblanchard/react-native-slider';
import CheckBox from '@react-native-community/checkbox';

const WIDTH = Dimensions.get('window').width

export default function HotelFilter() {

    const [lowestToHighestCheck, setLowestToHighestCheck] = useState(false)
    const [highestToLowestCheck, setHighestToLowerCheck] = useState(false)

    const bottomSheetRef = useRef(null);

    const snapPoints = useMemo(() => ['75%', '75%'], []);

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);

    }, []);
    const handlePresentModalPress = useCallback(() => {
        bottomSheetRef.current?.present();
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
        []
    );


    const SliderContainer = (props) => {
        const { sliderValue } = props;
        const [value, setValue] = React.useState(
            sliderValue ? sliderValue : DEFAULT_VALUE,
        );


        const renderChildren = () => {
            return React.Children.map(
                props.children,
                (child) => {
                    if (!!child && child.type === Slider) {
                        return React.cloneElement(child, {
                            onValueChange: setValue,
                            value
                        });
                    }

                    return child;
                },
            );
        };
        return (
            <View style={{ width: '75%', justifyContent: 'center', alignItems: 'center' }}>
                {renderChildren()}
                <Text>
                    {Array.isArray(value) && (
                        <View style={{ flexDirection: 'row' }}>
                            <Text>{value[0]}</Text>
                            <Text style={{ marginHorizontal: 3 }}> đến </Text>
                            <Text>{value[1]}</Text>
                        </View>
                    )}
                </Text>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>0 (VNĐ)</Text>
                    <Text>50 Triệu</Text>
                </View>
            </View>
        );
    }

    // const renderAboveThumbComponent = () => {
    //     return (
    //         <View style={{
    //             alignItems: 'center',
    //             justifyContent: 'center',
    //             left: -(WIDTH * 0.75) / 2,
    //         }}>
    //             <Text>cc</Text>
    //         </View>
    //     );
    // };

    return (
        <View>
            <TouchableOpacity style={styles.filter} onPress={() => handlePresentModalPress()}>
                <AntDesign name='filter' size={22} color='#fff' />
                <Text style={{ color: '#fff', marginLeft: 5 }}>Lọc</Text>
            </TouchableOpacity>

            <BottomSheetModal
                ref={bottomSheetRef}
                index={1}
                snapPoints={snapPoints}
                onChange={handleSheetChanges}
                backdropComponent={renderBackdrop}

            >
                <View style={styles.contentContainer}>
                    <View style={styles.header}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>Lọc khách sạn</Text>
                    </View>
                    <View style={styles.sortPrice}>
                        <Text style={{ marginBottom: 10, fontSize: 16, paddingLeft: 20, color: '#000', fontWeight: '500' }}>Sắp xếp theo giá</Text>
                        <View style={styles.sortPriceItem}>
                            <CheckBox
                                disabled={false}
                                value={lowestToHighestCheck}
                                onValueChange={setLowestToHighestCheck}
                            />
                            <Text style={{ fontSize: 15, color: '#000' }}>Từ Thấp tới cao</Text>
                        </View>
                        <View style={styles.sortPriceItem}>
                            <CheckBox
                                disabled={false}
                                value={highestToLowestCheck}
                                onValueChange={setHighestToLowerCheck}
                            />
                            <Text style={{ fontSize: 15, color: '#000' }}>Từ Cao tới thấp</Text>
                        </View>
                    </View>
                    <View style={styles.filterPrice}>
                        <Text style={{ marginBottom: 40, fontSize: 16, paddingLeft: 20, color: '#000', fontWeight: '500' }}>Lọc theo giá</Text>
                        <View style={{ alignItems: 'center' }}>
                            <SliderContainer
                                sliderValue={[0, 500000]}
                            >

                                <Slider
                                    animateTransitions
                                    maximumTrackTintColor="#b7b7b7"
                                    maximumValue={50000}
                                    minimumTrackTintColor="#699BF7"
                                    minimumValue={0}
                                    step={1000}
                                    thumbTintColor="#fff"
                                    containerStyle={{ width: WIDTH * 0.75 }}
                                    trackStyle={{ height: 3 }}
                                // renderAboveThumbComponent={renderAboveThumbComponent}
                                />
                            </SliderContainer>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handlePresentModalClose}
                        >
                            <Text style={{ color: '#fff', fontWeight: '500', fontSize: 15 }}>Xong</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </BottomSheetModal >
        </View >

    )
}

const styles = StyleSheet.create({
    filter: {
        flexDirection: 'row',
        position: 'absolute',
        top: 20,
        right: 20,
        zIndex: 4,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#EDF1F9',
    },
    header: {
        backgroundColor: '#3C5A99',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.00,

        elevation: 2,
    },
    filterPrice: {
        paddingTop: 20,
    },
    sortPrice: {
        paddingVertical: 30,

        borderBottomWidth: 0.5,
    },
    sortPriceItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    button: {
        marginTop: 50,
        backgroundColor: '#3C5A99',
        height: 50,
        marginHorizontal: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
})