import axios  from 'axios';

export const api  = axios.create({
    baseURL : "https://localhost:9192"
})

export async function addProducts(photo,price,catergory){
    const formData = new  FormData();

    formData.append("photo",photo)
    formData.append("price",price)
    formData.append("catergory",catergory)

    const response = await api.post("/products/add/new-products",formData)
    if(response.status === 201){
        return true
    }else{
        return false
    }
}

/*This function get all prduct catergorys*/
export  async function getProductCatergory(){
    try{
        const response = await api.get("products/categories")
        
        return response.data;
    }catch(error){
        throw new Error("Error fetching Products")
    }
}