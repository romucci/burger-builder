import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const ToolbarWrapper = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(225, 103, 32, 0.77);
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

const StyledLink = styled.a`
  right: 0;
  height: 56px;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  font-weight: 600;
  color: white;
  z-index: 100;
  cursor: pointer;
  &:hover {
    background-color: white;
    background-color: rgba(232, 104, 32, 0.53);
  }
`;

const StyledLinkWrapper = styled.div`
  right: 0;
  position: fixed;
  height: 56px;
  text-decoration: none;
  display: flex;
  align-items: center;
  z-index: 90;
  padding: 0 20px;
  box-sizing: border-box;
`;

const toolbar = props => {
  const { activeClass } = styles;
  return (
    <ToolbarWrapper>
      <Logo />
      <StyledLinkWrapper>
        <StyledLink to="/" as={NavLink} exact activeStyle={activeClass}>
          Burger Builder
        </StyledLink>
        <StyledLink to="/checkout" exact as={NavLink} activeStyle={activeClass}>
          Checkout
        </StyledLink>
      </StyledLinkWrapper>
    </ToolbarWrapper>
  );
};

const styles = {
  activeClass: {
    backgroundColor: "#e16720"
  }
};
export default toolbar;
