import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Info() {

  const navigation = useNavigation();

  function handleNext(){
    navigation.navigate('SignIn');
  }
 return (
   <SafeAreaView style={style.container}>
    <Text style={style.title}>Shopping List</Text>
      <View style={style.content}>
      <Text style={style.subtitle}>
        Já pensou ter a sua lista de compras a um click e na palma de sua mão, agora você não precisa
        mais ficar preocupado em esquecer algum produto em sua lista de compra.
        experimente nosso app.
      </Text>
      </View>
      <View style={{marginTop: 280}}>
        <TouchableOpacity onPress={handleNext} activeOpacity={0.7} style={style.button}>
          <Text style={style.buttonText}>Avancar</Text>
          <Feather  name='chevron-right'size={26} color="#1D1D2E" />
        </TouchableOpacity>
      </View>
   </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    marginTop: 80
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    padding: 2,
    marginBottom: 55,
    color: '#000'
  },
  subtitle:{
    color: '#1D1D2E',
    alignItems: 'center',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '600',
  },
  content:{
    width: 320
  },
  button:{
    display: 'flex',
    flexDirection: 'row',
    width: 335,
    height: 53,
    backgroundColor: '#40C25D',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonText:{
    fontSize: 20,
    color: '#1D1D2E',
    padding: 10,
    fontWeight: 'bold',
    marginRight: 90,
    marginLeft: 120
  }
})