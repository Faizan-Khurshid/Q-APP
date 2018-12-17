import * as firebase from "firebase";
import base from "../Configuratoins/Base"

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

export { saveUserData }