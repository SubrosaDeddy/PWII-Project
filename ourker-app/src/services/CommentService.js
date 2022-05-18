import { axiosBase as axios } from "./Config";

export const GetCommentsByPost = async(postID) =>
{
    try 
    {
        const res = await axios.get(`/comment/${postID}`);
        return res.data;
    } 
    catch (err) {
        return {error:err};
    }
}

export const InsertComment = async(inputComment) =>
{
    try 
    {
        const res = axios.post("/comment", inputComment);
        return res.data;    
    } 
    catch (err) 
    {
        return {error:err}
    }
}

export const SetLike = async(inputLke) =>
{
    try 
    {
        const res = axios.post("/comment//like", inputLke);
    } 
    catch (err) 
    {
        return {error:err}
    }
}