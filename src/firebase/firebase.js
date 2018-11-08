import * as firebase from 'firebase';


const config = {
  apiKey: "AIzaSyDNulN58HtDMcwSAIk08e4xOIRNXGLomWQ",
  authDomain: "expense-gc.firebaseapp.com",
  databaseURL: "https://expense-gc.firebaseio.com",
  projectId: "expense-gc",
  storageBucket: "expense-gc.appspot.com",
  messagingSenderId: "962548393364"
};


firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };