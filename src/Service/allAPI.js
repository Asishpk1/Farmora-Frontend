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

// API Call for Getting Consumer Orders
export const consumerOrdersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/userOrders`,{},reqHeader)
}

// API Call for Getting Farmer Orders
export const farmerOrdersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/farmerOrders`,{},reqHeader)
}

// API Call for Updating Order status
export const updateOrderStatusAPI = async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/order/update-status/${id}`,reqBody,reqHeader)
}

//API Call for getting Top sold crops
export const topSoldCropsAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/top-crops`,{},reqHeader)
}

// API Call for Getting All Orders
export const allOrdersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/allOrders`,{},reqHeader)

}
// API Call for Getting All Consumers
export const allConsumersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/allConsumers`,{},reqHeader)
}

// API Call for Getting All Farmers
export const allFarmersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/allFarmers`,{},reqHeader)
}

//API Call for getting Top Farmers
export const topFarmersAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/top-farmers`,{},reqHeader)
}

//API Call for Registering a Complaint
export const RegisterComplaintAPI = async (reqBody,reqHeader) =>{
    return await commonAPI("POST",`${SERVER_URL}/register/complaint`,reqBody,reqHeader)
}

//API Call for Getting User complaints
export const getComplaintsAPI = async (reqHeader) =>{
    return await commonAPI("GET",`${SERVER_URL}/complaints`,{},reqHeader)
}

//API Call for Deleting User Complaints
export const deleteComplaintAPI = async (id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/complaint/delete/${id}`,{},reqHeader)
}
