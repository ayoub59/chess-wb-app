import React, { useState } from 'react';
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import styled from "styled-components";
import Checkbox from '@mui/material/Checkbox';
import { orange } from '@mui/material/colors';

function RangeSlider() {
    function calculateValue(value) {
        return 2 ** value;
    };
    const [value, setValue] = React.useState(10);


    // set state
    // const [Elo, setElo] = useState();
    // function handleElo(e) {
    //     // handle change

    //     // const handleChange = (event, newValue) => {

    //     // };
    //     // if (typeof newValue === 'number') {
    //     //     setValue(newValue);
    //     // }
    //     setElo(e.target.value);
    //     console.log(Elo);
    // }

    // set state
    const [Elo, setElo] = useState(300);
    function handleElo(event, newValue) {
        setElo(newValue);
        console.log(Elo);
    }
    return (
        <Conatiner>
            <Typography id="non-linear-slider" gutterBottom>
                {/* Storage: {value} */}
                <InputName>
                    Rating (Elo) : {Elo}
                    {/* <RangeSlider /> */}
                </InputName>
            </Typography>
            <Slider
                value={Elo}
                min={300}
                step={100}
                max={2000}
                // scale={calculateValue}
                valueLabelFormat={Elo}
                // onChange={handleChange}
                onChange={handleElo}
                valueLabelDisplay="auto"
                aria-labelledby="custom-thumb-label"
            />
        </Conatiner>
    )
}
export default RangeSlider;
const Conatiner = styled.div``
const InputName = styled.h2`
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-size: var(--SubheadingSizeDisktop);
  font-weight: 400;
`
