import React from "react";
import styled, { css } from "styled-components";
import logo from "../images/ChOn.svg";

function header() {
  return (
    <div>
      <NavContainer>
        <LogoContainer>
          <Logo src={logo} alt="Column" />
        </LogoContainer>
        <Links>
          <Title href="#">about</Title>

          <Title href="#">archive</Title>
        </Links>
        <BtnConatiner>
          <LogBtn>log in</LogBtn>
          <SignBtn>sign in</SignBtn>
        </BtnConatiner>
      </NavContainer>
    </div>
  );
}

export default header;

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: space-around;
  /* background-color: black; */
  flex-direction: row;
`;

const LogoContainer = styled.div`
  display: flex;
`;

const Logo = styled.img`
  /* height: 27px; */
`;

const Links = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 32px;
`;

const Title = styled.a`
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;

  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-weight: 400;
  font-style: normal;
  font-size: var(--linkSizeDispktop);
`;

const BtnConatiner = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 32px;
  justify-content: center;
  align-items: center;
`;
const LogBtn = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  color: white;
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-weight: 400;
  font-size: var(--linkSizeDispktop);
`;
const SignBtn = styled.button`
  cursor: pointer;
  border: 1px white solid;
  border-radius: 50px;
  background: none;
  color: white;
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-weight: 400;
  font-size: var(--linkSizeDispktop);
  padding: 11.2px 22.4px;
`;
