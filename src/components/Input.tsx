import { StyleSheet, TextInput, View } from 'react-native';

export default function Input({placeholder,keyboardType,secureTextEntry}) {
 return (
   <View style={style.conatiner}>
    <TextInput
        placeholder={placeholder}
        autoCapitalize='none'
        placeholderTextColor='#1d1d2e'
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={style.Input}
    />
   </View>
  );
}

const style = StyleSheet.create({
    conatiner:{
        marginTop: 20
    },
    Input:{
        width:314,
        height:53,
        marginBottom:1,
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#E5E5E5',
        fontSize:18,
    }
})