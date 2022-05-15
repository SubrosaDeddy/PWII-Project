import React, { useEffect, useState } from "react";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { color_one } from "../utils/Themes";
import { GetAllOccupation } from "../services/OcupationsService";

export default function SelectOccupations(props) {

  const [ocupation, setOcupation] = useState();
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");

  useEffect(()=>{
      async function fetchOccupations()
      {
        let OcArray =[];
        const dataOc = await GetAllOccupation();
        dataOc.forEach(occ => {
            OcArray.push(occ.title);
        });
        setOcupation(OcArray);
      }

      fetchOccupations();
  }, [])

  if(props != null){
    props.getOcupValue(value)
}

  return (
    
      <Autocomplete
        value={value || null}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="combo-box-demo"
        options={ocupation}
        sx={{
          mx: "auto",
          backgroundColor: color_one.primary.secondary,
          mx: 0.5,
        }}
        renderInput={(params) => (
          <TextField {...params} label="Ocupación" name="Ocupacion" required/>
        )}
      />
  );
}
