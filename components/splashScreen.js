import {View, StyleSheet, Image } from 'react-native';

export default function Splash({visibilidade}) {

      if(visibilidade){
          return (
            <View style={styles.container}>
            <Image style={styles.image}source={require('../assets/nubank1.png')}/>
            </View>
          );
    }else{
        return null;
    }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8A19D6',
    padding: 8,
  },
  image:{
    width:"100%",
  }
});
