import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../component/headers/Header';

export default function ChangePassword({ navigation }) {
  const [password, setPassword] = React.useState('');
  const [passwordNew, setPasswordNew] = React.useState('');
  const [passwordNewChange, setPasswordNewChange] = React.useState('');

  return (
    <View style={styles.container}>
      <Header title="Thay đổi mật khẩu" navigation={navigation} />
      <View style={{ marginTop: 10 }}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Mật khẩu hiện tại"
        />

        <TextInput
          style={styles.input}
          onChangeText={setPasswordNew}
          value={passwordNew}
          placeholder="Mật khẩu mới"
        />

        <TextInput
          style={styles.input}
          onChangeText={setPasswordNewChange}
          value={passwordNewChange}
          placeholder="Nhập lại mật khẩu mới"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textStyle}>Thay đổi mật khẩu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F9',
  },
  input: {
    // height: 40,
    marginBottom: 5,
    backgroundColor: '#fff',
    padding: 10,
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
  textStyle: {
    color: 'white',
    fontSize: 15,
  },
});
