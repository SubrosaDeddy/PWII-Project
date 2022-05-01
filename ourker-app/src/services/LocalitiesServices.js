import { axiosBase as axios } from "./Config";

export const GetLocalities = async (inputID) =>{
    try{
        const response = await axios.get(`/locality//${inputID}`);
        console.log(response.data);
        return response.data; 
    }catch(err){
        console.error(err);
        return err;
    }
}