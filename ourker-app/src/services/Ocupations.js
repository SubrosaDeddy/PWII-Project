import { axiosBase as axios } from "./Config";

export const GetOccupation = async (inputID) =>{
    try{
       const response = await axios.get(`/ocupation/name/${inputID}`);
       return response.data;
    }
    catch(err){
        return err;
    }
}

export const GetAllOccupation = async (inputID) =>{
    try {
        const response = await axios.get(`/ocupation`);
        return response.data.title;
    } catch (error) {
        return error;
    }
}