import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as firebase from "firebase"
import Login from "./components/login"

var config = {
  apiKey: "AIzaSyD58Rfpgie-jAiK_-rRwMjegOEp9aVCkhw",
  authDomain: "fb-react-native-login.firebaseapp.com",
  databaseURL: "https://fb-react-native-login.firebaseio.com",
  projectId: "fb-react-native-login",
  storageBucket: "fb-react-native-login.appspot.com",
  messagingSenderId: "382341611715"
};
firebase.initializeApp(config);


export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state ={}
    

  }

  // componentDidMount(){
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user != null) {
  //       console.log("We are authenticated now!");
  //     }
    
  //     // Do other things
  //   });
  // }
  
  // async logIn() {
  //   try {
  //     const {
  //       type,
  //       token,
  //       expires,
  //       permissions,
  //       declinedPermissions,
  //     } = await Expo.Facebook.logInWithReadPermissionsAsync('430113787524823', {
  //       permissions: ['public_profile'],
  //     });
  //     if (type === 'success') {
  //       // Get the user's name using Facebook's Graph API
  //       const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);

  //       // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
  //     } else {
  //       // type === 'cancel'
  //     }
  //   } catch ({ message }) {
  //     alert(`Facebook Login Error: ${message}`);
  //   }
  // }
  render() {
    return (
      <View style={styles.container}>
      {/* <Button
        onPress={this.logIn}
        title="login with facebook"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      /> */}
      <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
