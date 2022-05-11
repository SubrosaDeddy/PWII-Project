import { axiosBase as axios } from "./Config";
import { GetCategory } from "./CategoryService";
// import { data } from "../../../Backend/util/logger";

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
        return {error: err};
    }
};

export const GetAll = async (inputID) =>
{
    try
    {
        // Comillas invertidas Alt+96
        const response = await axios.get(`/post//${inputID}`);
        return response.data;
    }
    catch(err)
    {
        return {error:err};
    }
};

export const GetPostsWorker = async (inputID) =>
{
    try
    {
        const response = await axios.get(`/post//worker/${inputID}`);
        return response.data;
    }
    catch(err)
    {
        return {error:err}
    }
}

export const InsertPost = async(inputPost) =>
{
    try
    {        
        const res = await GetCategory(inputPost._category);
        const {_id} = res.data;
        inputPost._category = _id;
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
        return {error: err};    
    }
}

export const UpdatePost = async(inputPost) =>
{
    try
    {
        const response = await axios.put(`/post//${inputPost.id}`, inputPost);
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
        return {error:err};    
    }
}