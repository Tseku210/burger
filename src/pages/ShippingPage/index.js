import React from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { Route } from "react-router-dom";
import ContactData from "../../components/ContactData";

class ShippingPage extends React.Component {
  goBack = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.replace("/ship/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "24px" }}>
          <strong>Hope your meal will be delicous :)</strong>
        </p>
        <Burger />
        <Button clicked={this.goBack} btnType="Danger" text="CANCEL ORDER" />
        <Button
          clicked={this.showContactData}
          btnType="Success"
          text="DELIVERY DETAIL"
        />
        <Route path="/ship/contact" render={() => <ContactData />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    price: state.burgerReducer.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
