import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndPoint = `${apiUrl}/auth`;


export async function postLogin({email, password}) {
    console.log(email, password)
    
    return await http.post(`${apiEndPoint}/login`, {email, password})
}