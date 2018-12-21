import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as firebase from "firebase"
import { connect } from "react-redux"
import { Provider } from "react-redux"
import store from "../Redux/Store"
import { saveUserData } from "../Redux/epic"
import { saveFBID } from "../Redux/Actions/Action"

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {}
        this.logIn = this.logIn.bind(this)
    }
    async logIn() {
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Expo.Facebook.logInWithReadPermissionsAsync('430113787524823', {
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`)
            .then( res => res.json())
            .then( data => { 
              this.props.saveFBID(data.id)
              this.props.saveUserData(data) 
             
            })
            
            this.props.navigation.navigate('Dashboard')
            
            const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
              // key : 'Home'
            });
            this.props.navigation.dispatch(resetAction);
            alert('Welcome to Q-App!');
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
      render() {
        return (
          
            <View style={styles.container}>
            <Button
              onPress={this.logIn}
              title="login with facebook"
              color="#841584"
            />
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

    const mapStateToProps = state => {
      return {

      }
    }

    const mapDispatchToProps = dispatch => {
      return {
        saveUserData : (data) => dispatch(saveUserData(data)),
        saveFBID : id => dispatch(saveFBID(id))
      }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Login)

