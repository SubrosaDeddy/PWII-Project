import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAv65m-UFdRleHDxzVBZE5CnG9GoHQnRRM",
    authDomain: "ourker-app.firebaseapp.com",
    projectId: "ourker-app",
    storageBucket: "ourker-app.appspot.com",
    messagingSenderId: "252268045695",
    appId: "1:252268045695:web:66ce24b785fa584e5d664a",
    measurementId: "G-HJ4KGRD9YP"
  };

firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();

export default storage; 


