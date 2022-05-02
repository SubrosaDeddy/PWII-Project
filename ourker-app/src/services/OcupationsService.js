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

export const GetAllOccupation = async () =>{
    try {
        const response = await axios.get(`/ocupation`);
        return response.data;
    } catch (error) {
        return error;
    }
}