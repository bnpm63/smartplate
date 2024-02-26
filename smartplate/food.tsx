import React, { useState } from 'react';
import { Keyboard, TouchableWithoutFeedback, StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { useGoals } from './GoalsContext';

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
  const { setCalGoal, setFatGoal, setCarbGoal } = useGoals();
  const { addToTotalCal, addToTotalFat, addToTotalCarb } = useGoals();
  const [calInput, setCalInput] = useState('');
  const [fatInput, setFatInput] = useState('');
  const [carbInput, setCarbInput] = useState('');

  const currentDate = new Date();
  const formattedDate = `${currentDate.getMonth() + 1}-${currentDate.getDate()}-${currentDate.getFullYear()}`;
``

const addTask = () => {
  if (meal && cal && pro && carb) {
    const newTask = { meal, cal, pro, carb };
    setTasks([...tasks, newTask]);

    // Update total values
    addToTotalCal(cal);
    addToTotalFat(pro);
    addToTotalCarb(carb);

    // Reset the input fields
    setMeal('');
    setCal('');
    setPro('');
    setCarb('');
  } else {
    alert('All fields should be properly filled. Meal should be less than 30 characters. Calories, Protein, and Carbs should be whole numbers.');
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

  const handleSetGoals = () => {

    setCalGoal(parseInt(calInput) || 0);
    setFatGoal(parseInt(fatInput) || 0);
    setCarbGoal(parseInt(carbInput) || 0);
  };
  
  

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.container}>
    <View style={styles.container2}>
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
      <View style={styles.form}>
        <Text style={styles.header}>
              My Food
        </Text>
        <View style={{backgroundColor: '#121212', borderRadius: 10, padding: 15, marginTop: 30, marginBottom: 30}}>
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
      </View>


      <Text style={styles.header}>
              My Goals
        </Text>
      <View style={{backgroundColor: '#121212', borderRadius: 10, padding: 15, flex: 1.5, marginTop: 15, marginBottom: 15, flexDirection: 'column', paddingTop: 35, paddingBottom: 30}}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={styles.goalInputContainer}>
          <Text style={styles.input_header}>Calorie Goal</Text>
          <TextInput
            style={styles.squareInput}
            placeholder="Calories"
            placeholderTextColor="#393939"
            value={calInput}
            onChangeText={setCalInput}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.goalInputContainer}>
          <Text style={styles.input_header}>Protein Goal</Text>
          <TextInput
            style={styles.squareInput}
            placeholder="Protein"
            placeholderTextColor="#393939"
            value={fatInput}
            onChangeText={setFatInput}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.goalInputContainer}>
          <Text style={styles.input_header}>Carb Goal</Text>
          <TextInput
            style={styles.squareInput}
            placeholder="Carbs"
            placeholderTextColor="#393939"
            value={carbInput}
            onChangeText={setCarbInput}
            keyboardType="numeric"
          />
        </View>

    </View>
    <TouchableOpacity style={styles.setGoalsButton} onPress={handleSetGoals}>
          <Text style={styles.buttonText}>Set Goals</Text>
        </TouchableOpacity>
    </View>
    


      <View style={{flex: 2}}>
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
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  goalInputContainer: {
    justifyContent: 'flex-start',
    alignItems: 'left',
    width: '32%',
    height: 100,
  },
  
  squareInput: {
    borderRadius: 7,
    padding: 10,
    backgroundColor: '#0B0B0B',
    color: 'white',
    height: 40,
    width: 100,
    textAlign: 'center',
  },
  
  setGoalsButton: {
    width: '35%',
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 20,
  },
  
  container2: {
    marginLeft: 30,
    marginRight: 30, 
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
    borderWidth: 1.5,
    borderColor: '#0B0B0B',
    backgroundColor: '#0B0B0B',
    height: 40,
  },
  
  nutrientInput: {
    borderRadius: 7,
    padding: 10,
    borderWidth: 1.5,
    borderColor: '#0B0B0B',
    backgroundColor: '#0B0B0B',
    color: 'white',
    height: 40,
    marginBottom: 15,
  },

  input_header: {
    color: '#8E8E8E',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 10,
  },
  
  nutrientsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    marginBottom: 10,
    marginTop: 10,
  },
  
  
  nutrientContainer: {

    flexDirection: 'column',
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
    flex: 4,
  },

  top_nav: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 75,
   },

   pfp: {
    height: 35,
    width : 35,
    borderRadius: 10,
    marginRight: 15,
   },

   settings_lines: {
    backgroundColor: '#909090',
    width: 14,
    height: 1,
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
 
 });


export default Food;

/* import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useGoals } from './GoalsContext';

const GoalsForm: React.FC = () => {
  const { setCalGoal, setFatGoal, setCarbGoal } = useGoals();
  const [calInput, setCalInput] = useState('');
  const [fatInput, setFatInput] = useState('');
  const [carbInput, setCarbInput] = useState('');

  const handleSubmit = () => {
    setCalGoal(parseInt(calInput) || 0);
    setFatGoal(parseInt(fatInput) || 0);
    setCarbGoal(parseInt(carbInput) || 0);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Calories Goal"
        value={calInput}
        onChangeText={setCalInput}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Fat Goal (g)"
        value={fatInput}
        onChangeText={setFatInput}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Carbs Goal (g)"
        value={carbInput}
        onChangeText={setCarbInput}
        keyboardType="numeric"
      />
      <Button title="Set Goals" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  }
});

export default GoalsForm;
*/