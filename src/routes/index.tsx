import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppRoutes from "./app.routes";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import Home from "../screens/Home";

export default function Routes(){
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(setUser)
        return subscriber;
    }, [])
    return(
        <NavigationContainer>
            {user ? <Home/> : <AppRoutes/>}
        </NavigationContainer>
    );
}