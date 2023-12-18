import { Text, View, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import Logo from '../assets/logo.svg';
export default function Preload() {
 return (
   <SafeAreaView style={style.container}>
    <Logo  width={360} height={360} />
    <ActivityIndicator
    size="large"
    color="#CAC6C6"
    style={{marginTop:30}}
    />
   </SafeAreaView>
  );
}

export const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
})