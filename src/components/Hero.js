import React from 'react'
import styled, { css } from "styled-components";
import image from "../images/hero-image.png";
import arrow from "../images/arrow.svg";

function Hero() {
    return (
        <Conatiner>
            <HeroContainer>
                <TextConatiner>
                    <Text>
                        Chess
                    </Text>
                    <TextAndLine>
                        <Line></Line>
                        <Text>Online</Text>
                    </TextAndLine>
                    <Paragraph>
                        <P>
                            Lorem ipsum dolor sit amet consectetur. Mauris cursus ut diam iaculis tincidunt massa quis quis dolor. Est quisque odio turpis facilisis tortor.
                        </P>
                    </Paragraph>
                    <Btn>
                        play
                        <Aroow src={arrow} />
                    </Btn>
                </TextConatiner>
                <ImageConatner>
                    <Image src={image} />
                </ImageConatner>
            </HeroContainer>

        </Conatiner>
    )
}

export default Hero
const Conatiner = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

const HeroContainer = styled.div`
color: white;
height:700px ;
display: flex;
width: 80%;
@media (max-width: 768px) {
  }
`
const TextConatiner = styled.div`
width:50% ;
display: flex;
    flex-direction: column;

`
const Text = styled.h1`
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-size: var(--headingSizeDisktop);
  font-weight: 400;
  margin: 0;
  text-align: left;
`
const TextAndLine = styled.div`
display: flex;
align-items: center;
`
const Line = styled.div`
height: 3px;
width: 80px;
background-color: white;
`
const Paragraph = styled.div``
const P = styled.p`
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-weight: 400;
  text-align: left;
  line-height: 150%;
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
const ImageConatner = styled.div`
width:50% ;

`
const Image = styled.img`
object-fit: fill;
max-height: 70%;
@media (max-width: 768px){
width: 43vw;
}
;
`
const Aroow = styled.img`
width: 30px;
object-fit: fill;
`
