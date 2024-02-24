// Dev modules
import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, Pressable, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { useGoals } from './GoalsContext';
// Our Libraries
import styles from './styles';


const Home: React.FC = () => {

  const { calGoal, fatGoal, carbGoal } = useGoals();
  const [totalCal, setTotalCal] = useState(0); // Accumulator for calories
  const [totalFat, setTotalFat] = useState(0); // Accumulator for fat
  const [totalCarb, setTotalCarb] = useState(0); // Accumulator for carbs

  useEffect(() => {
    const calGoalNumber = Number(calGoal) || 0;
    setTotalCal(prevTotal => prevTotal + calGoalNumber);
  }, [calGoal]);

  useEffect(() => {
    const fatGoalNumber = Number(fatGoal) || 0;
    setTotalFat(prevTotal => prevTotal + fatGoalNumber);
  }, [fatGoal]);

  useEffect(() => {
    const carbGoalNumber = Number(carbGoal) || 0;
    setTotalCarb(prevTotal => prevTotal + carbGoalNumber);
  }, [carbGoal]);




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
              <Text style={{ fontSize: 100, fontWeight: 600, color: 'white' }}>74%</Text>
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





