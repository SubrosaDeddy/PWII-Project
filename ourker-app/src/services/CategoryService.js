import { axiosBase as axios } from "./Config";

export const GetCategory = async (inputID) => 
{
    try
    {
        const response = axios.get(`category/${inputID}`);
        
        response
        .then(value =>{
            return value;
        })
        .catch(err =>{
            return err;
        });
        return response;   
    }
    catch(err)
    {
        return {error: err};
    }
}

export const GetAllCategories = async() =>
{
    try 
    {
        const response = axios.get(`/category`);
        return response;    
    } 
    catch (err) 
    {
        return {error: err};   
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
        return {error: err};    
    }
}