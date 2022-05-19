import { axiosBase as axios } from "./Config";
import { GetLocalities } from "./LocalitiesServices";

export const GetUser = async (inputID) =>
{
    try
    {
        // Comillas invertidas Alt+96
        const response = await axios.get(`/user//${inputID}`);
        return response.data;
    }
    catch(err)
    {
        console.error(err);
        return err;
    }
};

export const GetAll = async () =>
{
    try
    {
        const response = await axios.get("/user");
        if(response.status == 200)
        {
            return response.data;
        }
        else
        {
            return [];
            // return response.headers;
        } 
    }
    catch(err)
    {
        console.error(err);
        return err;
    }
};

export const InsertUser = async(inputUser) =>
{
    try
    {   
        const res = await GetLocalities(inputUser._address);
        inputUser._address = res;
    
        const response = await axios.post("/user", inputUser);
        if(response.status == 200)
        {
            return response.data;
        }
        else
        {
            return [];
        }
    } 
    catch (err) 
    {
        console.error(err);
        return err;    
    }
}

export const UpdateUser = async(inputUser) => 
{
    try 
    {
        const response = await axios.put(`/user/${inputUser.email}`, inputUser);
        console.log(response.data);
        return response.data;
    } 
    catch (err) 
    {
        console.log(err);
        return err;
    }
}