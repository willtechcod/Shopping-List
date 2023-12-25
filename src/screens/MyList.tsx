import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import List from '../components/List';
import EmpityList from '../components/EmpityList';

export default function MyList() {
    const [isList, setIsList] = useState(false);
    const [isLoading, setIsloading] = useState(false);

 return (
   <>
    { isList ? <EmpityList/> : <List/>}
   </>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: 'auto'
    }
});