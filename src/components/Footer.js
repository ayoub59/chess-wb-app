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
                <span className="brandingaliskaje-regular-normal-white-20px">all right are reserved - made by </span>
                <Span1>about Zen</Span1>
            </AllRightAreReserv>
            <IconsConatiner>
                <Icons src={drible} />
                <Icons src={github} />
                <Icons src={insta} />
                <Icons src={twitter} />
            </IconsConatiner>
            <div></div>
        </Fotter>
    )
}

export default Footer

// 
const Icons = styled.img`

`
const IconsConatiner = styled.div`
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
  align-items: flex-end;
  justify-content: space-between;
`;

const AllRightAreReserv = styled.p`
  align-self: center;
  margin-bottom: 2px;
  font-family: var(--font-family-branding_aliskaje-regular);
  font-weight: 400;
  font-size: var(--font-size-xxl);
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Span1 = styled.span`
  color: var(--alto-2);
`;

const Frame1 = styled.img`
  width: 310px;
  height: 34px;
`;