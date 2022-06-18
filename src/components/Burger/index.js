import React from "react";
import BurgerIngredient from "../BurgerIngredient";
import css from "./style.module.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const Burger = (props) => {
  const items = Object.entries(props.orts);
  let content = [];
  items.map((el, j) => {
    for (let i = 0; i < el[1]; i++)
      content.push(<BurgerIngredient key={`${j}${i}`} type={el[0]} />);
    return null;
  });

  if (content.length === 0)
    content = <p>Hachirtai talhiniihaa ortsiig songono uu...</p>;

  return (
    <div className={css.Burger}>
      <BurgerIngredient type="bread-top" />
      {content}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orts: state.burgerReducer.ingredients,
  };
};

export default connect(mapStateToProps)(withRouter(Burger));
