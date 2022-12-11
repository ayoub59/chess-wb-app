import React from "react";
import styled, { css } from "styled-components";
import logo from "../images/ChOn.svg";

function header() {
  return (
    <div>
      <NavContainer>
        <Container>
          <Logo src={logo} alt="Column" />
          <Links>
            <Title href="#">about</Title>

            <Title href="#">archive</Title>
          </Links>
          <Column2></Column2>
        </Container>
      </NavContainer>
    </div>
  );
}

export default header;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 72px;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
  background-color: black;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  align-self: stretch;
`;

const Logo = styled.img`
  flex: 1;
  /* min-width: 557.5px; */
  height: 27px;
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
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
`;
