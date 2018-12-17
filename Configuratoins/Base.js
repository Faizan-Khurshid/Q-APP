import * as firebase from "firebase"
import Rebase from "re-base"

var config = {
    apiKey: "AIzaSyD58Rfpgie-jAiK_-rRwMjegOEp9aVCkhw",
    authDomain: "fb-react-native-login.firebaseapp.com",
    databaseURL: "https://fb-react-native-login.firebaseio.com",
    projectId: "fb-react-native-login",
    storageBucket: "fb-react-native-login.appspot.com",
    messagingSenderId: "382341611715"
  };
  const app = firebase.initializeApp(config);
  const Base =  Rebase.createClass(app.database())

 export default Base;
