import React, { useEffect, useState } from "react";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { color_one } from "../utils/Themes";
import { GetAllLocalities } from "../services/LocalitiesServices";


export default function SelectLocalities() {


    const [localities, setLocalities] = useState();
    const [value, setValue] = React.useState();
    const [inputValue, setInputValue] = React.useState("");

    useEffect(() =>{
        async function fetchLocalities(){
            let LocArray =[];
            const dataLoc = await GetAllLocalities();
            dataLoc.forEach(loc => {
                LocArray.push(loc.city);
            });
            setLocalities(LocArray);
        }
        fetchLocalities();
    }, []) 
    
    return (
        
        <Autocomplete
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
            }}
            id="combo-box-demo"
            options={localities}
            sx={{
            mx: "auto",
            backgroundColor: color_one.primary.secondary,
            mx: 0.5,
            }}
            renderInput={(params) => <TextField {...params} label="Localidades" name="Localidades"/>}
        />
    );
}
