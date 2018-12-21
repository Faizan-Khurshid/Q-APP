

const Reducer = (state = [], action) => {
    
    switch(action.type){
        case "SAVE_FACEBOOK_ID" : {
            console.log("SAVE_FACEBOOK_ID reducer ran")
            console.log("id from reducer is", action.payload)
            return { ...state, facebookID : action.payload }
        }
        case "SAVE_COMPANY_DATA" : {
            return { ...state, companyData : action.payload }
        }
        default : {
            return { ...state }
        }
    }
    

}

export default Reducer