import commonAPI from "./commonAPI";
import SERVER_URL from "./serverUrl";

//API Call for registering Users
export const registerAPI = async (reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/register`,reqBody)
}

//API Call for login Users
export const loginAPI = async (reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/login`,reqBody)
}

//API Call for Adding Crop
export const addCropAPI = async (reqBody,reqHeader) =>{
    return await commonAPI('POST',`${SERVER_URL}/addCrop`,reqBody,reqHeader)
}

//API Call for Getting Home Crops
export const homeCropsAPI = async () =>{
    return await commonAPI('GET',`${SERVER_URL}/getHomeCrops`,{})
}

//API Call for Getting All Crops
export const allCropsAPI = async (searchKey,reqHeader)=>{
    return await commonAPI('GET',`${SERVER_URL}/getAllCrops?search=${searchKey}`,{},reqHeader)
}

//API Call for Getting User Crops
export const userCropsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/getUserCrops`,{},reqHeader)
}

//API Call for Adding Reminder
export const addReminderAPI = async (reqBody,reqHeader)=>{
    return await commonAPI('POST',`${SERVER_URL}/addReminder`,reqBody,reqHeader)
}

//API Call for Getting Reminders
export const getReminderAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/getReminders`,{},reqHeader)
}

//API Call for Deleting Reminder
export const deleteReminderAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/deleteReminder/${id}`,{},reqHeader)
}

//API Call for Adding Items to Wishlist
export const addWishlistAPI = async (reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/addWishlist`,reqBody,reqHeader)
}

//API Call for Getting User Wishlist
export const userWishlistAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/userWishlist`,{},reqHeader)
}

//API Call for Deleting Item from Wishlist
export const removeFromWishlistAPI = async (crop,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/wishlist/remove?productId=${crop._id}`,{},reqHeader)
}

//API Call for Checking Item in Wishlist
export const checkWishlistAPI  = async (crop,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/wishlist/check?productId=${crop._id}`,{},reqHeader)
}

//API Call for Viewing Single Crop
export const cropOverviewAPI = async (id,reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/productView/${id}`,{},reqHeader)
}

//API Call for Adding Crop to Cart
export const addToCartAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/addCart`,reqBody,reqHeader)
}

//API Call for Getting User Cart Items
export const viewCartAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/userCart`,{},reqHeader)
}

//API Call for reducing Cart quantity
export const reduceCartQuantity = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/cart/reduce/quantity`,reqBody,reqHeader)
}

//API Call for increasing Cart quantity
export const increaseCartQuantityAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/cart/increase/quantity`,reqBody,reqHeader)
}

//API Call for Deleting Cart Item
export const deleteCartItemAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/cart/delete/${id}`,{},reqHeader)
}

//API Call for Clearing Cart
export const clearCartAPI = async (reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/clearCart`,{},reqHeader)
}

//API Call for Clearing Cart
export const deleteCropAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/deleteCrop/${id}`,{},reqHeader)
}
