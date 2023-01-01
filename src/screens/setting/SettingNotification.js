import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../component/headers/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SettingNotification({ navigation }) {
  const [isNoti, setIsNoti] = useState(false);
  const toggleSwitch = () => setIsNoti(previousState => !previousState);

  const [isAccount, setIsAccount] = useState(false);
  const toggleSwitchAccount = () =>
    setIsAccount(previousState => !previousState);

  const [isFlights, setIsFlights] = useState(false);
  const toggleSwitchFlights = () =>
    setIsFlights(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Header title="Cài đặt thông báo" navigation={navigation} />
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}
            style={{ ...styles.passwordStyle }}>
            <View style={styles.itemStyles}>
              <Text style={styles.textStyle}>Cho phép ứng dụng thông báo</Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#2196F3' }}
              thumbColor={isNoti ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isNoti}
            />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.margin}>
            <Text style={styles.text}>Danh sách thông báo cho phép</Text>
          </View>

          <View style={{ ...styles.passwordStyle }}>
            <View style={{ width: '80%', height: 100, paddingTop: 12 }}>
              <View style={styles.itemNotiStyles}>
                <MaterialCommunityIcons
                  name="account-outline"
                  size={25}
                  color="#699BF7"
                />
                <Text style={styles.textStyle}>Hoạt động tài khoản</Text>
              </View>
              <Text style={{ fontSize: 12 }}>
                thông báo ngay lập tức khi phát hiện dấu hiệu đăng nhập bất
                thường trên thiết bị khác!
              </Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#2196F3' }}
              thumbColor={isAccount ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchAccount}
              value={isAccount}
            />
          </View>

          <View style={{ ...styles.passwordStyle }}>
            <View style={{ width: '75%', height: 100, paddingTop: 12 }}>
              <View style={styles.itemNotiStyles}>
                <MaterialCommunityIcons
                  name="account-outline"
                  size={25}
                  color="#699BF7"
                />
                <Text style={styles.textStyle}>
                  Thông báo thông tin chuyến bay
                </Text>
              </View>
              <Text style={{ fontSize: 12 }}>
                Nhắc nhở về giờ khởi hành chuyến bay hoặc thông báo về thay đổi
                bất ngờ trong danh sách đặt chỗ của bạn
              </Text>
            </View>
            <Switch
              trackColor={{ false: '#767577', true: '#2196F3' }}
              thumbColor={isFlights ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitchFlights}
              value={isFlights}
            />
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Setting')}
          style={styles.button}>
          <Text style={styles.textButton}>Xong</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F9',
  },
  margin: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  padding: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  passwordStyle: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
    paddingHorizontal: 20,
  },
  itemStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  itemNotiStyles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
  textStyle: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#3C5A99',
    marginHorizontal: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 15,
  },
});
