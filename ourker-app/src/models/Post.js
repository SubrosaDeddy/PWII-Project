import {GetPost, GetAll, InsertPost, UpdatePost} from "../services/PostService";
import {GetUser} from "../services/UserService";


export default class Post
{
    constructor(inputObj)
    {
        this.title = inputObj.title;
        this.description =  inputObj.description;  
        this._workerinfo = inputObj._workerinfo;    
        this._photos = inputObj.photos;
        this._category = inputObj._category;
        this.counting = inputObj.counting;
    }

    updatePostDB(inputObj)
    {
        const res = UpdatePost(inputObj);
        return res;
    }

    createPostDB(inputObj)
    {
        const res = InsertPost(inputObj);
        return res;
    }
    
    getTitle()
    {
        return this.title;
    }

    setTitle(inputTitle)
    {
        this.title = inputTitle;
    }

    getDescription()
    {
        return this.description;
    }

    setDescription(inputDescription)
    {
        this.description = inputDescription;
    }

    getWorker()
    {
        GetUser(this._workerinfo);
    }

    setWorker(inputWorkerInfo)
    {
        this._workerinfo = inputWorkerInfo;
    }

    getPhotos()
    {
        return this._photos;
    }

    setPhotos(inputPhotos)
    {
        this._photos = inputPhotos;
    }

    getCategories()
    {
        return this._categories;
    }

    setCategories(inputCategories)
    {
        return this._category;
    }

    getCounting()
    {
        return this.counting;
    }

    setCounting(inputCounting)
    {
        this.counting = inputCounting;
    }

}