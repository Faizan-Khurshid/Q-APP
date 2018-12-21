import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
import { getComapnyData } from "../../Redux/epic"

class CompanyList extends React.Component {
    constructor(props){
      super(props)
  
      this.state ={}
    }

    componentDidMount(){
        this.props.getComapnyData(this.props.facebookID)
    }

    render(){
        const { companyData } = this.props
        return(
            <View style={styles.container} >
                
                <Icon
                name="md-add"
                color="green"
                size={50}
                style ={styles.icon}
                onPress= { () => this.props.navigation.navigate('CompanyForm') }
                /> 
                { companyData && <Text>{companyData.nameOfCompany}</Text> }                                               
                
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        facebookID : state.Reducer.facebookID,
        companyData : state.Reducer.companyData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getComapnyData : facebookID => dispatch(getComapnyData(facebookID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList)

const styles =  StyleSheet.create({
    icon : {
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        // backgroundColor: '#841584',                                    
        // position: 'absolute',                                          
        // left : 30
    },
    container : {
        display : "flex",
        alignItems : "center",

      
      
    },
    iconBg : {
        // display : "flex",
        // alignItems : "flex-end"
        backgroundColor: '#841584',                                    
    }

})