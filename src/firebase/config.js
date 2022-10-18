import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDH6anZWMbcG-o1kFEzbWmWhpiLefqtX4o",
    authDomain: "cookingrecipe-site.firebaseapp.com",
    projectId: "cookingrecipe-site",
    storageBucket: "cookingrecipe-site.appspot.com",
    messagingSenderId: "17500285188",
    appId: "1:17500285188:web:152002d5813d2a747c4851"
};

//initialiize firebase
firebase.initializeApp(firebaseConfig)

//initialize firestore services
const projectFirestore = firebase.firestore()

export { projectFirestore };