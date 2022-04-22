import {GetUser, GetAll, InsertUser, UpdateUser } from "../services/UserService";

export default class User 
{
    constructor(inputObj) 
    {
        this.username = inputObj.username;
        this.email = inputObj.email;
        this.fullname = inputObj.fullname;
        this.password = inputObj.password;

        if(inputObj.address)
        {
            this.address.country = inputObj.address.country;
            this.address.city = inputObj.address.city;
            this.address.state = inputObj.address.state;
        }
    }

    updateUserDB()
    {
        // Send a request via UserService.js to update the DB
        UpdateUser(this);
    }

    createUserDB()
    {
        const res = InsertUser(this);

        return res;
    }

    getUsername()
    {
        return this.username;
    }

    setUsername(inputUsername)
    {
        this.username = inputUsername;
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
            // Update with services
        }
    }

    getAddress()
    {
        return this.address;
    }

    setAddress(inputCountry, inputCity, inputState)
    {
        this.address.country = inputCountry;
        this.address.city = inputCity;
        this.address.state = inputState 
    }

    setCountry(inputCountry)
    {
        this.address.country = inputCountry;
    }
    
    setCity(inputCity)
    {
        this.address.city = inputCity;
    }
    
    setCountry(inputState)
    {
        this.address.state = inputState;
    }

}