import { InsertWorker, UpdateWorker } from "../services/WorkerService";

export default class Worker 
{
    constructor(inputObj){
        
        this._id = inputObj._id;
        this._userinfo = inputObj._userinfo;
        this._ocupations = inputObj._ocupations;
        this.description = inputObj.description;

    }

    createWorkerDB (){
        const res = InsertWorker(this)
        return res;
    }

    updateWorkerDB(){
        const res = UpdateWorker(this);
        return res;
    }

    getUserinfo(){
        return this._userinfo;
    }

    setUserinfo(inputUserinfo){
        this._userinfo = inputUserinfo;
    }

    getOcupation(){
        return this._ocupations;
    }

    setOcupation(inputOcupation){
        this._ocupations = inputOcupation;
    }

    getDescription(){
        return this.description;
    }

    setDescription(inputDesc){
        this.description = inputDesc;
    }
}