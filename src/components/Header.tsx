import { View, StyleSheet, TouchableOpacity } from 'react-native';
import IconButton from "../assets/signout.svg";
import auth from '@react-native-firebase/auth';

export default function Header() {

    function handleSignOut(){
        auth().signOut();
    }

 return (
   <TouchableOpacity onPress={handleSignOut} style={styles.container}>
        <IconButton
        width={26}
        height={26}
        color="#1d1d2e"
        />
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        right: -80,
        marginTop: 40
    }
})