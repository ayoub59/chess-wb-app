import React from 'react';
import styled, { css } from "styled-components";
import image from "../images/log-image.png";
import arrow from "../images/arrow.svg";
import { useEffect } from 'react';
import Typography from "@mui/material";
import Slider from "@mui/material";


function Log() {
    // const rangeX = document.getElementById("ratingID");
    // console.log(rangeX.value)

    function getRangeX(e) {
        // console.log(e.target.value)
        console.log(e.target.getBoundingClientRect().x);
        // the thumb
        // const thumb = e.target.pseudo("::-moz-range-thumb");
        // console.log(thumb)
        // console.log(rangeX.getBoundingClientRect())
    }
    return (
        <Container>
            <LogContainer>
                <TextConatiner>
                    <Title>Log in</Title>
                    {/* full name */}
                    <InputConatiner>
                        <InputName>
                            Full name
                        </InputName>

                        <InputField />
                    </InputConatiner>
                    {/* Email */}
                    <InputConatiner>
                        <InputName>
                            Email
                        </InputName>
                        <InputField />

                    </InputConatiner>
                    <InputName>
                        Rating (Elo)
                    </InputName>
                    <EloRange onChange={getRangeX} step="200" type="range" id="rating" name="rating" min="300" max="3000" />
                    {/* output of the input */}
                    <RangeOutput className='range-output'>
                        value
                    </RangeOutput>
                    {/* from mui */}
                    <Typography id="non-linear-slider" gutterBottom>
                        Storage: {valueLabelFormat(calculateValue(value))}
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
                    />
                    {/* agremmen to sharing the enfo */}
                    <Btn>
                        play
                        <Aroow src={arrow} />
                    </Btn>
                </TextConatiner>
                <ImageConatiner>
                    <Image src={image} />

                </ImageConatiner>

            </LogContainer>
        </Container>
    )
}

export default Log


const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const LogContainer = styled.div`
/* background-color: #181818; */
height: 500px;
/* inject */
color: white;
height:700px ;
display: flex;
width: 80%;

`

const TextConatiner = styled.div`
width:50% ;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 30px;
`

const InputName = styled.h2`
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-size: var(--SubheadingSizeDisktop);
  font-weight: 400;
`
const InputField = styled.input`
background: rgba(217, 217, 217, 0.38);
border: 2.65595px solid #FFFFFF;
border-radius: 66.3987px;
height: 30px;
width: 60%;
`
const InputConatiner = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
`
const Title = styled.div`
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-size: var(--headingSizeDisktop);
  font-weight: 400;
  margin: 0;
  text-align: left;
`
const ImageConatiner = styled.div`
width:50% ;
/* background-color:gray ; */
`
const Image = styled.img`
object-fit: fill;
max-height: 100%;
`
const Btn = styled.button`
  cursor: pointer;
  border: 2px white solid;
  border-radius: 50px;
  background: none;
  color: white;
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-weight: 400;
  font-size: var(--linkSizeDispktop);
  padding: 11.2px 22.4px;
  display: flex;
  justify-content: center;
align-items: center;
gap: 10px;
width: fit-content;

  @media (max-width: 768px) {
    font-size: var(--linkSizemobile);
  }
`
const Aroow = styled.img`
width: 30px;
object-fit: fill;
`
const EloRange = styled.input`
width: 80% !important;

`
const RangeOutput = styled.h3`
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-size: var(--SubheadingSizeDisktop);
  font-weight: 400;
`