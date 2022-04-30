import { axiosBase as axios } from "./Config";
import { GetLocalities } from "./Localities";

export const InsertWorker = async(inputWorker)=>
{
    try{
        const res = await GetLocalities(inputWorker.city);
        const{_id} = res.send;
        // input
        // const res = await axios.post(`/worker/info/${inputWorker}`, inputWorker);

    }catch(err){
        return {error:err}
    }
}