import React from "react";
import styled from "styled-components";
import BuildControl from "./BuildControl/BuildControl";

const BuildControlsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: auto;
  padding: 10px 0;
`;

const BurgerPrice = styled.h3`
  color: rgba(140, 14, 7, 0.75);
  width: 100%;
  text-align: center;
  font-family: Consolas, sans-serif;
  font-size: 30px;
`;

const OrderButton = styled.button`
  background-color: rgba(39,162,34,0.77);
  border: none;
  color: white;
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 20px;
  font-weight: bold;
  &:hover {
    background-color: #228c1d;
  }
  &:disabled {
    background-color: rgba(46, 198, 39, 0.24);
  }
`;

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" }
];

const buildControls = props => {
  let checkProps = Object.values(props.disabled).includes(false);
  return (
    <BuildControlsWrapper>
      <BurgerPrice>${props.price.toFixed(2)}USD</BurgerPrice>
      {controls.map(control => {
        return (
          <BuildControl
            disabled={props.disabled[control.type]}
            added={() => props.ingredientAdded(control.type)}
            removed={() => props.ingredientRemoved(control.type)}
            key={control.label}
            label={control.label}
            type={control.type}
          />
        );
      })}
      <OrderButton disabled={!checkProps} onClick={props.ordered}>Order Now</OrderButton>
    </BuildControlsWrapper>
  );
};

export default buildControls;
