import React from "react";
import Field from "../UI/Field";
import { connect } from "react-redux";
import { updateExpenses } from "../../redux/actions/mainActions";

const currencies = [
  { name: "EUR", id: 1 },
  { name: "USD", id: 2 },
  { name: "PLN", id: 3 },
];

class Main extends React.Component {
  state = {
    values: {
      date: "",
      money: "",
      product: "",
      currency: "EUR",
    },
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      values: {
        ...state.values,
        [name]: value,
      },
    }));
  };

  onClick = (e) => {
    e.preventDefault();
    const {
      values: { date, money, product, currency },
    } = this.state;
    if (date && money && product && currency) {
      this.props.updateExpenses(this.state.values);
      this.props.history.push("/list");
    } else alert("Fill in all the fields");
  };

  render() {
    const {
      values: { date, money, product, currency },
    } = this.state;
    return (
      <div className="mt-2">
        <h1 className="my-4 text-center">Add new Expense</h1>
        <form>
          <Field
            id="1"
            name="date"
            value={date}
            labelText="date"
            onChange={this.onChange}
            type="date"
            placeholder="YY-MM-DD"
          />
          <Field
            id="2"
            name="money"
            value={money}
            labelText="amount of money spent"
            onChange={this.onChange}
            type="number"
            placeholder="value"
          />
          <select
            id="3"
            name="currency"
            value={currency}
            onChange={this.onChange}
          >
            {currencies.map((carrency) => (
              <option key={carrency.id} value={carrency.name}>
                {carrency.name}
              </option>
            ))}
          </select>
          <label htmlFor="3" className="ml-2">
            currency
          </label>
          <Field
            id="4"
            name="product"
            value={product}
            labelText="product"
            onChange={this.onChange}
            type="text"
            placeholder="product"
          />
          <button onClick={this.onClick} className="btn btn-primary mt-2">
            Add expense
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.mainReducer.expenses,
  };
};

const mapDispatchToProps = { updateExpenses };

export default connect(mapStateToProps, mapDispatchToProps)(Main);
