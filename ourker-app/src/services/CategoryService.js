import { axiosBase as axios } from "./Config";

export const GetCategory = async (inputID) => 
{
    try
    {
        const response = axios.get(`api/category//${inputID}`);
        return response;   
    }
    catch(err)
    {
        console.log(err);
        return err;
    }
}

export const GetAll = async() =>
{
    try 
    {
        const response = axios.get(`api/category`);
        return response;    
    } 
    catch (err) 
    {
        console.log(err);    
    }
}

export const InsertCategory = async (inputObj) =>
{
    try 
    {
        const response = axios.post(`api/category`, inputObj);
        if(response.status == 200)
        {
            return response;
        }
        else
        {
            return [];
        }
    } 
    catch (err) 
    {
        console.log(err);
        return err;    
    }
}