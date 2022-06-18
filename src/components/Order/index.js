import React from "react";
import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Orts : Gahain mah : {props.order.orts.bacon}, Salad
        {props.order.orts.salad}, Uhriin mah : {props.order.orts.meat}, Byslag :
        {props.order.orts.cheese}
      </p>
      <p>
        Hayg : {props.order.hayag.name} | {props.order.hayag.street} |
        {props.order.hayag.city}
      </p>
      <p>
        Uniin dun: <strong>{props.order.dun}₮</strong>
      </p>
    </div>
  );
};

export default Order;
