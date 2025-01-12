import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';

const CreateScreen = ({data, setdata}) => {
  const [itemName, setitemName] = useState('');
  const [stock, setstock] = useState('');

  const additemHandler = () => {
    const newItem = {
      id: Date.now(),
      name: itemName,
      stock: stock,
    };

    setdata([...data, newItem]);
    setitemName('');
    setstock('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter item name"
        placeholderTextColor="#999"
        style={styles.input}
        value={itemName}
        onChangeText={item => setitemName(item)}
      />
      <TextInput
        placeholder="Enter item quantity"
        placeholderTextColor="#999"
        style={styles.input}
        value={stock}
        onChangeText={item => setstock(item)}
      />
      <Pressable style={styles.btn} onPress={() => additemHandler()}>
        <Text style={styles.btnText}>Add Item in Stock</Text>
      </Pressable>

      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>All Items in Stock</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View
            style={[
              styles.itemContainer,
              {backgroundColor: item.stock < 20 ? '#FFCCCC' : '#D7F68FFF'},
            ]}>
            <Text style={styles.itemText}>{item.name}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 15,
              }}>
              <Text style={styles.itemText}>
                {item.stock} {item.unit}
              </Text>
              <Pressable>
                <Text>Edit</Text>
              </Pressable>
              <Pressable>
                <Text>Delete</Text>
              </Pressable>
            </View>
          </View>
        )}
        contentContainerStyle={{gap: 10}}
      />
    </View>
  );
};

export default CreateScreen;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 10,
  },
  input: {
    borderWidth: 1,
    padding: '2%',
    borderRadius: 7,
    borderColor: 'green',
  },
  btn: {
    padding: '2%',
    borderRadius: 7,
    backgroundColor: '#CABFEEEF',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 14,
    fontWeight: '500',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 14,
    fontWeight: '500',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
  },
  itemText: {
    fontWeight: '400',
    fontSize: 14,
  },
});
