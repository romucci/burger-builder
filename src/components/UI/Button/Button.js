import React from "react";
import styled from "styled-components";

const checkProps = props => {
  if (props.cancel) {
    return '#cc5a57';
  } else if (props.confirm) {
    return "#126d2b";
  }
};

const Button = styled.button`
  outline: none;
  cursor: pointer;
  font-weight: 600;
  width: 100px;
  height: 40px;
  color: ${props => {
    return props.cancel || props.confirm ? checkProps(props) : "blue";
  }}
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${props => checkProps(props)};
  margin: 3px;
  &:hover {
    background-color: ${props =>
      props.cancel || props.confirm ? checkProps(props) : "blue"};
    color: white;
  }
`;

console.log(Button);

const button = props => {
  return (
    <Button
      confirm={props.confirm}
      cancel={props.cancel}
      onClick={props.clicked}
    >
      {props.children}
    </Button>
  );
};

export default button;
