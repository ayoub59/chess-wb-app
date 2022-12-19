import styled, { css } from "styled-components";
import React, { useEffect } from "react";

export const BrandingaliskajeRegularNormalWhite3 = css`
  color: var(--white);
  font-family: var(--font-family-branding_aliskaje-regular);
  font-size: var(--font-size-xxxl);
  font-weight: 400;
  font-style: normal;
`;

export const BrandingaliskajeRegularNormalWhite4 = css`
  color: var(--white);
  font-family: var(--font-family-branding_aliskaje-regular);
  font-size: var(--font-size-l);
  font-weight: 400;
  font-style: normal;
`;

function App() {
  useEffect(() => {
    var image = document.querySelectorAll(".arrow-2-AB8MDr");
    new window.simpleParallax(image, { orientation: "up", scale: 1.2, overflow: true, delay: 0.4, transition: "none" });
    var image = document.querySelectorAll(".rectangle-4-AB8MDr");
    new window.simpleParallax(image, {
      orientation: "down",
      scale: 1.2,
      overflow: true,
      delay: 0.4,
      transition: "none",
    });
  }, []);

  return (
    <LogIn>
      <OverlapGroup2>
        <OverlapGroup1>
          <img className="arrow-2-AB8MDr" src="arrow-2.png" alt="arrow 2" />
          <Group7>
            <Chcheck>
              <IconCheckMark src="vector-2.svg" alt="icon-check_mark" />
            </Chcheck>
            <IAgreeOnSharingTheInfo>i agree on sharing the info</IAgreeOnSharingTheInfo>
          </Group7>
          <img className="rectangle-4-AB8MDr" src="rectangle-4.svg" alt="Rectangle 4" />
        </OverlapGroup1>
        <a href="javascript:SubmitForm('form1')">
          <Btn>
            <Place>send</Place>
            <Vector src="vector-1.svg" alt="Vector" />
          </Btn>
        </a>
        <Title>Log in</Title>
        <Group4>Full Name</Group4>
        <Group4 className="group-5">
          Email
        </Group4>
        <Group6>
          <RatingElo>rating (Elo)</RatingElo>
          <Group3>
            <OverlapGroup>
              <Line3 src="line-3-1.svg" alt="Line 3" />
              <Line4 src="line-4-5.svg" alt="Line 4" />
              <Ellipse2></Ellipse2>
              <Ellipse3></Ellipse3>
            </OverlapGroup>
            <NumberContainer>
              <Number>0</Number>
              <Number1>700</Number1>
            </NumberContainer>
          </Group3>
        </Group6>
      </OverlapGroup2>
    </LogIn>
  );
}

export default App;
const LogIn = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 1237px;
`;

const OverlapGroup2 = styled.div`
  width: 1235px;
  height: 1088px;
  position: relative;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1228px;
  height: 1088px;
  top: 0;
  left: 7px;
`;

const Group7 = styled.div`
  position: absolute;
  height: 48px;
  top: 764px;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 488px;
  gap: 31px;
`;

const Chcheck = styled.div`
  height: 35px;
  margin-top: 0.4px;
  display: flex;
  padding: 4.9px 5.6px;
  align-items: flex-start;
  min-width: 35px;
  background-color: var(--alto);
  border-radius: 35px;
  border: 1.3999727964401245px solid;
  border-color: var(--white);
`;

const IconCheckMark = styled.img`
  width: 21px;
  height: 23px;
`;

const IAgreeOnSharingTheInfo = styled.p`
  ${BrandingaliskajeRegularNormalWhite3}
  min-width: 420px;
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
`;

const Btn = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 40px;
  position: absolute;
  top: 879px;
  left: 0;
  border-radius: 100px;
  border: 3px solid;
  border-color: var(--white);
  cursor: pointer;
`;

const Place = styled.div`
  ${BrandingaliskajeRegularNormalWhite4}
  width: fit-content;
  margin-top: -3px;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

const Vector = styled.img`
  min-width: 46.666748046875px;
  height: 46.6666259765625px;
`;

const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 7px;
  font-family: var(--font-family-branding_aliskaje-regular);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xl);
  letter-spacing: 0;
  line-height: 96px;
  white-space: nowrap;
`;

const Group6 = styled.div`
  position: absolute;
  width: 441px;
  top: 527px;
  left: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 186px;
  gap: 20px;
`;

const RatingElo = styled.div`
  ${BrandingaliskajeRegularNormalWhite3}
  margin-left: 4px;
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
`;

const Group3 = styled.div`
  width: 443px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 118px;
  gap: 20px;
`;

const OverlapGroup = styled.div`
  width: 439px;
  height: 50px;
  position: relative;
`;

const Line3 = styled.img`
  position: absolute;
  width: 411px;
  height: 4px;
  top: 21px;
  left: 28px;
`;

const Line4 = styled.img`
  position: absolute;
  width: 284px;
  height: 4px;
  top: 21px;
  left: 155px;
`;

const Ellipse2 = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  left: 0;
  background-color: var(--licorice);
  border-radius: 25px;
  border: 2px solid;
  border-color: var(--chicago);
`;

const Ellipse3 = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  left: 130px;
  background-color: var(--licorice);
  border-radius: 25px;
  border: 2px solid;
  border-color: var(--chicago);
`;

const NumberContainer = styled.div`
  ${BrandingaliskajeRegularNormalWhite3}
  height: 48px;
  margin-left: 14px;
  display: flex;
  align-items: flex-start;
  min-width: 171px;
  gap: 88px;
`;

const Number = styled.div`
  min-width: 23px;
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
`;

const Number1 = styled.div`
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
`;

function Group4(props) {
  const { children, className } = props;

  return (
    <Group41 className={`group-4 ${className || ""}`}>
      <FullName className="full-name">
        {children}
      </FullName>
      <Rectangle3 className="rectangle-3"></Rectangle3>
    </Group41>
  );
}

const Group41 = styled.div`
  position: absolute;
  width: 415px;
  top: 197px;
  left: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 134px;
  gap: 20px;

  &.group-4.group-5 {
    top: 351px;
    left: 7px;
  }
`;

const FullName = styled.div`
  ${BrandingaliskajeRegularNormalWhite3}
  letter-spacing: 0;
  line-height: 48px;
  white-space: nowrap;
`;

const Rectangle3 = styled.div`
  width: 413px;
  height: 66px;
  background-color: var(--alto);
  border-radius: 66.4px;
  border: 2.6559486389160156px solid;
  border-color: var(--white);
`;