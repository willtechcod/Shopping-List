import { View, ActivityIndicator, StyleSheet } from "react-native";

export default function Loading() {
    return (
      <View >
        <ActivityIndicator  size={24} color="#878383" />
      </View>
    );
}

