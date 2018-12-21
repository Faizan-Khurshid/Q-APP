import * as firebase from "firebase";
import base from "../Configuratoins/Base"
import { saveCompanyDataInState } from "../Redux/Actions/Action"

const saveUserData = data => {
    console.log("I am from epic")
    return function(dispatch){
        // base.post(`usersData/${id}`, {
        //     data : { id, name }
        // })
        firebase.database().ref(`usersData/${data.id}`).set({
            facebook_id : data.id,
            fb_Name : data.name
        })
    }
}

const saveCompanyData = (data, facebookID) => { 
    return function(dispatch){
        firebase.database().ref(`companyData/${facebookID}`).set({
            nameOfCompany : data.nameOfCompany,
            since : data.since ,
            certificates : data.certificates,
            timings : data.timings,
            address : data.address
        })
    }
}

const characterizeUser = (facebookID, userType) => {
    return function(dispatch){
        firebase.database().ref(`usersData/${facebookID}/userType`).set({
            userType
        })
    }
}

const getComapnyData = facebookID => {
    return function(dispatch){
        firebase.database().ref(`companyData/${facebookID}`).once("value").then(snapshot => {
            // console.log("snapshot.val()", snapshot.val())
            dispatch(saveCompanyDataInState(snapshot.val()))

        })
    }
}

export { saveUserData, saveCompanyData, characterizeUser, getComapnyData }