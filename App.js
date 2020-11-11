import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import Navigation from "./app/navigations/Navigation";

import { LogBox, YellowBox } from 'react-native';
import _ from 'lodash';
import * as Sentry from "sentry-expo";


export default function App() {

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message


  return (
    <Navigation 
    />
  );
}
