import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndPoint = `${apiUrl}/auth`;


export async function postLogin({email, password}) {
    console.log(email, password)
    
    return await http.post(`${apiEndPoint}/login`, {email, password})
}

export async function postRegistration({firstName, lastName, email, password}) {
    console.log(firstName, lastName, email, password)
    return await http.post(`${apiEndPoint}/registration`, {firstName, lastName, email, password})
} 

export async function getAsyncValidate(){
    return await http.get(`${apiEndPoint}/asyncValidate`)
}

