import React, { useState } from 'react';
import {
  SafeAreaView, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity,
  FlatList,
  View,
   } from 'react-native';

  import { Feather } from '@expo/vector-icons';

export default function NewList() {
  const [item, setItem] = useState();
  const [quantity, setQuantity] = useState();
  const [mayList, setMayList] = useState();

  const Data = [
    {
      "id": "1",
      "item": "Café",
      "quantity": "1"
    },
    {
      "id": "2",
      "item": "Feijão",
      "quantity": "2"
    },
    {
      "id": "3",
      "item": "Macarrão",
      "quantity": "2"
    },
    {
      "id": "4",
      "item": "Carne",
      "quantity": "2"
    },
    {
      "id": "5",
      "item": "Pão Francês",
      "quantity": "10"
    },
    {
      "id": "6",
      "item": "cerveja",
      "quantity": "18"
    },
    {
      "id": "7",
      "item": "Pão Francês",
      "quantity": "10"
    },
  ]

 return (
   <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <TextInput
      style={styles.input}
      placeholder='nome do item'
      />
      <TextInput
      style={styles.inputQtd}
      placeholder='Qtd'
      />
      <TouchableOpacity style={styles.btnAdd}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
    <View style={{width: '90%',marginLeft:15, height: 1, backgroundColor: '#1d1d2e', marginTop: 12}}/>
    <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
      <Text style={styles.title}>ops! adicione itens a sua lista.</Text>
    </View>
    <View style={styles.listArea}>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={Data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <View style={styles.itemList}>
              <Text >{item.quantity} - </Text>
              <Text style={styles.itemText}>{item.item}</Text>
             
              <TouchableOpacity style={styles.btnList}>
                <Feather name='trash-2' size={22} color='#1d1d23' />
              </TouchableOpacity>
              
            </View>
        )}
      />
    </View>
    <View style={styles.btn}>
      <TouchableOpacity style={styles.btnCreateList}>
        <Text style={styles.btnCreateListText}>Criar Lista</Text>
      </TouchableOpacity>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: 'auto',
    marginTop: 15
  },
  content: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  input: {
    width: 100,
    height: 35,
    padding: 6,
    marginRight: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1d1d23',
    borderRadius: 8,
  },
  inputQtd: {
    width: 50,
    height: 35,
    padding: 6,
    marginRight: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1d1d23',
    borderRadius: 8,
  },
  btnAdd: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#BAD0ED',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    color: '#1d1d2e',
    fontSize: 18
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  listArea: {
    width: '90%',
    height: '35%',
    padding: 8,
    borderWidth: 1,
    borderColor: '#1d1d2e',
    marginHorizontal: 12,
    marginTop: 20,
    borderRadius: 10
  },
  itemList: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    padding: 6,
    justifyContent: 'space-between'
  },
  itemText: {
    fontWeight: 'bold',
    color: '#1d1d2e',
    left: -80,

  },
  btnList: {
    width: 25,
    height: 25
  },
  icon: {
    marginRight: 1
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  btnCreateList: {
    width: 314,
    height: 53,
    backgroundColor: '#3ED0C7',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnCreateListText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1d1d2e'
  }
});