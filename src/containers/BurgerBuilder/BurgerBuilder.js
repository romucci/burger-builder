import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import Auxiliar from "../../hoc/Auxiliar";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.4
};

class BurgerBuilder extends Component {
  componentDidMount () {
    console.log(this.props)
  }
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasing: false
  };

  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
  };

  removeIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (!oldCount <= 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - INGREDIENT_PRICES[type];
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: newPrice
      });
    }
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients
    };

    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }
    return (
      <Auxiliar>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            cancelPurchase={this.purchaseCancelHandler}
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          disabled={disableInfo}
          ordered={this.purchaseHandler}
          ingredientRemoved={this.removeIngredientHandler}
          ingredientAdded={this.addIngredientHandler}
        />
      </Auxiliar>
    );
  }
}

export default withRouter(BurgerBuilder);
