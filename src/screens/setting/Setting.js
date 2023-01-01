import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../component/headers/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Setting({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="Cài đặt" navigation={navigation} />
      <ScrollView>
        <View>
          <View style={styles.margin}>
            <Text style={styles.text}>Bảo mật tài khoản</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Security')}
            style={{ ...styles.passwordStyle }}>
            <View style={styles.itemStyles}>
              <MaterialCommunityIcons
                name="lock-outline"
                size={25}
                color="#699BF7"
              />
              <Text style={styles.textStyle}>Mật khẩu & Bảo mật</Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={18}
              color="#699BF7"
            />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.margin}>
            <Text style={styles.text}>Cài đặt chung</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ChangeLanguage')}
            style={{ ...styles.passwordStyle }}>
            <View style={styles.itemStyles}>
              <MaterialCommunityIcons
                name="translate"
                size={25}
                color="#699BF7"
              />
              <Text style={styles.textStyle}>Ngôn ngữ</Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={18}
              color="#699BF7"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ChangeCurrency')}
            style={{ ...styles.passwordStyle }}>
            <View style={styles.itemStyles}>
              <MaterialCommunityIcons
                name="currency-usd"
                size={25}
                color="#699BF7"
              />
              <Text style={styles.textStyle}>Tiền tệ</Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={18}
              color="#699BF7"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SettingNotification')}
            style={{ ...styles.passwordStyle }}>
            <View style={styles.itemStyles}>
              <MaterialCommunityIcons
                name="bell-outline"
                size={25}
                color="#699BF7"
              />
              <Text style={styles.textStyle}>Thông báo</Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={18}
              color="#699BF7"
            />
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.margin}>
            <Text style={styles.text}>Nhà phát triển</Text>
          </View>

          <View style={{ ...styles.passwordStyle }}>
            <View style={styles.itemStyles}>
              <MaterialCommunityIcons
                name="help-circle-outline"
                size={25}
                color="#699BF7"
              />
              <Text style={styles.textStyle}>Hỏi đáp</Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={18}
              color="#699BF7"
            />
          </View>

          <View style={{ ...styles.passwordStyle }}>
            <View style={styles.itemStyles}>
              <MaterialCommunityIcons
                name="developer-board"
                size={25}
                color="#699BF7"
              />
              <Text style={styles.textStyle}>Phiên bản ứng dụng</Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={18}
              color="#699BF7"
            />
          </View>
        </View>
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
    paddingHorizontal: 20,
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
  text: {
    fontSize: 15,
    color: '#000',
  },
  textStyle: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
});
