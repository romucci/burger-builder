import React from "react";
import styled from "styled-components";
import BurgerLogo from "../../assets/images/127 burger-logo.png";

const LogoWrapper = styled.div`
  background-color: white;
  padding: 8px;
  height: 80%;
  box-sizing: border-box;
  border-radius: 5px;
`;

const ImageWrapper = styled.img`
  height: 100%;
`

const logo = props => {
  return (
    <LogoWrapper>
      <ImageWrapper src={BurgerLogo} alt={"My Burger"} />
    </LogoWrapper>
  );
};

export default logo;
