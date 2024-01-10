import React, { useState } from 'react';
import { Text, 
    View, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity,
 } from 'react-native';
 import { useNavigation } from '@react-navigation/native';

import { CheckBox } from '@rneui/themed';
import Loading from './Loading';


export default function List() {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);
    const [checked, setChecked] = React.useState(false);
     const toggleCheckbox = () => setChecked(!checked);

    const Data = [
        {
            "id": "1",
            "item": "Café",
            "quantity": 2,
            "cartItem": false
        },
        {
            "id": "2",
            "item": "Pão",
            "quantity": 10,
            "cartItem": false
        },
        {
            "id": "3",
            "item": "Cerveja",
            "quantity": 12,
            "cartItem": false
        }
    ]

    function handleNewList(){
        navigation.navigate('NewList')
    }

 return (
   <View style={styles.container}>
    <View style={styles.content}>
    
        <FlatList
    data={Data}
    keyExtractor={item => item.id}
    renderItem={({item}) => (
        <View style={styles.list}>

            <TouchableOpacity onPress={toggleCheckbox} style={styles.list}>

            <CheckBox
           checked={checked}
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon={'checkbox-blank-outline'}
         />
            <View style={styles.areaItem}>
            <Text style={styles.text}>{item.item}</Text>
            <Text style={styles.itemText}>un</Text>
            <Text style={styles.text}>{item.quantity}</Text>
            </View>

        </TouchableOpacity>

        </View>
    ) }
    
    />
    
    </View>
    <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btnFinalizar}>
            <Text style={styles.title}>Finalizar lista</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNewList} style={styles.btnCriar}>
            <Text style={styles.title}>Editar Lista</Text>
        </TouchableOpacity>
    </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4
    },
    content: {
        borderWidth: 1,
        borderColor: '#000',
        width: '90%',
        height: 'auto',
        borderRadius: 12,
        paddingLeft: 4,
        paddingRight: 4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    list: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        marginLeft: 16,
        fontWeight: 'bold'
    },
    itemText: {
        marginLeft: 14,
        fontWeight: 'bold',
        color: '#CAC6C6',
        
    },
    btnArea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        marginTop: 50
    },
    btnCriar: {
        width: 120,
        height: 36,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3ED0C7'
    },
    btnFinalizar: {
        width: 120,
        height: 36,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EBFF06'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1d1d2e',
    },
    areaItem: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: -30
    }
});