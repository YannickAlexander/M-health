import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Picker } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import '@codler/react-native-keyboard-aware-scroll-view';
import DateTimePicker from 'react-native-datepicker';

export default function FourStepRegister() {


  return (
    <View style={styles.formContainer}>

        {/* Section Email */}
        <View style={styles.section}>
            <TextInput 
                placeholder="Teléfono"
                style={styles.textInput}
            />
        </View>

        {/* Section Email */}

        <View style={styles.section}>
            <TextInput 
                placeholder="Correo electrónico"
                style={styles.textInput}
            />
        </View>

        {/* Section Email */}

        <View style={styles.section}>
            <TextInput 
                placeholder="Dirección"
                style={styles.textInput}
            />
        </View>

        
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

});
