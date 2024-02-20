import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View, Text, Pressable, Image, TouchableHighlight} from 'react-native';


// import firebase from 'firebase/app';
// import 'firebase/auth';

// const signInWithGoogle = async () => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   try {
//     await firebase.auth().signInWithPopup(provider);
//     // User signed in successfully
//   } catch (error) {
//     // Handle errors
//   }
// };


const Login = () => {
 return (
    <View style={styles.container}>
        <View style={styles.container_1}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 1}}>
                <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 1}}>
                    <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center', color: 'white'}}>
                        Healthy habits begin here
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#969696'}}>
                        Sign in to your account
                    </Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 1}}>
                    <View style={styles.login_button}>
                        <Image source={require('../smartplate/assets/free-google-1772223-1507807.webp')} style={{height: 20, width: 20, marginRight: 5}} />
                        <Text style={{color: '#EDEDED', fontSize: 14, fontWeight: '500'}}> Sign in with Google</Text>
                    </View>
                    <View style={styles.login_button}>
                        <Image source={require('../smartplate/assets/user-solid.svg')} style={{height: 15, width: 15}} />
                        <Text style={{color: '#EDEDED', fontSize: 14, fontWeight: '500'}}> Continue as Guest</Text>
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
    flexDirection: 'row',
    borderRadius: 7,
    width: '100%',
    height: '32%',
 },

});


export default Login;





