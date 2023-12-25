import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Error from '../assets/error.svg';
import { TouchableOpacity } from 'react-native';

export default function EmpityList() {
    const navigation = useNavigation();

    function handleNewList(){
        navigation.navigate('NewList');
    }
 return (
   <View style={styles.container}>
    <Text style={styles.title}>ops! sem itens na lista..</Text>
    <View style={styles.svg}>
        <Error width={140} />
    </View>

    <TouchableOpacity onPress={handleNewList} activeOpacity={0.7} style={styles.add}>
        <Text style={styles.addText}>Criar Lista</Text>
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1d1d2e'
    },
    svg: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    add: {
        width: 314,
        height: 53,
        backgroundColor: '#3ED0C7',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    addText: {
        color: '#1d1d2e',
        fontSize: 18,
        fontWeight: 'bold'
    }
});