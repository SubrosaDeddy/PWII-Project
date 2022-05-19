import {GetUser, GetAll, InsertUser, UpdateUser } from "../services/UserService";

export default class User 
{
    constructor(inputObj) 
    {
        this._id = inputObj._id;
        this.username = inputObj.username;
        this.email = inputObj.email;
        this.fullname = inputObj.fullname;
        this.password = inputObj.password;
        this.profilepicture = inputObj.profilepicture;
        this._address = inputObj._address;

    }

    updateUserDB()
    {
        // Send a request via UserService.js to update the DB
        const res = UpdateUser(this);
        return res;
    }

    createUserDB()
    {
        const res = InsertUser(this);
        return res;
    }

    getID()
    {
        return this._id;
    }

    getUsername()
    {
        return this.username;
    }

    setUsername(inputUsername)
    {
        this.username = inputUsername;
    }

    getUserimage(){
        return this.profilepicture;
    }

    setUserimage(inputUserpicture){
        this.profilepicture = inputUserpicture
    }

    getEmail()
    {
        return this.email;
    }

    setEmail(inputEmail)
    {
        this.email = inputEmail;
    }

    getFullname()
    {
        return this.fullname;
    }

    setFullname(inputFullname)
    {
        this.fullname = inputFullname; 
    }

    validatePassword(inputPassword)
    {
        return inputPassword == this.password;
    }

    setPassword(oldPassword, newPassword)
    {
        if(this.validatePassword(oldPassword))
        {
            this.password =newPassword;
        }
    }

    getAddress()
    {
        return this._address;
    }

    setAddress(inputAddress)
    {
        this._address = inputAddress;
    }

}