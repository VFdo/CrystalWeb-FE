import axios  from 'axios';

export const api  = axios.create({
    baseURL : "http://localhost:8080"
})

export const  getHeader = () => {
    const token = localStorage.getItem("token")
    return{
        Autherization : `Bearer ${token}`,
        "Content-Type" : "application/json"
    }
} 

export async function addProduct(photo,productPrice,productType){
    const formData = new  FormData();

    formData.append("photo",photo)
    formData.append("productPrice",productPrice)
    formData.append("productType",productType)
    

    const response = await api.post("/products/add/new-product",formData)
    if(response.status === 201){
        return true
    }else{
        return false
    }
}
export async function addAppointment(photo,clientName,phoneNumber,
    emailAddress,checkInDate,checkInTime,
    numberOfPets){
    const formData = new  FormData();

    formData.append("photo",photo)
    formData.append("clientName",clientName)
    formData.append("phoneNumber",phoneNumber)
    formData.append("emailAddress",emailAddress)
    formData.append("checkInDate",checkInDate)
    formData.append("checkInTime",checkInTime)
    formData.append("numberOfPets",numberOfPets)
    

    const response = await api.post("/appointments/add/new-appointment",formData)
    if(response.status === 201){
        return true
    }else{
        return false
    }
}
export async function addContact(clientName, phoneNumber,
    emailAddress,message){
    const formData = new  FormData();

    formData.append("clientName",clientName)
    formData.append("phoneNumber",phoneNumber)
    formData.append("emailAddress",emailAddress)
    formData.append("numberOfPets",message)
    

    const response = await api.post("/messages/add/new-message",formData)
    if(response.status === 201){
        return true
    }else{
        return false
    }
}
/*This function get all prduct catergorys*/
export  async function getProductCatergory(){
    try{
        const response = await api.get("/products/product/types")
        
        return response.data;
    }catch(error){
        throw new Error("Error fetching Products")
    }
}
/*This function get all products*/
export async  function getAllProducts() {
    try{
        const result = await api.get("/products/all-products");
        return result.data
    }catch(error){
        throw new Error ("Error fetching products")
    }
}
/*This function get all appointments*/
export async  function getAllAppointments() {
    try{
        const result = await api.get("/appointments/all-appointments");
        return result.data
    }catch(error){
        throw new Error ("Error fetching appointments")
    }
}
/*This function delete product by Id */
export async function deleteProduct(productId){
    try{
        const result = await api.delete(`/products/delete/product/${productId}`);
        return result.data
    }catch(error){
        throw new Error (`Error deleting the produt ${error.message}`)
    }
}
/*This function delete product by Id */
export async function deleteAppointment(appointmentId){
    try{
        const result = await api.delete(`/appointments/delete/appointment/${appointmentId}`);
        return result.data
    }catch(error){
        throw new Error (`Error deleting the appointment ${error.message}`)
    }
}

/*This function update product by Id */
export async function updateProduct(productId, product){
    const formData = new  FormData();
    formData.append("productType",product.productType);
    formData.append("productPrice",product.productPrice);
    formData.append("photo",productphoto);

    const response = await api.put(`/products/update/${productId}`,formData)
    return response
}

/*This function gets a  product by Id */
export async function getProductbyID(productId){
    try{
        const result = await api.get(`/products/product/${productId}`);
        return result.data
    } catch (error) {
        throw new Error (`Error fetching room ${error.message}`)
    }
    
}

/*This function saves newappointments*/
export async function bookAppointment(appointmentID, booking){
    try{
        const response = await api.post(`/bookings/appointment/${appointmentID}/booking`, booking)
        return response.data
    }catch(error){
        if(error.response && error.response.data){
            throw new Error (error.response.data)

        }else{
            throw new Error(`Error booking an appointment: ${error.message}`)
        }
    }
}
/*This function saves contact messages*/
export async function ContactUs(clientId, contacting){
    try{
        const response = await api.post(`/contacts/message/${clientId}/contacting`, contacting)
        return response.data
    }catch(error){
        if(error.response && error.response.data){
            throw new Error (error.response.data)

        }else{
            throw new Error(`Error sending a message: ${error.message}`)
        }
    }
}


/*this function get booking by cofirmation code*/
export async function getAppointmentByConfirmationCode(confirmationCode){
    try{
        const result = await api.get(`/bookings/confirmation/${confirmationCode}`)
        return result.data
    }catch(error){
        if(error.response && error.response.data){
            throw new Error (error.response.data)
        }else{
            throw new Error(`Error finding booking : ${error.message}`)
        }
    }
}

/*this function cancel booking*/
export async function cancelBooking(appointmentId){
    try{
        const result = await api.delete(`/bookings/booking/${appointmentId}/delete`)
        return result.data
    }catch(error){
        throw new Error(`Error cancel booking : ${error.message}`)        
    }
}

export async function registration(registration){
    try{
        const response = await api.post( "/auth/register-user", registration ) 
        return response.data
    }catch(error){
        if(error.response && error.response.data){
            throw new Error(error.response.data)
    }else{
        throw new Error(`Error register User:${error.message}`)
        }
    }
}

export async function login(login){
    try{
        const response = await api.post( "/auth/login", login ) 
        if(response.status >=200 && response.status < 300){
            return response.data
        }else{
            return null
        }
    }catch(error){
        console.error(error)
        return null
    }
}

export async function getUserProfile(userId, token){
    try{
        const response = await api.get(`users/profile/${userId}`, {headers: getHeader()})
        return response.data
    }catch(error){
        throw error
    }
}