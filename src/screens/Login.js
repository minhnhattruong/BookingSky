import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInApi } from '../reducers/AuthSlice';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState({ email: '', password: '' })
  const [checkAccount, setCheckAccount] = useState({ email: false, password: false })
  const [checkEye, setCheckEye] = useState(false);


  const onLogin = () => {
    if (account.email === '') {
      setCheckAccount(prev => ({ ...prev, email: true }))
    } else
      if (account.password === '') {
        setCheckAccount(prev => ({ ...prev, password: true }))
      } else {
        dispatch(signInApi(account)).unwrap()
      }
  }

  const onChange = (text, id) => {
    if (id == 1 && text != '') {
      setCheckAccount(prev => ({ ...prev, email: false }))
    } else
      if (id == 2 && text != '') {
        setCheckAccount(prev => ({ ...prev, password: false }))

      }
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        <View style={styles.mainContent}>
          <View style={{ width: '100%', alignItems: 'center', marginBottom: 20 }}>
            <Text style={{ color: '#000', fontWeight: '500', fontSize: 20 }}>Đăng Nhập</Text>
          </View>
          <TextInput
            style={styles.inputUser}
            onChangeText={(text) => { setAccount(prev => ({ ...prev, email: text })); onChange(text, 1) }}
            placeholder="Email hoặc số điện thoại"
          />
          {checkAccount.email ?
            <View>
              <Text style={{ color: 'red', fontSize: 12, }}>Bạn chưa nhập tài khoản</Text>
            </View>
            :
            null
          }
          <View style={styles.inputPass}>
            <TextInput
              style={{ flex: 7, height: 40 }}
              onChangeText={(text) => { setAccount(prev => ({ ...prev, password: text })); onChange(text, 2) }}
              placeholder="Mật khẩu"
              secureTextEntry={checkEye ? false : true}
            />
            <TouchableOpacity
              style={{ flex: 1, alignItems: 'center' }}
              onPressIn={() => setCheckEye(true)}
              onPressOut={() => setCheckEye(false)}
            >
              <AntDesign name='eyeo' size={18} color={'#000'} />
            </TouchableOpacity>
          </View>
          {checkAccount.password ?
            <View>
              <Text style={{ color: 'red', fontSize: 12 }}>Bạn chưa nhập mật khẩu</Text>
            </View>
            :
            null
          }
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={onLogin}  >
            <Text style={{ fontSize: 15, color: 'white' }}>
              Đăng nhập
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Signup')}>
            <Text style={{ fontSize: 12, color: '#699BF7', textDecorationLine: 'underline' }}> Bạn chưa có tài khoản ?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C5A99',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContent: {
    width: '85%',
    backgroundColor: '#fff',
    paddingVertical: 70,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginHorizontal: 20
  },
  inputUser: {
    marginTop: 15,
    height: 40,
    borderWidth: 0.5,
    borderColor: '#dadada',
    borderRadius: 10,
    padding: 10,
  },
  inputPass: {
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#dadada',
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  loginBtn: {
    marginTop: 30,
    height: 40,
    alignItems: 'center',
    backgroundColor: "#ff0000",
    padding: 10,
    borderRadius: 10,
  },
  signupBtn: {
    marginTop: 30,
    alignItems: 'center'
  },

})

export default Login;

