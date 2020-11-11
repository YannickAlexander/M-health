import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView, SafeAreaView } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import '@codler/react-native-keyboard-aware-scroll-view';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

import FirstStepRegister from './RegisterSteps/FirstStepRegister';
import SecondStepRegister from './RegisterSteps/SecondStepRegister';
import ThirdStepRegister from "./RegisterSteps/ThirdStepRegister";
import FourStepRegister from './RegisterSteps/FourStepRegister';

import RNPickerSelect from 'react-native-picker-select';


export default function RegisterForm() {

  return (
    <View style={{flex: 1}}>
        <ProgressSteps 
            completedProgressBarColor="#3465d9"
            completedStepIconColor="#3465d9"
            activeStepIconBorderColor="#3465d9"
            activeLabelColor="#3465d9">

            <ProgressStep 
                nextBtnTextStyle={styles.text} 
                nextBtnStyle={styles.buttonNext} 
                label="Usuario"
                nextBtnText="Siguiente">
                <View style={{ alignItems: 'center' }}>
                    <FirstStepRegister />
                </View>
            </ProgressStep>

            <ProgressStep 
                nextBtnTextStyle={styles.text} 
                nextBtnStyle={styles.buttonNext} 
                previousBtnStyle={styles.buttonPrevious}
                previousBtnTextStyle={styles.text}
                label="Datos"
                nextBtnText="Siguiente"
                previousBtnText="Anterior">
                <View style={{ alignItems: 'center' }}>
                    <SecondStepRegister />
                </View>
            </ProgressStep>

            <ProgressStep 
                nextBtnTextStyle={styles.text} 
                nextBtnStyle={styles.buttonNext}
                previousBtnStyle={styles.buttonPrevious}
                previousBtnTextStyle={styles.text}
                label="Ubicación"
                nextBtnText="Siguiente"
                previousBtnText="Anterior">
                <View>
                    <ThirdStepRegister />
                </View>
            </ProgressStep>

            <ProgressStep 
                nextBtnTextStyle={styles.text} 
                nextBtnStyle={styles.buttonNext}
                previousBtnStyle={styles.buttonPrevious}
                previousBtnTextStyle={styles.text}
                label="Contacto"
                finishBtnText="Regístrar"
                previousBtnText="Anterior">
                <View style={{ alignItems: 'center' }}>
                    <FourStepRegister />
                </View>
            </ProgressStep>


        </ProgressSteps>
    </View>

  );
}

const styles = StyleSheet.create({
    buttonNext: {
        backgroundColor: '#3465d9',
        padding: 10,
        borderRadius: 5,
        marginRight: -60,
    },
    buttonPrevious: {
        backgroundColor: '#3465d9',
        padding: 10,
        borderRadius: 5,
        marginLeft: -60,
    },
    text: {
        color: '#fff',
    },
})