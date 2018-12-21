import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, DatePickerAndroid } from 'react-native';
import { connect } from "react-redux";
import { saveCompanyData, characterizeUser } from "../../Redux/epic"

class CompanyForm extends React.Component {
    constructor(props){
      super(props)
  
      this.state ={}
      this.sendData = this.sendData.bind(this)
    }

    sendData(){
        const { text1, text2, text3, text4, text5 } = this.state
        const data = { 
            "nameOfCompany" : text1, 
            "since" : text2, 
            "certificates" : text3, 
            "timings" : text4, 
            "address" : text5 }
        this.props.saveCompanyData(data, this.props.facebookID)
        this.props.characterizeUser(this.props.facebookID, "company")
    }


    render(){
        return(
            <View style={styles.container} >
                <Text>Name of company</Text>
                <TextInput
                    placeholder = "abc corporation"
                    style={{height: 40, width : "70%", borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text1) => this.setState({text1})}
                    value={this.state.text1}
                />
                <Text>Since</Text>
                <TextInput
                    keyboardType = "phone-pad"
                    placeholder = "1996"
                    style={{height: 40, width : "70%", borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text2) => this.setState({text2})}
                    value={this.state.text2}
                />
                <Text>Certificates (Max 3 Images)</Text>
                <TextInput
                    style={{height: 40, width : "70%", borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text3) => this.setState({text3})}
                    value={this.state.text3}
                />
                <Text>Timings</Text>
                <TextInput
                    
                    style={{height: 40, width : "70%", borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text4) => this.setState({text4})}
                    value={this.state.text4}
                />
                <Text>Address </Text>
                <TextInput
                    style={{height: 40, width : "70%", borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text5) => this.setState({text5})}
                    value={this.state.text5}
                />
                <Button 
                    onPress = {() => this.sendData()}
                    title = "submit"
                    color = "#841584"
                />
            </View>
       )
    }
}

const mapStateToProps = state => {
    return {
        facebookID : state.Reducer.facebookID
    }
}

const mapDispatchToprops = dispatch => {
    return {
        saveCompanyData : (data, facebookID) => dispatch(saveCompanyData(data, facebookID)),
        characterizeUser : (facebookID, userType) => dispatch(characterizeUser(facebookID, userType))
    }
}


export default connect(mapStateToProps, mapDispatchToprops)(CompanyForm)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
