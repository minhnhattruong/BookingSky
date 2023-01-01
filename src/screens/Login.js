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
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState({ username: '', password: '' })
  const [checkAccount, setCheckAccount] = useState({ username: false, password: false })
  const [checkEye, setCheckEye] = useState(true);


  const onLogin = () => {
    if (account.username === '') {
      setCheckAccount(prev => ({ ...prev, username: true }))
    } else
      if (account.password === '') {
        setCheckAccount(prev => ({ ...prev, password: true }))
      } else {
        dispatch(signInApi(account)).unwrap()
      }
  }
  const onChange = (text, id) => {
    if (id == 1 && text != '') {
      setCheckAccount(prev => ({ ...prev, username: false }))
    } else
      if (id == 2 && text != '') {
        setCheckAccount(prev => ({ ...prev, password: false }))

      }
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        <View style={styles.mainContent}>
          <FontAwesome name='plane' size={70} color={'#3C5A99'} />
          <TextInput
            style={styles.input}
            onChangeText={(text) => { setAccount(prev => ({ ...prev, username: text })); onChange(text, 1) }}
            placeholder="Email hoặc số điện thoại"
          />
          {checkAccount.username ?
            <View>
              <Text style={{ color: 'red', fontSize: 12, }}>Bạn chưa nhập tài khoản</Text>
            </View>
            :
            null
          }
          <TextInput
            style={styles.input}
            onChangeText={(text) => { setAccount(prev => ({ ...prev, password: text })); onChange(text, 2) }}
            placeholder="Mật khẩu"
          />
          {checkAccount.password ?
            <View>
              <Text style={{ color: 'red', fontSize: 12 }}>Bạn chưa nhập mật khẩu</Text>
            </View>
            :
            null
          }
          <View style={styles.logins}>
            <TouchableOpacity
              style={styles.logins}
              onPress={onLogin}  >
              <Text style={{ fontSize: 15, color: 'white' }}>
                Đăng nhập</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.option}>
            <View style={{ width: 50, height: 1, backgroundColor: 'black', marginRight: 10 }}></View>
            <Text style={{ fontSize: 12, color: '#878787' }}>
              Hoặc đăng nhập bằng</Text>
            <View style={{ width: 50, height: 1, backgroundColor: 'black', marginLeft: 10 }}></View>
          </View>

          <View style={styles.Logo}>
            <TouchableOpacity>
              <Image style={{ width: '20%', paddingVertical: 22, paddingHorizontal: 22, height: 30, marginTop: 3 }}
                source={require('../assets/image/gg2.png')}>
              </Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name='facebook-square' size={50} color={'#3C5A99'} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.text2}> Bạn chưa có tài khoản ?</Text>
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
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 100,
    paddingHorizontal: 20,
    borderRadius: 40,



  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 0.3,
    padding: 10,
    alignItems: 'center',
    width: 270,
  },
  logins: {
    width: 270,
    alignItems: "center",
    backgroundColor: "#F70202",
    padding: 5,
    borderRadius: 20,
    margin: 5,
  },
  option: {
    height: 40,
    margin: 12,
    padding: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  Logo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,

  },
  text2: {
    fontSize: 12,
    color: '#699BF7',
    marginTop: 30,
  },

})

export default Login;

