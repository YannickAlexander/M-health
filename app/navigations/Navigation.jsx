import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import '@codler/react-native-keyboard-aware-scroll-view';

// import AccountStack from "./AccountStack";
// import SwiperScreen from '../screens/Account /SwiperScreen';

import LoginScreen from '../screens/Account /LoginScreen';
import RegisterScreen from '../screens/Account /RegisterScreen';
// import SwiperForm from '../components/Account/SwiperForm';
// const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Navigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen 
                    name="swiper"
                    component={SwiperForm}
                    options={{headerShown: false}}
                /> */}
                <Stack.Screen
                    name="login"
                    component={LoginScreen}
                    options={{headerShown: false}}
                    // options={{ title: "Iniciar Sesión"}}
                />
                <Stack.Screen 
                    name="register"
                    component={RegisterScreen}
                    options={{headerShown: false}}
                    // options={{ title: "Registro"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}