import {StyleSheet} from 'react-native';

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
     flex: 5,
     flexDirection: 'column',
     justifyContent: 'space-evenly',
    },
   
    lower: {
     flex: 7,
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

   header_container: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 1,
  },

  leaderboard_body: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 6,
  }
   
   });

   export default styles;