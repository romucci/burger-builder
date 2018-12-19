import React from "react";
import styled from "styled-components";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const BurgerWrapper = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  overflow: scroll;
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }
  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
`;

const Message = styled.h3`
  color: #ccc;
  font-size: 18px;
  @media (max-width: 900px) {
    color: blue;
  }
`;

const Burger = props => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => arr.concat(el), []);
  return (
    <BurgerWrapper>
      <BurgerIngredient type={"bread-top"} />
      {transformedIngredients.length ? (
        transformedIngredients
      ) : (
        <Message>Please start adding stuff</Message>
      )}
      <BurgerIngredient type={"bread-bottom"} />
    </BurgerWrapper>
  );
};

export default Burger;
