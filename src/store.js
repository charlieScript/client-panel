import { createStore, combineReducers, compose } from 'redux'
import firebase from "firebase/app";
import 'firebase/firestore'
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase'
import {createFirestoreInstance, firestoreReducer} from 'redux-firestore'

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


// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
})

// create initial state
const initialState = {}

// create store
const store = createStore(rootReducer, initialState, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
  // <- needed if using firestore
}

export default store