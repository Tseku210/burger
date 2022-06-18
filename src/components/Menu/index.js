import React, { Fragment } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import MenuItem from "../menuItem";

const Menu = (props) => {
  return (
    <div>
      <ul className={css.Menu}>
        {props.userId ? (
          <Fragment>
            <MenuItem exact link="/">
              Shine Zahialga
            </MenuItem>
            <MenuItem link="/orders">Zahialganuud</MenuItem>
            <MenuItem link="/logout">Logout</MenuItem>
          </Fragment>
        ) : (
          <Fragment>
            <MenuItem link="/login">Login</MenuItem>
            <MenuItem link="/signup">Signup</MenuItem>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupReducer.userId,
  };
};

export default connect(mapStateToProps)(Menu);
