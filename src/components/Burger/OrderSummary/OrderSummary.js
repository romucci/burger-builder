import React from "react";
import Auxiliar from "../../../hoc/Auxiliar";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxiliar>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total price: ${props.price.toFixed(2)}USD</p>
      <p>Continue to checkout?</p>
    </Auxiliar>
  );
};

export default orderSummary;
