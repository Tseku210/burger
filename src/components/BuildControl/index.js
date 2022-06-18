import React from "react";
import css from "./style.module.css";

const BuildControl = (props) => {
  return (
    <div className={css.BuildControl}>
      <div className={css.Label}>{props.orts}</div>
      <button className={css.Less} onClick={() => props.ortsNemeh(props.type)}>
        Nemeh
      </button>
      <button
        disabled={props.disabled[props.type]}
        className={css.More}
        onClick={() => props.ortsHasah(props.type)}
      >
        Hasah
      </button>
    </div>
  );
};

export default BuildControl;
