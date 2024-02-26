// Dev modules
import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Pressable, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useGoals } from './GoalsContext';
// Our Libraries
import styles from './styles';


const Home: React.FC = () => {

  const { calGoal, fatGoal, carbGoal } = useGoals();
  const { totalCal, totalFat, totalCarb } = useGoals();

  const calculateCompletion = (total: number, goal: number) => {
    if (goal > 0) {
      return (total / goal) * 100;
    }
    return 0;
  };

  const calCompletion = calculateCompletion(totalCal, calGoal);
  const fatCompletion = calculateCompletion(totalFat, fatGoal);
  const carbCompletion = calculateCompletion(totalCarb, carbGoal);

  const totalCompletion = (calCompletion + fatCompletion + carbCompletion) / 3;
  



  return (
    <View style={styles.container}>
      <View style={styles.container_1}>
        <View style={styles.top_nav}>
          <View style={styles.user}>
            <Image source={require('../smartplate/assets/favicon.png')} style={styles.pfp} />
            <View style={styles.username}>
              <Text style={{ fontSize: 15, color: 'white', fontWeight: 600 }}>
                Hi Jacob
              </Text>
              <Text style={{ fontSize: 12, color: '#626262', fontWeight: 600 }}>
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
          <View style={{ flex: 1 }}></View>
          <Text style={styles.header}>
            My Progress
          </Text>
          <View style={styles.stats}>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 100, fontWeight: 600, color: 'white' }}>{totalCompletion.toFixed(2)}%</Text>
              <Text style={{ fontSize: 20, fontWeight: 500, color: '#666666', marginBottom: 20, marginLeft: 10 }}>completed</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>

        <View style={styles.lower}>
          <View style={styles.goals}>
            <Text style={styles.header}>
              Today's Goals
            </Text>
            <View style={styles.goal_stack}>
              <View style={styles.verticleLine}></View>
              <View style={styles.goal_stats}>
                <Text style={{ fontSize: 13, fontWeight: 500, color: '#666666' }}>
                  Calories
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 500, color: '#C9C9C9' }}>
                  {totalCal}/{calGoal}
                </Text>
              </View>
              <View style={styles.verticleLine}></View>
              <View style={styles.goal_stats}>
                <Text style={{ fontSize: 13, fontWeight: 500, color: '#666666' }}>
                  Protein
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 500, color: '#C9C9C9' }}>
                  {totalFat}/{fatGoal}
                </Text>
              </View>
              <View style={styles.verticleLine}></View>
              <View style={styles.goal_stats}>
                <Text style={{ fontSize: 13, fontWeight: 500, color: '#666666' }}>
                  Carbohydrates
                </Text>
                <Text style={{ fontSize: 16, fontWeight: 500, color: '#C9C9C9' }}>
                  {totalCarb}/{carbGoal}
                </Text>
              </View>
              <View style={styles.verticleLine}></View>

            </View>
          </View>
          <View style={styles.nutrition}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'end' }}>
              <View>
                <Text style={styles.header}>
                  My Nutrition
                </Text>
              </View>
              <View>
                <Text style={{ fontSize: 15, fontWeight: 500, color: '#777777' }}>
                  Today's Activity
                </Text>
              </View>
            </View>
            <View style={styles.nutrition_stack}>
              <View style={styles.nutrition_stats}>
                <Image source={require('../smartplate/assets/fire-flame-curved-solid 1.png')} style={styles.nutrition_icon} />

                <View style={styles.nutrition_num}>
                  <Text style={{ fontSize: 30, fontWeight: 500, color: 'white' }}>
                    {totalCal}
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: 500, color: '#777777' }}>
                    kcal
                  </Text>
                </View>
              </View>
              <View style={styles.nutrition_stats}>
                <Image source={require('../smartplate/assets/droplet-solid 1.png')} style={styles.nutrition_icon} />

                <View style={styles.nutrition_num}>
                  <Text style={{ fontSize: 30, fontWeight: 500, color: 'white' }}>
                    {totalFat}
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: 500, color: '#777777' }}>
                    g
                  </Text>
                </View>
              </View>
              <View style={styles.nutrition_stats}>
                <Image source={require('../smartplate/assets/bolt-lightning-solid 1.png')} style={styles.nutrition_icon} />

                <View style={styles.nutrition_num}>
                  <Text style={{ fontSize: 30, fontWeight: 500, color: 'white' }}>
                    {totalCarb}
                  </Text>
                  <Text style={{ fontSize: 15, fontWeight: 500, color: '#777777' }}>
                    g
                  </Text>
                </View>
              </View>
            </View>

          </View>
        </View>
      </View>


    </View>
  );
};

export default Home;





