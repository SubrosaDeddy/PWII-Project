import { axiosBase as axios } from "./Config";

export const GetReport = async (inputID) =>
{
    try
    {
        // Comillas invertidas Alt+96
        const response = await axios.get(`/report//${inputID}`);
        return response.data;
    }
    catch(err)
    {
        console.error(err);
        return err;
    }
};

export const InsertReport = async(inputReport) =>
{
    try
    {
        const response = await axios.post("/report", inputReport);
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