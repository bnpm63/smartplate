import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View, Text, Pressable, Image, TouchableHighlight} from 'react-native';




const Login = () => {
 return (
  <NavigationContainer>
    <View style={styles.container}>
        <View style={styles.container_1}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 1}}>
                <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 1}}>
                    <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center'}}>
                        Healthy habits begin here
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: '300', textAlign: 'center', color: '#969696'}}>
                        Sign in to your account
                    </Text>
                </View>
                <View style={{}}>

                </View>

            </View>
        </View>

    </View>
    
  </NavigationContainer>
 );
};


const styles = StyleSheet.create({
 container: {
  backgroundColor: 'black',
  flex: 1,
 },

 container_1: {
   flexDirection: 'column',
   flex: 10,
   marginTop: 75,
   marginBottom: 30,
   marginLeft: 30,
   marginRight: 30, 
 },

});


export default Login;





