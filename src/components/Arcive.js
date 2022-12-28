import React from 'react'
import styled, { css } from "styled-components";

function Arcive() {
  function GameData() {
    return (
      <Gameinfo>
        <Rank># 1</Rank>
        <Players>
          <Color>ayoub</Color>
          <Color>vs</Color>
          <Color>abdo</Color>
        </Players>
        <Color>date</Color>
        <Color>game</Color>
      </Gameinfo>
    )
  }
  return (
    <Conatiner>
      <ArContainer>
        <Title>last games</Title>
        <ArItem>
          <GameData />
          <GameData />
          <GameData />
          <GameData />
        </ArItem>
      </ArContainer>
    </Conatiner>
  )
}

export default Arcive

const Title = styled.div`
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-size: var(--headingSizeDisktop);
  font-weight: 400;
  margin: 0;
  text-align: left;
`
const Conatiner = styled.div`
display: flex;
justify-content: center;
`
const ArContainer = styled.div`
width:80%;
`

// new


export const AlataNormalWhite916px = css`
  color: var(--white);
  font-family: var(--font-family-alata);
  font-size: var(--font-size-xxxxxl);
  font-weight: 400;
  font-style: normal;
`;

const ArItem = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Rank = styled.h1`

color: var(--white);
  font-family: var(--font-family-alata);
  font-size: 3vw;
  font-weight: 400;
  font-style: normal;
  /*  */
  width: fit-content;
  letter-spacing: 0;
  white-space: nowrap;
`;

const Gameinfo = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 85px;
  align-items: center;
`;

const Players = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 42px;
`;

const Color = styled.div`
  width: fit-content;
  letter-spacing: 0;
  line-height: 68.7px;
  white-space: nowrap;
  color: var(--concrete);
  font-family: "BrandingAliskaje";
  font-size: var(--GameInfoDisktop);
  font-weight: 400;
`;