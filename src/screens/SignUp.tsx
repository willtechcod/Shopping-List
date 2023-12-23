import { Text, View, SafeAreaView, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Input from '../components/Input';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function SignUp() {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [confirmePassword, setConfirmePassword] = useState();

  function handleSignIn(){
    navigation.navigate('SignIn');
  }

  function handleNewAccount(){
    if (!email || !password) {
      return Alert.alert('Cadastrar', 'Informe e-mail e senha.');
    }

    if (confirmePassword !== password) {
      return Alert.alert('Cadastrar', 'A confirmação de senha está diferente da senha.');
    }

    setIsLoading(true);
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => Alert.alert('Conta', 'Cadastrado com sucesso!'))
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false))
  }
 return (
   <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Crie sua conta</Text>
    </View>
    <Input
      placeholder='E-mail'
      keyboardType='email-address'
      secureTextEntry={false}
      onChangeText={email}
    />
    <Input
      placeholder='Senha'
      keyboardType='email-address'
      secureTextEntry={false}
      onChangeText={password}
    />
    <Input
      placeholder='Confirme sua senha'
      keyboardType='email-address'
      secureTextEntry={false}
      onChangeText={confirmePassword}
    />
    <TouchableOpacity onPress={handleNewAccount} activeOpacity={0.7} style={styles.button}>
        <Text style={styles.buttonText}>Cadstrar</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={handleSignIn} style={styles.link}>
        <Text style={styles.linkText}>Já pussui conta? faça login</Text>
      </TouchableOpacity>
      
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
  },
  content: {
    marginTop: 50
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1d1d2e',
    padding: 4
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
link:{
  padding:4,
  marginTop:20
},
linkText:{
  fontSize:14,
  fontWeight: 'bold'
},
})