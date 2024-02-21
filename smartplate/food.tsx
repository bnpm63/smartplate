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
  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getFullYear()}`;


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
              My Food
        </Text>
        <View>
          <Text style={styles.input_header}>Meal</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter meal name"
            placeholderTextColor="#393939"
            value={meal}
            onChangeText={setMeal}
            maxLength={30}
          />
        </View>
        <View style={styles.nutrientsRow}>
        <View style={styles.nutrientContainer}>
          <Text style={styles.input_header}>Calories</Text>
          <TextInput
            style={styles.nutrientInput}
            placeholder="Calories"
            placeholderTextColor="#393939"
            value={cal.toString()}
            onChangeText={(text) => handleNumericInput(text, setCal)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.nutrientContainer}>
          <Text style={styles.input_header}>Protein</Text>
          <TextInput
            style={styles.nutrientInput}
            placeholder="Protein"
            placeholderTextColor="#393939"
            value={pro.toString()}
            onChangeText={(text) => handleNumericInput(text, setPro)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.nutrientContainer}>
          <Text style={styles.input_header}>Carbs</Text>
          <TextInput
            style={styles.nutrientInput}
            placeholder="Carbs"
            placeholderTextColor="#393939"
            value={carb.toString()}
            onChangeText={(text) => handleNumericInput(text, setCarb)}
            keyboardType="numeric"
          />
        </View>
      </View>
        <TouchableOpacity style={styles.addMealButton} onPress={addTask}>
          <Image source={require('../smartplate/assets/plus-solid 2.png')} style={{height: 17.5, width: 17.5}} />
          <Text style={styles.buttonText}>Add Meal</Text>
        </TouchableOpacity>
        
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.header_2}>
            Recent Meals
        </Text>
        <View style={styles.ni}>
          <View style={styles.block}><Text style={styles.log_header}>Meal</Text></View>
          <View style={styles.block}><Text style={styles.log_header}>Cal</Text></View>
          <View style={styles.block}><Text style={styles.log_header}>Protein</Text></View>
          <View style={styles.block}><Text style={styles.log_header}>Carbs</Text></View>
          <Text style={styles._}>{formattedDate}</Text>
        </View>
        <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                <View style={styles.block}><Text style={styles.log_text}>{item.meal}</Text>
                </View>
                <View style={styles.block}><Text style={styles.log_text}>{item.cal}</Text>
                </View>
                <View style={styles.block}><Text style={styles.log_text}>{item.pro}</Text>
                </View>
                <View style={styles.block}><Text style={styles.log_text}>{item.carb}</Text>
                </View>
                <Text style={styles.date}>{formattedDate}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            style={{flex:1}}
          />
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

  block: {
    flex: 1,
  },

  header: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
   },

   header_2: {
    color: 'white',
    marginBottom: 30,
    fontSize: 22,
    fontWeight: 'bold',
   },

  date: {
    color: '#707070',
    fontSize: 10,
    fontWeight: '400',
  },

  _: {
    color: 'black',
    fontSize: 10,
    fontWeight: '400',
  },

  log_header: {
    color: '#393939',
    fontSize: 11,
    fontWeight: '500',
    marginBottom: 10,
  },

  ni: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    color: 'white',
    borderRadius: 7,
    padding: 10,
    backgroundColor: '#181818',
    height: 40,
  },

  input_header: {
    color: '#8E8E8E',
    fontSize: 12,
    fontWeight: '300',
    marginBottom: 10,
  },
  
  nutrientsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures even spacing
    marginBottom: 10,
    marginTop: 10,
  },


  nutrientContainer: {
    flex: 1, // Each container takes equal space
    flexDirection: 'column',
  },

  nutrientInput: {
    borderRadius: 7,
    padding: 10,
    backgroundColor: '#181818',
    color: 'white',
    height: 40,
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
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  log_text: {
    fontSize: 12,
    color: 'white',
    fontWeight: '600',
  },

  form: {
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    flex: 1,
  }
});

export default Food;