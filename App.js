import {SafeAreaView, StyleSheet} from 'react-native';
import React, { useState, useEffect } from 'react';

// You can import supported modules from npm
//import { Card } from 'react-native-paper';

// or any files within the Snack
import Home from './components/Home';
import Splash from './components/splashScreen';

export default function App() {

  const [visibilidadeTelaSplash, setvisibilidadeTelaSplash ] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setvisibilidadeTelaSplash(false);
    },2000)
  },[]);



  return (
    <SafeAreaView style={styles.container}>

     <Splash
        visibilidade = {visibilidadeTelaSplash}
     />

     <Home
        visibilidade ={!visibilidadeTelaSplash}
     />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8A19D6',
  }
});
