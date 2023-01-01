import * as React from 'react';
import { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
  Animated,
  Button,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import HeaderNoti from '../component/headers/HeaderNoti';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Constants from 'expo-constants';

const DATA = [
  {
    id: '1',
    seen: false,
    title:
      'Material Design Icons growing icon collection allows designers and developers targeting various platforms to download icons in the format, color and size they need for any project.',
    time: '23:21 29/09/2022',
  },
  {
    id: '2',
    seen: true,
    title:
      'Xong, như vậy Font Lato đã được thêm thành công vào trong ứng dụng, Xong, như vậy Font Lato đã được thêm thành công vào trong ứng dụng, bây giờ thì chỉ cần khởi chạy lại ứng dụng',
    time: '23:21 29/09/2022',
  },
  {
    id: '3',
    seen: true,
    title:
      '3 Vùng lãnh thổ do Nga kiểm soát ở Ukraine bị thu hẹp, Xong, như vậy Font Lato đã được thêm thành công vào trong ứng dụng, bây giờ thì chỉ cần khởi chạy lại ứng dụng',
    time: '23:21 29/09/2022',
  },
  {
    id: '4',
    seen: true,
    title:
      'Xong, như vậy Font Lato đã được thêm thành công vào trong ứng dụng, bây giờ thì chỉ cần khởi chạy lại ứng dụng.',
    time: '23:21 29/09/2022',
  },
  {
    id: '5',
    seen: false,
    title:
      'Xong, như vậy Font Lato đã được thêm thành công vào trong ứng dụng, bây giờ thì chỉ cần khởi chạy lại ứng dụng.',
    time: '23:21 29/09/2022',
  },
  {
    id: '6',
    seen: true,
    title:
      'Xong, như vậy Font Lato đã được thêm thành công vào trong ứng dụng, bây giờ thì chỉ cần khởi chạy lại ứng dụng.',
    time: '23:21 29/09/2022',
  },
  {
    id: '7',
    seen: true,
    title:
      'Xong, như vậy Font Lato đã được thêm thành công vào trong ứng dụng, bây giờ thì chỉ cần khởi chạy lại ứng dụng.',
    time: '23:21 29/09/2022',
  },
  {
    id: '8',
    seen: false,
    title:
      'Xong, như vậy Font Lato đã được thêm thành công vào trong ứng dụng, bây giờ thì chỉ cần khởi chạy lại ứng dụng.',
    time: '23:21 29/09/2022',
  },
  {
    id: '9',
    seen: false,
    title:
      'Xong, như vậy Font Lato đã được thêm thành công vào trong ứng dụng, bây giờ thì chỉ cần khởi chạy lại ứng dụng.',
    time: '23:21 29/09/2022',
  },
];

export default function Notification({ navigation }) {
  const [listData, setListData] = useState(DATA);
  let row = [];
  let prevOpenedRow;

  /**
   *
   */
  const renderItem = ({ item, index }, onClick) => {
    const inputRange = [-1, 0, 100 * index, 100 + 200 * 3 * (index + 4)];

    const opacityInputRange = [
      -1,
      0,
      100 * index,
      100 + 300 * 1 * (index + 0.5),
    ];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });

    const opacity = scrollY.interpolate({
      inputRange: opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });

    //
    const closeRow = index => {
      // console.log('closerow');
      if (prevOpenedRow && prevOpenedRow !== row[index]) {
        prevOpenedRow.close();
      }
      prevOpenedRow = row[index];
    };

    const renderRightActions = (progress, dragX, onClick) => {
      return (
        <View
          style={{
            margin: 0,
            alignContent: 'center',
            justifyContent: 'center',
            width: 70,
          }}>
          <Pressable
            onPress={onClick}
            style={{
              backgroundColor: 'red',
              alignItems: 'center',
              marginHorizontal: 15,
              borderRadius: 30,
              padding: 7,
            }}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              size={24}
              color="#fff"
            />
          </Pressable>
        </View>
      );
    };

    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        onSwipeableOpen={() => closeRow(index)}
        ref={ref => (row[index] = ref)}
        rightOpenValue={-100}>
        {item.seen === true ? (
          <Animated.View
            style={{
              ...styles.item,
              backgroundColor: '#d3ecfa',
              transform: [{ scale }],
            }}>
            <Pressable style={styles.openNoti}>
              <View
                style={{
                  alignItems: 'center',
                  width: '15%',
                }}>
                <MaterialCommunityIcons
                  name="bullhorn"
                  size={20}
                  color="#fff"
                  style={{
                    padding: 8,
                    backgroundColor: '#ff605f',
                    borderRadius: 20,
                  }}
                />
              </View>
              <View style={{ width: '80%', marginHorizontal: 5 }}>
                <Text numberOfLines={4} style={{ fontSize: 15, color: '#000' }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 11, marginTop: 5 }}>{item.time}</Text>
              </View>
            </Pressable>
          </Animated.View>
        ) : (
          <Animated.View
            style={{
              ...styles.item,
              backgroundColor: '#fff',
              transform: [{ scale }],
            }}>
            <Pressable style={styles.openNoti}>
              <View
                style={{
                  alignItems: 'center',
                  width: '15%',
                }}>
                <MaterialCommunityIcons
                  name="bullhorn"
                  size={20}
                  color="#fff"
                  style={{
                    padding: 8,
                    backgroundColor: '#ff605f',
                    borderRadius: 20,
                  }}
                />
              </View>
              <View style={{ width: '80%', marginHorizontal: 5 }}>
                <Text
                  numberOfLines={4}
                  style={{ fontSize: 15, color: '#555555' }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 11, marginTop: 5 }}>{item.time}</Text>
              </View>
            </Pressable>
          </Animated.View>
        )}
      </Swipeable>
    );
  };

  const deleteItem = ({ item, index }) => {
    // console.log(item, index);
    let a = listData;
    a.splice(index, 1);
    // console.log(a);
    setListData([...a]);
  };
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <HeaderNoti title="Thông báo" navigation={navigation} />
      <View style={styles.container}>
        <Animated.FlatList
          data={listData}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )}
          showsVerticalScrollIndicator={false}
          renderItem={v =>
            renderItem(v, () => {
              // console.log('Pressed', v);
              deleteItem(v);
            })
          }
          keyExtractor={item => item.id}></Animated.FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F9',
  },

  item: {
    padding: 15,
    marginVertical: 10,

    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //ios
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    //android
    elevation: 8,
  },
  openNoti: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: '90%',
  },
});
