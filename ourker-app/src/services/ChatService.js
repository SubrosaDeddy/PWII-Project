import { axiosBase as axios } from "./Config";
import { getUserLogged } from './helpers';

export const InsertChat = async(inputChat) =>{
    try {
        const response = await axios.post("/chat", inputChat);
        if(response.status == 200){
            return response.data
        }else{
            return [];
        }
    } catch (error) {
        return error;
    }
}

export const GetChatsUsers = async(userSendId, userReId) =>{
    try {
        const response = await axios.get(`/chat/${userSendId}/${userReId}`);
        return response.data;

    } catch (error) {
        return error;
    }
}

export const GetListChat = async(inputChat) =>{
    try{
        const user = getUserLogged();

        const response = await axios.get(`/chat//list/${inputChat}`, {
            headers: {
                'x-access-token': user?.token || ''
            }
        });
        return response.data;

    }catch(error){
        return error;
    }
}