import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AllItems from '../components/AllItems';
import CreateScreen from '../components/CreateScreen';
import LowStock from '../components/LowStock';

//Dummy data
// export const data = [
//   {id: 1, name: 'Wheat', stock: '5', unit: 'kg'},
//   {id: 2, name: 'Maize', stock: '20', unit: 'kg'},
//   {id: 3, name: 'Corn', stock: '10', unit: 'kg'},
//   {id: 4, name: 'Basmati Rice', stock: '125', unit: 'kg'},
//   {id: 5, name: 'Oil', stock: '50', unit: 'litres'},
//   {id: 6, name: 'Turmeric', stock: '12', unit: 'kg'},
//   {id: 7, name: 'Chilli', stock: '50', unit: 'kg'},
//   {id: 8, name: 'Mustard', stock: '7', unit: 'kg'},
//   {id: 9, name: 'Milk', stock: '30', unit: 'litres'},
//   {id: 10, name: 'Butter', stock: '500', unit: 'grams'},
// ];

const HomeScreen = () => {
  const [view, setview] = useState(0);
  const [data, setdata] = useState([
    {id: 1, name: 'Wheat', stock: '5', unit: 'kg'},
    {id: 2, name: 'Maize', stock: '20', unit: 'kg'},
    {id: 3, name: 'Corn', stock: '10', unit: 'kg'},
    {id: 4, name: 'Basmati Rice', stock: '125', unit: 'kg'},
    {id: 5, name: 'Oil', stock: '50', unit: 'litres'},
    {id: 6, name: 'Turmeric', stock: '12', unit: 'kg'},
    {id: 7, name: 'Chilli', stock: '50', unit: 'kg'},
    {id: 8, name: 'Mustard', stock: '7', unit: 'kg'},
    {id: 9, name: 'Milk', stock: '30', unit: 'litres'},
    {id: 10, name: 'Butter', stock: '500', unit: 'grams'},
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setview(0)}>
          <Text style={[styles.btnText, view === 0 ? {color: 'white'} : null]}>
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 1 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setview(1)}>
          <Text style={[styles.btnText, view === 1 ? {color: 'white'} : null]}>
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 2 ? {backgroundColor: '#72C37AFF'} : null,
          ]}
          onPress={() => setview(2)}>
          <Text style={[styles.btnText, view === 2 ? {color: 'white'} : null]}>
            Create
          </Text>
        </Pressable>
      </View>
      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data={data.filter(item => item.stock < 20)} />}
      {view === 2 && <CreateScreen data={data} setdata={setdata} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '4%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkGray',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: '10',
    marginVertical: 10,
  },
  button: {
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'green',
  },
  btnText: {
    color: 'green',
    fontSize: 12,
  },
});
