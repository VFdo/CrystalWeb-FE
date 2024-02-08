import axios  from 'axios';

export const api  = axios.create({
    baseURL : ""
})

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
/*This function delete product by Id */
export async function deleteProduct(productId){
    try{
        const result = await api.delete(`/products/delete/product/${productId}`);
        return result.data
    }catch(error){
        throw new Error (`Error deleting the produt ${error.message}`)
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


/*This function gets all the appointments*/
export async function getAllAppointments(){
    try{
        const result = await api.get('/bookings/all-bookings')
        return result.data
    }catch(error){
        throw new Error (`Error fetching booked Appointments :${error.message}`)
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