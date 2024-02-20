import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore'; // Add other modules as needed

// Initialize Firebase
const firebaseConfig = {
  projectId: 'smartplate-7c1bf',
  appId: '1:527197986736:ios:14fde005adf0264decc075',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
