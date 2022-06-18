import React from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";

class BurgerPage extends React.Component {
  state = {
    confirmOrder: false,
  };

  continueOrder = () => {
    this.props.history.push("/ship");
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  render() {
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              ingredientsNames={this.props.ingredientNames}
              ingredients={this.props.burgeriinOrts}
            />
          )}
        </Modal>

        <Burger />
        <BuildControls
          ortsNemeh={this.props.burgerOrtsNem}
          ortsHasah={this.props.burgerOrtsHas}
          showConfirmModal={this.showConfirmModal}
        />
      </div>
    );
  }
}

export default BurgerPage;
