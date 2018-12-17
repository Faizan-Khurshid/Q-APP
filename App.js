import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Navigation from "./Navigation/Navigation"
import Store from "./Redux/Store"
import { Provider } from "react-redux";






export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state ={}
    

  }


  render() {
    return (
      <Provider store={Store} >
        
        <Navigation />
        
      </Provider>
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
