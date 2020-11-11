import React from 'react'
import {  
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import RegisterForm from '../../components/Account/RegisterForm';
import '@codler/react-native-keyboard-aware-scroll-view';

export default function LoginScreen() {
    return (
        <ScrollView>
            <View style={styles.viewContainer}>
                <HeaderRegister />
                <RegisterForm />
                <LoginAuth />
            </View>
        </ScrollView>
    )
}

function HeaderRegister() {
    return(
        <View>
            <Text style={styles.title}>Regístrate</Text>
        </View>
    )
}

function LoginAuth() {

    const navigation = useNavigation();

    return(
        <View style={styles.registerContainer}>
            <Text style={styles.textRegister}>¿Ya tienes cuenta?</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("login")}
            >
            <Text style={styles.touchTextRegister}>Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewContainer: {
        marginRight: 40,
        marginLeft: 40,
        paddingVertical: 180,
    },
    title: {
        color: '#3465d9',
        fontWeight: 'bold',
        fontSize: 35,
    },
    text: {
        color: 'gray',
        marginTop: 15,
    },
    registerContainer: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textRegister: {
        textAlign: 'center',
        color: 'gray',
    },
    touchTextRegister: {
        color: '#3465d9',
        marginLeft: 3, 
        fontWeight: 'bold',
    }
})