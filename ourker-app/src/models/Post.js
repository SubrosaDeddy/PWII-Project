import {GetPost, GetAll, InsertPost, UpdatePost} from "../services/PostService";
import {GetUser} from "../services/UserService";
// import photo
// import category
export default class Post
{
    constructor(inputObj)
    {
        this.title = inputObj.title;
        this.description =  inputObj.description;  
        this.workerInfo = inputObj._workerinfo;    
        this._photos = inputObj._photos;
        this._category = inputObj._category;
        this.counting = inputObj.counting;
    }

    updatePostDB(inputObj)
    {
        UpdatePost(inputObj);
    }

    createPostDB(inputObj)
    {
        InsertPost(inputObj);
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

    getCounting()
    {
        return this.counting;
    }

    setCounting(inputCounting)
    {
        this.counting = inputCounting;
    }

}