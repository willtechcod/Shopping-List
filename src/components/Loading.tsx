import { View, ActivityIndicator } from "react-native";

export default function Loading() {
    return (
      <View >
        <ActivityIndicator size={10} color="#e5e5e5" />
      </View>
    );
}