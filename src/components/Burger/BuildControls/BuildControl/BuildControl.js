import React from "react";
import styled from "styled-components";

const BuildControlWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin: 5px 0;
`;

const ControlLabel = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

const LessButton = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;
  background-color: #d39952;
  color: white;
  &:hover,
  &:active {
    background-color: #daa972;
    color: white;
  }
  &:disabled {
    background: #bac3cf;
  }
`;

const MoreButton = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;
  background-color: #8f5e1e;
  color: white;
  &:hover,
  &:active {
    background-color: #99703f;
    color: white;
  }
`;

const buildControl = props => {
  return (
    <BuildControlWrapper>
      <ControlLabel>{props.label}</ControlLabel>
      <LessButton disabled={props.disabled} onClick={props.removed}>
        Less
      </LessButton>
      <MoreButton onClick={props.added}>More</MoreButton>
    </BuildControlWrapper>
  );
};

export default buildControl;
