import { axiosBase as axios } from "./Config";
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
        console.log("user data");

        console.log(user.data);
        inputWorker._userinfo = user.data;

        // console.log(res);
        const ocupation = await GetOccupation(inputWorker._ocupations);
        inputWorker._ocupations = ocupation;


        const response = await axios.post("/worker", inputWorker);
        if(response.status == 200){
            console.log("Datos");
            console.log(response.data);
            return response.data;

        }else{
            return[]
        }

    }catch(err){
        console.error(err);
        return err
    }
}




// Sin probar 
// export const GetWorkersbyLocalities = async (inputID) =>{
//     try {
//         const response = await axios.get(`/worker//address/${inputID}`);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// }

// export const GetWorkersbyOcupations = async (inputID) =>{
//     try {
//         const response = await axios.get(`/worker/ocupation/${inputID}`);
//         return response.data;
//     } catch (error) {
//         return error;
//     }
// }
