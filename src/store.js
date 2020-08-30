import { createStore, combineReducers, compose } from 'redux'
import firebase from "firebase";
import 'firebase/firestore'
import { reactReduxFirebase, firestoreReducer } from 'react-redux-firebase'
import {reduxFirestore, firestoreReducer} from 'redux-firestore'

// reducers 
//@todo


const firebaseConfig = {
  apiKey: 'AIzaSyAQpE1-NjLIQMZgKoztRUD393tnqw8SXVo',
  authDomain: 'reactclientpanel-a2f1d.firebaseapp.com',
  databaseURL: 'https://reactclientpanel-a2f1d.firebaseio.com',
  projectId: 'reactclientpanel-a2f1d',
  storageBucket: 'reactclientpanel-a2f1d.appspot.com',
  messagingSenderId: '276038856185',
  appId: '1:276038856185:web:cfb29d6b7e8055d8f52128',
  measurementId: 'G-18PW0YDHGV',
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
  // Firestore for Profile instead of Realtime DB
}

firebase.initializeApp(firebaseConfig)

// init firetore
const firestore = firebase.firestore()

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})