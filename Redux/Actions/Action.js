const saveFBID = id => {
    console.log("action is runned kd is", id)
    return {
        type : "SAVE_FACEBOOK_ID",
        payload : id
    }
}

const saveCompanyDataInState = data => {
    return {
        type : "SAVE_COMPANY_DATA",
        payload : data
    }
}

export { saveFBID, saveCompanyDataInState }