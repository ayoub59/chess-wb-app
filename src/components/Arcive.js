import React from 'react'
import styled from "styled-components";

function Arcive() {
    return (
        <Conatiner>
            <ArContainer>
                <Title>Log in</Title>
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
margin-left: 15%;
`
const ArContainer = styled.div`
margin-left: 15%;
`