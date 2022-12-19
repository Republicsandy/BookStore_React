import axios from 'axios'

export const loginApi =  (loginObj) => {
    let response = axios.post("https://localhost:44345/api/User/Login", loginObj)
    return response;
}

export const registerApi = (registerobj) => {
    let response = axios.post("https://localhost:44345/api/User/Register", registerobj)
    return response;
}


//https://localhost:44345/api/User/Login
//https://localhost:44345/api/User/Register