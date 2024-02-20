import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';

interface Task {
  meal: string;
  cal: number;
  pro: number;
  carb: number;
}

const Food: React.FC = () => {
  const [meal, setMeal] = useState<string>('');
  const [cal, setCal] = useState<number | ''>('');
  const [pro, setPro] = useState<number | ''>('');
  const [carb, setCarb] = useState<number | ''>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (meal.length <= 30 && typeof cal === 'number' && typeof pro === 'number' && typeof carb === 'number') {
      setTasks([...tasks, { meal, cal, pro, carb }]);
      setMeal('');
      setCal('');
      setPro('');
      setCarb('');
    } else {
      alert('All fields should be properly filled. Meal should be less than 30 characters. Calories, Protein, and Carbs should be numbers.');
    }
  };

  const handleNumericInput = (value: string, setter: React.Dispatch<React.SetStateAction<number | ''>>) => {
    if (!value) {
      setter('');
    } else {
      const num = parseInt(value);
      if (!isNaN(num)) {
        setter(num);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>
              My Progress
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter meal name"
          placeholderTextColor="#393939"
          value={meal}
          onChangeText={setMeal}
          maxLength={30}
        />
        <View style={styles.nutrientsRow}>
          <TextInput
            style={styles.nutrientInput}
            placeholder="Calories"
            placeholderTextColor="#393939"
            value={cal.toString()}
            onChangeText={(text) => handleNumericInput(text, setCal)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.nutrientInput}
            placeholder="Protein"
            placeholderTextColor="#393939"
            value={pro.toString()}
            onChangeText={(text) => handleNumericInput(text, setPro)}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.nutrientInput}
            placeholder="Carbs"
            placeholderTextColor="#393939"
            value={carb.toString()}
            onChangeText={(text) => handleNumericInput(text, setCarb)}
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity style={styles.addMealButton} onPress={addTask}>
          <Image source={require('../smartplate/assets/plus-solid 2.png')} style={{height: 17.5, width: 17.5}} />
          <Text style={styles.buttonText}>Add Meal</Text>
        </TouchableOpacity>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.taskItem}>
              <Text>Meal: {item.meal}</Text>
              <Text>Calories: {item.cal}</Text>
              <Text>Protein: {item.pro}</Text>
              <Text>Carbohydrates: {item.carb}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          style={{flex:1}}
        />
      </View>
      <View style={{flex: 1}}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
    flex: 1,
  },
  header: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
   },


  input: {
    borderRadius: 7,
    padding: 10,
    backgroundColor: '#181818',
    height: 40,
  },
  nutrientsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  nutrientInput: {
    borderRadius: 7,
    padding: 10,
    backgroundColor: '#181818',
    color: 'white',
    height: 40,

    width: '32%',
  },
  addMealButton: {
    width: '35%',
    height: 40,
    flexDirection: 'row',
    borderRadius: 7,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: '500',
    fontSize: 14,
  },
  taskItem: {
    marginBottom: 10,
  },
  form: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    flex: 1,
  }
});

export default Food;