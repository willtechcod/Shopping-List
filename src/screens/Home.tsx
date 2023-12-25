import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { useState } from 'react';
import List from '../components/List';
import MyList from './MyList';
import NewList from './NewList';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

 return (
   <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Sua Lista de Hoje.</Text>
    <Header />
    </View>
    <NewList/>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    marginTop:30,
    marginBottom: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
    marginTop: 40
  }
})