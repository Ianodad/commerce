import http from "./httpService";
import {apiUrl} from "../config.json";

const apiEndPoint = `${apiUrl}/cart`;


export function getCart() {
    console.log(http.get(apiEndPoint))
    return http.get(apiEndPoint)
}

export const postCart = async (data) => {

    try {
            const {receipt, cart} =  data
               const newCart = {
                   userId: "5e3a5e35a66b3c264302c755", 
                   products: cart,
                   orderSubTotal: receipt.orderSubTotal,
                   shippingCost: receipt.shippingCost,
                   tax: receipt.tax,
                   total: receipt.total
               }
               console.log(newCart)
            //    console.log(receipt)
               return http.post(`${apiEndPoint}/${newCart.userId}`, newCart);
               
         } catch (ex) {

                return null
            }
            // console.log(receipt)
            
    
}