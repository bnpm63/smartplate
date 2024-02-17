import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View, Text, Pressable, Image, TouchableHighlight} from 'react-native';




const Friends = () => {
 return (
    <View style={styles.container}>
        <View style={styles.container_1}>
            <Text style={{fontSize: 35, fontWeight: 'bold', textAlign: 'center'}}>
                Just a place holder
            </Text>
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

});


export default Friends;





