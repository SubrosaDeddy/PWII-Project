import { axiosBase as axios } from "./Config";
import { GetCategory } from "./CategoryService";
import { getUserLogged } from "./helpers";


export const GetPost = async (inputID) =>
{
    try
    {
        // Comillas invertidas Alt+96
        const user = getUserLogged();

        const response = await axios.get(`/post/${inputID}`, {
            headers:{
                'x-access-token': user?.token || ''
            }
        });
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
        const user = getUserLogged();

        const response = await axios.get(`/post//${inputID}`, {
            headers: {
                'x-access-token': user?.token || ''
            }
        });
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
        const user = getUserLogged();

        const response = await axios.get(`/post//worker/${inputID}`, {
            headers:{
                'x-access-token': user?.token || ''
            }
        });
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

        const user = getUserLogged();
        const response = await axios.post("/post", inputPost ,{
            headers: {
                'x-access-token': user?.token || ''
            }
        });
        
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
        const user = getUserLogged();

        const response = await axios.put(`/post//${inputPost.id}`, inputPost, {
            headers: {
                'x-access-token': user?.token || ''
            }
        });
        
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