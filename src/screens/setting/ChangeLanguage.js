import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../../component/headers/Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LANGUAGES = [
  {
    id: 1,
    language: 'Tiếng Anh',
  },
  {
    id: 2,
    language: 'Tiếng Trung',
  },
  {
    id: 3,
    language: 'Tiếng Nhật',
  },
  {
    id: 4,
    language: 'Tiếng Việt',
  },
];

export default function ChangeLanguage({ navigation }) {
  const [tick, setTick] = useState(4);

  const handlePress = id => {
    setTick(id);
  };

  return (
    <View style={styles.container}>
      <Header title="Ngôn ngữ" navigation={navigation} />

      {LANGUAGES.map((e, i) => (
        <Pressable
          key={i}
          onPress={() => {
            handlePress(e.id);
          }}
          style={styles.itemStyle}>
          <Text style={styles.textStyle}>{e.language}</Text>

          {tick == e.id && (
            <View style={styles.boderCheck}>
              <MaterialCommunityIcons name="check" size={18} color="#fff" />
            </View>
          )}
        </Pressable>
      ))}

      <TouchableOpacity
        onPress={() => navigation.navigate('Setting')}
        style={styles.button}>
        <Text style={styles.textButton}>Xong</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF1F9',
  },
  itemStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textStyle: {
    color: '#000',
    fontWeight: '500',
    fontSize: 16,
  },
  boderCheck: {
    backgroundColor: '#4ECB71',
    borderRadius: 20,
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
