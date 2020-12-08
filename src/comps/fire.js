import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var config = {
  apiKey: "AIzaSyCAZq_aJtGlwN4gh8VvAMk0-ElttsZZD-Q",
  authDomain: "big-buttress-230121.firebaseapp.com",
  databaseURL: "https://big-buttress-230121.firebaseio.com",
  projectId: "big-buttress-230121",
  storageBucket: "big-buttress-230121.appspot.com",
  messagingSenderId: "569293963256",
  appId: "1:569293963256:web:6e75943e9e2c455efba00d",
  measurementId: "G-B66M3BSGK0"
};
// Initialize Firebase
firebase.initializeApp(config)

export default firebase 