import React from "react";
import styled from "styled-components";
import Logo from "../Logo/Logo";

const ToolbarWrapper = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(225, 103, 32, 0.77);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

const toolbar = props => {
  return (
    <ToolbarWrapper>
      <Logo />
      <div>Shit</div>
      <div>Shit</div>
      <div>Shit</div>
    </ToolbarWrapper>
  );
};

export default toolbar;
