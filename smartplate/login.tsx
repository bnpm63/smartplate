import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View, Text, Pressable, Image, TouchableHighlight} from 'react-native';




const Login = () => {
 return (
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
                <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 1}}>
                    <View style={styles.login_button}>
                        <Image source={require('../smartplate/assets/free-google-1772223-1507807.webp')} style={{}} />
                        <Text style={{color: 'EDEDED', fontSize: '13', fontWeight: '300'}}> Sign in with Google</Text>
                    </View>
                    <View style={styles.login_button}>
                        <Image source={require('../smartplate/assets/user-solid.svg')} style={{}} />
                        <Text style={{color: 'EDEDED', fontSize: '13', fontWeight: '300'}}> Sign in with Google</Text>
                    </View>
                </View>

            </View>
        </View>

    </View>
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

 login_button: {
    backgroundColor: '#1D1D1D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
 },

});


export default Login;





