import axios from "axios";

let header = {
    headers: {
        Authorization: "Bearer" + " " + localStorage.getItem("Token")
    }
}

export const getBooks = () => {
    let response = axios.get("https://localhost:44388/api/Book/get", header)
    return response
} 

export const getWishlist = () => {
    let response = axios.get("https://localhost:44388/api/Wishlist/get", header)
    return response
} 

export const getBookByID = async (id) => {
    let response = await axios.get(`https://localhost:44388/api/Book/getById?BookID=${id}`,null, header)
    return response
} 

export const deleteWishlist = (id) => {
    let response = axios.delete(`https://localhost:44388/api/Wishlist/delete?WishlistID=${id}`,null, header)
    return response
} 

export const getOrder = () => {
    let response = axios.get("https://localhost:44388/api/Order/get", header)
    return response
} 

export const getCart = () => {
    let response = axios.get("https://localhost:44388/api/Cart/get", header)
    return response
} 

export const setAddress = (obj) => {
    let response = axios.put("https://localhost:44388/api/Address/update?AddressID=1", obj, header)
    return response
} 


export const addOrder = async (obj) => {
    let response = await axios.post("https://localhost:44388/api/Order/add", obj, header)
    return response
} 


export const addWishlist = (id) => {
    let response = axios.post(`https://localhost:44388/api/Wishlist/add?BookID=${id}`, null, header)
    return response
} 

export const addCart = (obj) => {
    let response = axios.post("https://localhost:44388/api/Cart/add", obj, header)
    return response
} 
