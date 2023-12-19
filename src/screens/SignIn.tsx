import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import Input from '../components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function SignIn() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  function handleSignUp (){
    navigation.navigate('SignUp');
  }

  function handleSignin(){
    if (!email || !password) {
      return Alert.alert('Entrar', 'Informe e-mail e senha.');
    }
    setIsLoading(true);
  }

 return (
   <SafeAreaView style={style.container}>
    <View style={style.content}>
      <Text style={style.title}>Faça Login</Text>
    </View>
      <Input
      placeholder='E-mail'
      keyboardType='email-address'
      secureTextEntry={false}
      onChangeText={setEmail}
      />
      <Input
      placeholder='Senha'
      keyboardType='email-address'
      secureTextEntry={true}
      onChangeText={setPassword}
      />
      <TouchableOpacity 
      onPress={handleSignin} 
      activeOpacity={0.7} 
      style={style.button}
      >
        <Text style={style.buttonText}>Entrar</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={handleSignUp} style={style.link}>
        <Text style={style.linkText}>Ainda não pussui uma conta? Cadastre-se</Text>
      </TouchableOpacity>

    <View style={{
        display:'flex',
        flexDirection:'row', 
        gap:8, 
        alignItems: 'center', 
        justifyContent:'center',
        marginTop: 12,
        marginBottom: 20
    }}>
        <View style={{width:98, height:1, backgroundColor:'#1d1d2e'}} />
        <Text style={style.subtitle}>ou</Text>
        <View style={{width:98, height:1, backgroundColor:'#1d1d2e'}} />
    </View>
    <TouchableOpacity activeOpacity={0.5} style={style.facebook}>
      <Text style={style.facebookText}>Entar com Facebook</Text>
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={0.5} style={style.google}>
      <Text style={style.googleText}>Entar com Google</Text>
    </TouchableOpacity>
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
  fontWeight: 'bold',
},
link:{
  padding:4,
  marginTop:20
},
linkText:{
  fontSize:14,
  fontWeight: 'bold'
},
facebook:{
  width: 314,
  height: 43,
  marginBottom: 12,
  alignItems:'center',
  justifyContent: 'center',
  backgroundColor: '#1877F2',
  borderRadius: 10
},
facebookText:{
  fontSize:18,
  fontWeight: 'bold',
  color: '#FFF'
},
google:{
  width: 314,
  height: 43,
  alignItems:'center',
  justifyContent: 'center',
  backgroundColor: 'transparent',
  borderWidth: 1,
  borderColor: '#000',
  borderRadius: 10
},
googleText:{
  fontSize:18,
  fontWeight: 'bold',
  color: '#1d1d2e'
}
})