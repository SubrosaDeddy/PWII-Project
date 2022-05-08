import { Input } from "@material-ui/core";
import { axiosBase as axios } from "./Config";
import { GetLocalities } from "./LocalitiesServices";
import { GetOccupation } from "./OcupationsService";
// ``
export const GetWorkerByEmailValidation = async (inputID) =>{
    try{
        const response = await axios.get(`/worker/info/${inputID}`);
        return response.data;

    }
    catch(err){
        return err;
    }
}

export const InsertWorker = async(inputWorker)=>{
    try{
        const user = await axios.get(`/worker/data/${inputWorker._userinfo}`);
        // console.log("user data");

        // console.log(user.data);
        inputWorker._userinfo = user.data;

        // console.log(res);
        const ocupation = await GetOccupation(inputWorker._ocupations);
        inputWorker._ocupations = ocupation;


        const response = await axios.post("/worker", inputWorker);
        if(response.status == 200){
            // console.log("Datos");
            // console.log(response.data);
            return response.data;

        }else{
            return[]
        }

    }catch(err){
        console.error(err);
        return err
    }
}

export const UpdateWorker = async(inputWorker) =>{
    try {
         const response = await axios.put(`/worker/${inputWorker._id}`, inputWorker);
         return response.data;
    } catch (error) {
        return error;
    }
}

// Sin probar 
export const GetWorkersbyLocalities = async (inputID) =>{
    try {
        const Localidad = await GetLocalities(inputID);
        inputID = Localidad
        
        const response = await axios.get(`/worker//address/${inputID}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        return error;
    }
}

// export const GetWorkersbyOcupations = async (inputID) =>{
//     try {
//         const response = await axios.get(`/worker/ocupation/${inputID}`);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// }
