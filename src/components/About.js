import React from 'react'
import styled, { css } from "styled-components";
import image from "../images/creator-image.png"

function About() {
    return (
        <AboutConatiner>
            <TextContainer>
                <Title>creator</Title>
            </TextContainer>
            <CreatorImage src={image} alt="creator" />
            <TextContainer>
                <AboutTheCreator>
                    Lorem ipsum dolor sit amet consectetur. Tincidunt blandit euismod ac at amet nisi adipiscing nunc. Consectetur ultricies facilisis luctus sit amet nulla non integer volutpat, Lorem ipsum dolor sit amet consectetur. Tincidunt blandit euismod ac at amet nisi adipiscing nunc. Consectetur ultricies facilisis luctus sit amet nulla non integer volutpat,Lorem ipsum dolor sit amet consectetur. Tincidunt blandit euismod ac at amet nisi adipiscing nunc. Consectetur ultricies facilisis luctus sit amet nulla non integer volutpat
                </AboutTheCreator>
            </TextContainer>
        </AboutConatiner>
    )
}

export default About
const AboutConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.h1`
  margin-right: 236px;
  min-width: 477px;
  letter-spacing: 0;
  line-height: 192px;
  white-space: nowrap;

  /*  */
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-size: var(--headingSizeDisktop);
  font-weight: 400;
  margin: 0;
  text-align: left;
width: 80%;

`;

const CreatorImage = styled.img`
  width: 905px;
  object-fit: fill;
  margin-top: 25px;
`;

const AboutTheCreator = styled.p`
  margin-top: 40px;
  margin-right: 4px;
  letter-spacing: 0;
  line-height: 52.3px;
  /*  */
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-size:var(--PSizeDisktop) ;
  font-weight: 400;
  text-align: left;
  line-height: 180%;
width: 80%;

`;
const TextContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
`