import React from 'react'
import {  
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import LoginForm from '../../components/Account/LoginForm';
import '@codler/react-native-keyboard-aware-scroll-view';

export default function LoginScreen() {
    return (
        <ScrollView>
            <View style={styles.viewContainer}>
                <HeaderLogin />
                <LoginForm />
                <CreateAccount />
            </View>
        </ScrollView>
    )
}

function HeaderLogin() {
    return(
        <View>
            <Text style={styles.title}>Iniciar sesión</Text>
            <Text style={styles.text}>Autenticación con correo electrónico y contraseña</Text>
        </View>
    )
}

function CreateAccount() {

    const navigation = useNavigation();

    return(
        <View style={styles.registerContainer}>
            <Text style={styles.textRegister}>¿No tienes cuenta?</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("register")}
            >
            <Text style={styles.touchTextRegister}>Regístrate</Text>
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


