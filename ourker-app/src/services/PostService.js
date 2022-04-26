import { axiosBase as axios } from "./Config";

export const GetPost = async (inputID) =>
{
    try
    {
        // Comillas invertidas Alt+96
        const response = await axios.get(`/post//${inputID}`);
        return response.data;
    }
    catch(err)
    {
        console.error(err);
        return err;
    }
};

export const InsertPost = async(inputPost) =>
{
    try
    {
        const response = await axios.post("/post", inputPost);
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