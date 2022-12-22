import React from 'react'
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import styled, { css } from "styled-components";


function RangeSlider() {

    // from mui
    function valueLabelFormat(value) {
        const units = ['KB', 'MB', 'GB', 'TB'];

        let unitIndex = 0;
        let scaledValue = value;

        while (scaledValue >= 1024 && unitIndex < units.length - 1) {
            unitIndex += 1;
            scaledValue /= 1024;
        };

        return `${scaledValue} ${units[unitIndex]}`;
    };

    function calculateValue(value) {
        return 2 ** value;
    };
    const [value, setValue] = React.useState(10);

    const handleChange = (event, newValue) => {
        if (typeof newValue === 'number') {
            setValue(newValue);
        }
    };



    return (
        <div>
            {/* from mui */}
            <Typography id="non-linear-slider" gutterBottom>
                Storage:
                {valueLabelFormat(calculateValue(value))}
            </Typography>
            <Slider
                value={value}
                min={5}
                step={1}
                max={30}
                scale={calculateValue}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
                shadows={0}
            // elevation={0}
            /></div>
    )
}

export default RangeSlider