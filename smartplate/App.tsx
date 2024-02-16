import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View, Text, Pressable, Image, TouchableHighlight} from 'react-native';




const App = () => {
 return (
  <NavigationContainer>
    <View style={styles.container}>
      <View style={styles.container_1}>
        <View style={styles.top_nav}>
          <View style={styles.user}>
            <Image source={require('/Users/bph/Documents/GitHub/smartplate/smartplate/assets/favicon.png')} style={styles.pfp} />
            <View style={styles.username}>
              <Text style={{fontSize: 15, color: 'white', fontWeight: 600}}>
                Hi Jacob
              </Text>
              <Text style={{fontSize: 12, color: '#626262', fontWeight: 600}}>
                Let's see your progress
              </Text>
            </View>
          </View>
          <View style={styles.settings}>
            <View style={styles.settings_lines}></View>
            <View style={styles.settings_lines}></View>
          </View>
        </View>

        <View style={styles.progress}>
          <View style={{flex: 1}}></View>
          <Text style={styles.header}>
            My Progress
          </Text>
          <View style={styles.stats}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 100, fontWeight: 600, color: 'white' }}>74%</Text>
              <Text style={{ fontSize: 20, fontWeight: 500, color: '#666666', marginBottom: 20, marginLeft: 10 }}>completed</Text>
            </View>
          </View>
          <View style={{flex: 1}}></View>
        </View>

        <View style={styles.lower}>
          <View style={styles.goals}>
            <Text style={styles.header}>
              Today's Goals
            </Text>
            <View style={styles.goal_stack}>
              <View style={styles.verticleLine}></View>
              <View style={styles.goal_stats}>
                <Text style={{fontSize: 13, fontWeight: 500, color: '#666666'}}>
                 Calories
                </Text>
                <Text style={{fontSize: 16, fontWeight: 500, color: '#C9C9C9'}}>
                 320/400
                </Text>
              </View>
              <View style={styles.verticleLine}></View>
              <View style={styles.goal_stats}>
                <Text style={{fontSize: 13, fontWeight: 500, color: '#666666'}}>
                 Calories
                </Text>
                <Text style={{fontSize: 16, fontWeight: 500, color: '#C9C9C9'}}>
                 320/400
                </Text>
              </View>
              <View style={styles.verticleLine}></View>
              <View style={styles.goal_stats}>
                <Text style={{fontSize: 13, fontWeight: 500, color: '#666666'}}>
                 Calories
                </Text>
                <Text style={{fontSize: 16, fontWeight: 500, color: '#C9C9C9'}}>
                 320/400 
                </Text>
              </View>
              <View style={styles.verticleLine}></View>

            </View>
          </View>
          <View style={styles.nutrition}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignContent: 'end'}}>
              <View>
                <Text style={styles.header}>
                  My Nutrition
                </Text>
              </View>
              <View>
                <Text style={{fontSize: 15, fontWeight: 500, color: '#777777'}}>
                  Today's Activity
                </Text>
              </View>
            </View>
            <View style={styles.nutrition_stack}>
              <View style={styles.nutrition_stats}>
                <Image source={require('/Users/bph/Documents/GitHub/smartplate/smartplate/assets/fire-flame-curved-solid 1.png')} style={styles.nutrition_icon} />
                
                <View style={styles.nutrition_num}>
                  <Text style={{fontSize: 30, fontWeight: 500, color: 'white'}}>
                  320 
                  </Text>
                  <Text style={{fontSize: 15, fontWeight: 500, color: '#777777'}}>
                  kcal
                  </Text>
                </View>
              </View>
              <View style={styles.nutrition_stats}>
              <Image source={require('/Users/bph/Documents/GitHub/smartplate/smartplate/assets/droplet-solid 1.png')} style={styles.nutrition_icon} />
                
                <View style={styles.nutrition_num}>
                  <Text style={{fontSize: 30, fontWeight: 500, color: 'white'}}>
                  320 
                  </Text>
                  <Text style={{fontSize: 15, fontWeight: 500, color: '#777777'}}>
                  kcal
                  </Text>
                </View>
              </View>
              <View style={styles.nutrition_stats}>
              <Image source={require('/Users/bph/Documents/GitHub/smartplate/smartplate/assets/bolt-lightning-solid 1.png')} style={styles.nutrition_icon} />
                
                <View style={styles.nutrition_num}>
                  <Text style={{fontSize: 30, fontWeight: 500, color: 'white'}}>
                  320 
                  </Text>
                  <Text style={{fontSize: 15, fontWeight: 500, color: '#777777'}}>
                  kcal
                  </Text>
                </View>
              </View>
            </View>

          </View>
        </View>
      </View>
      <View style={styles.navbar}>
        <View style={styles.nav_button}>
          <Image source={require('/Users/bph/Documents/GitHub/smartplate/smartplate/assets/home.png')} style={styles.nutrition_icon} />
          <Text style={{fontSize: 12, fontWeight: 500, color: '#777777'}}>Home</Text>
        </View>
        <View style={styles.nav_button}>
          <Image source={require('/Users/bph/Documents/GitHub/smartplate/smartplate/assets/restaurant.png')} style={styles.nutrition_icon} />
          <Text style={{fontSize: 12, fontWeight: 500, color: '#777777'}}>Food</Text>
        </View>
        <View style={styles.nav_button}>
          <Image source={require('/Users/bph/Documents/GitHub/smartplate/smartplate/assets/leaderboard.png')} style={styles.nutrition_icon} />
          <Text style={{fontSize: 12, fontWeight: 500, color: '#777777'}}>Leaderboard</Text>
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

 navbar: {
  backgroundColor: '#131313',
  flex: 1,
  justifyContent: 'space-around',
  flexDirection: 'row',
  alignItems: 'center',
  paddingBottom: 8,
 },

stats: {
  flexDirection: 'row',
  flex: 2,
 },

 pfp: {
  height: 35,
  width : 35,
  borderRadius: 10,
  marginRight: 15,
 },

 goals: {
  flex: 2,
 },

 nutrition: {
  paddingTop: 30,
  flex: 5,
 },

 settings_lines: {
  backgroundColor: '#909090',
  width: 14,
  height: 1,
 },
 
 goal_stats: {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  paddingLeft: 10,
 },

 progress: {
  flex: 6,
  flexDirection: 'column',
  justifyContent: 'space-evenly',
 },

 lower: {
  flex: 6,
 },

 top_nav: {
  flex: 1,
  flexDirection: 'row',
 },

 header: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
 },

 user: {
  flex: 1,
  flexDirection: 'row',
 },
 
 username: {

 },

 nav_button: {
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
 },

 settings: {
  height: 35,
  width : 35,
  borderRadius: 35,
  borderWidth: 1,
  borderColor: '#464646',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
 },

 goal_stack: {
  flexDirection: 'row',
  marginTop: 25,
  justifyContent: 'space-between',
 },

 verticleLine: {
  height: 50,
  width: 1.5,
  backgroundColor: '#4D4D4D',
},

nutrition_stack: {
  flexDirection: 'row',
  flex: 1,
  marginTop: 25,
  justifyContent: 'space-between',
},

nutrition_stats: {
  backgroundColor: '#121212',
  borderRadius: 10,
  width: '30%',
  flexDirection: 'column',
  justifyContent: 'space-around',
  paddingLeft: 15,
},

nutrition_icon: {
},

});


export default App;





