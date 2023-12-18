import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Preload from '../screens/Preload';
import Info from '../screens/Info';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import NewList from '../screens/NewList';

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="Info" component={Info} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewList" component={NewList} />
    </Stack.Navigator>
  );
}

export default AppRoutes;