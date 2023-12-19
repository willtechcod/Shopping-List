import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Input from '../components/Input';

export default function SignIn() {
 return (
   <SafeAreaView style={style.container}>
    <View style={style.content}>
      <Text style={style.title}>Faça Login</Text>
    </View>
      <Input
      placeholder='E-mail'
      keyboardType='email-address'
      secureTextEntry={false}
      />
      <Input
      placeholder='Senha'
      keyboardType='email-address'
      secureTextEntry={true}
      />
      <TouchableOpacity activeOpacity={0.7} style={style.button}>
        <Text style={style.buttonText}>Entrar</Text>
    </TouchableOpacity>
    <View style={{
        display:'flex',
        flexDirection:'row', 
        gap:8, 
        alignItems: 'center', 
        justifyContent:'center',
        marginTop: 20
    }}>
        <View style={{width:98, height:1, backgroundColor:'#1d1d2e'}} />
        <Text style={style.subtitle}>ou</Text>
        <View style={{width:98, height:1, backgroundColor:'#1d1d2e'}} />
    </View>
   </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d1d2e',
    padding: 4
  },
  content: {
    marginTop: 50
  },
  button:{
    width:314,
    height:53,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#3ED0C7',
},
buttonText: {
    fontSize:20,
    color: '#1d1d2e',
    fontWeight: 'bold'
},
subtitle:{
  fontSize:16,
  fontWeight: 'bold'
}
})