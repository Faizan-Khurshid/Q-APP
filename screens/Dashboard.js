import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from "react-redux";


class Dashboard extends React.Component {
    constructor(props){
      super(props)
  
      this.state ={}
    }

    getCompanyInfo(){
        this.props.navigation.navigate('CompanyList')
    }

    render(){
        console.log("this.props.facebookID", this.props.facebookID)
        return(
            <View style={styles.container}>
                <Text>Welcome to Q-App</Text>
                <Button 
                    onPress = {() => this.getCompanyInfo()}
                    title = "Are You a Company"
                    color = "#841584"
                />
                <Button 
                    
                    title = "Are you finding/waiting for tokens"
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


export default connect(mapStateToProps, {})(Dashboard)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  