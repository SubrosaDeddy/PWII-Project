import { axiosBase as axios } from "./Config";

// Obtiene el nombre de la localidad y retorna el ID
export const GetLocalities = async (inputID) =>{
    try{
        const response = await axios.get(`/locality//${inputID}`);
        // console.log(response.data);
        return response.data; 
    }catch(err){
        console.error(err);
        return err;
    }
}

export const GetAllLocalities = async() =>
{
    try {
        const response = await axios.get(`/locality`);
        return response.data;
    } catch (error) {
        return error;
    }
}

export const GetLocalitiesById = async(inputID) =>{
    try {
        const response = await axios.get(`/locality/${inputID}`);
        return response.data;
    }catch (error){
        return error;
    }
}

