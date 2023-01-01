import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function DropDown(props) {
  const data = props.data
  const value = props.value
  const onSelect = props.onSelect
  const [showOption, setShowOption] = useState(false);

  const onSelectItem = e => {
    setShowOption(false);
    onSelect(e);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.drowDownStyle}
        onPress={() => setShowOption(!showOption)}>
        <Text style={{ color: '#000' }}>
          {!!value ? value.name : 'Chọn...'}
        </Text>
        {showOption ? (
          <MaterialCommunityIcons name="chevron-up" size={18} />
        ) : (
          <MaterialCommunityIcons name="chevron-down" size={18} />
        )}
      </TouchableOpacity>
      {showOption && (
        <View
          style={{
            backgroundColor: '#fff',
            maxHeight: 140,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 1.00,

            elevation: 2,
          }
          }>
          <View>
            {data.map((e, i) =>
              <TouchableOpacity
                key={i}
                onPress={() => onSelectItem(e)}
                style={styles.selectItemStyle}>
                <Text style={{ color: '#000' }}>{e.name}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  drowDownStyle: {
    backgroundColor: '#fff',
    padding: 4,
    borderBottomWidth: 1,
    borderColor: '#3C5A99',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  selectItemStyle: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 4,
  },
});
