import { axiosBase as axios } from "./Config";

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

export const insertUser = async(inputUser) =>
{
    try
    {
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