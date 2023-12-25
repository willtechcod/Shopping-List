import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function Loading() {
    return (
      <View style={{ alignItems: 'center', justifyContent:'center', flex:1, height:30}}>
        <ActivityIndicator  size={24} color="#878383" />
      </View>
    );
}

