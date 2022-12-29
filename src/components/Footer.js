import React from 'react';
import styled, { css } from "styled-components";
import drible from "../images/icons/drible.svg";
import github from "../images/icons/github.svg";
import insta from "../images/icons/insta.svg";
import twitter from "../images/icons/twitter.svg";


function Footer() {
  return (
    <Fotter>
      <AllRightAreReserv>
        <Rights>all right are reserved - made by </Rights>
        <Link href="#"><Creator>about Zen</Creator></Link>
      </AllRightAreReserv>
      <IconsConatiner>
        <Link href="#"><Icons src={drible} /></Link>
        <Link href="#"><Icons src={github} /></Link>
        <Link href="#"><Icons src={insta} /></Link>
        <Link href="#"><Icons src={twitter} /></Link>
      </IconsConatiner>
    </Fotter>
  )
}

export default Footer;

// 
const Creator = styled.p`
  width: fit-content;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  color: var(--white);
  font-family: "BrandingAliskaje";
  font-weight: 400;
  font-style: normal;
  font-size: var(--linkSizeDispktop);
  @media (max-width: 768px) {
    font-size: var(--linkSizemobile);
  }
`
const Rights = styled.p`
  width: fit-content;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
  text-decoration: none;
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-weight: 400;
  font-style: normal;
  font-size: var(--linkSizeDispktop);
  @media (max-width: 768px) {
    font-size: var(--linkSizemobile);
  }
`
const Link = styled.a`
color: initial;
text-decoration: none;
`
const Icons = styled.img`
`
const None = styled.div`
width: 10px;
background-color: red;
`
const IconsConatiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
`
export const BrandingaliskajeRegularNormalWhite2 = css`
  color: var(--white);
  font-family: var(--font-family-branding_aliskaje-regular);
  font-size: var(--font-size-xxl);
  font-weight: 400;
  font-style: normal;
`;
const Fotter = styled.div`
  display: flex;
  padding: 29px 29px;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
`;

const AllRightAreReserv = styled.div`
  align-self: center;
  margin-bottom: 2px;
  font-family: var(--font-family-branding_aliskaje-regular);
  font-weight: 400;
  font-size: var(--font-size-xxl);
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
  display: flex;
  gap: 20px;
`;

const Span1 = styled.span`
  color: var(--alto-2);
`;

const Frame1 = styled.img`
  width: 310px;
  height: 34px;
`;