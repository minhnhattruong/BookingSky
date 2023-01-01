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

export default function Security({ navigation }) {
  const [isFadeID, setIsFadeID] = useState(false);
  const toggleSwitch = () => setIsFadeID(previousState => !previousState);
  return (
    <View style={styles.container}>
      <Header title="Mật khẩu & Bảo mật" navigation={navigation} />
      <ScrollView>
        <View>
          <View style={styles.margin}>
            <Text style={styles.text}>Mật khẩu tài khoản</Text>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ChangePassword')}
            style={{ ...styles.passwordStyle }}>
            <View style={styles.itemStyles}>
              <Text style={styles.textStyle}>Thay đổi mật khẩu</Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={18}
              color="#699BF7"
            />
          </TouchableOpacity>

          <TouchableOpacity style={{ ...styles.passwordStyle }}>
            <View style={styles.itemStyles}>
              <Text style={styles.textStyle}>Quên mật khẩu</Text>
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
            <Text style={styles.text}>Bảo mật tài khoản</Text>
          </View>

          <View style={{ ...styles.passwordStyle }}>
            <View style={styles.itemStyles}>
              <Text style={styles.textStyle}>Cho phép xác thực Face ID</Text>
            </View>

            <Switch
              trackColor={{ false: '#767577', true: '#2196F3' }}
              thumbColor={isFadeID ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isFadeID}
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
