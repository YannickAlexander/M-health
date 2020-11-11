import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import '@codler/react-native-keyboard-aware-scroll-view';

export default function LoginForm() {

  return (
    <View style={styles.formContainer}>

        {/* Section Email */}
        <View style={styles.section}>
            <TextInput 
                placeholder="Correo electrónico"
                style={styles.textInput}
                autoFocus={true}
            />
        </View>

        {/* Section Password */}
        <View style={styles.section}>
            <TextInput 
                placeholder="Contraseña"
                style={styles.textInput}
                secureTextEntry
                autoFocus={true}
            />
        </View>

        <TouchableOpacity style={styles.login}>
            <Text style={styles.textLogin}>Ingresar</Text>
        </TouchableOpacity>

    </View>
  );
}



const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#ebebe4',
    marginBottom: 30,
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 15,
    borderColor: '#dee2e6',
    backgroundColor: '#f0efeb',
  },
  textInput: {
    flex: 1, 
    paddingLeft: 10,
    borderColor: 'gray',
    height: 25,
    backgroundColor: '#f0efeb',
  },
  login: {
    width: '100%',
    height: 40,
    backgroundColor: '#3465d9',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 5,
  },
  textLogin: {
      fontWeight: 'bold',
      color: '#fff',
  }
});
