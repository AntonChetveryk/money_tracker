import React from "react";
import { connect } from "react-redux";
import ExpenseCard from "../ExpenseCard";
import {
  updateExpenses,
  removeDateFromExpenses,
} from "../../redux/actions/mainActions";
import Field from "../UI/Field";
import { fetchApi, API_URL, API_KEY } from "../../api/fetchApi";

const currencies = [
  { name: "EUR", id: 1 },
  { name: "USD", id: 2 },
  { name: "PLN", id: 3 },
];

class List extends React.Component {
  state = {
    date: "",
    total: "",
    currency: "EUR",
    rates: null,
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      [name]: value,
    }));
  };

  removeDate = (e) => {
    const { expenses, removeDateFromExpenses } = this.props;
    e.preventDefault();
    if (this.state.date) {
      let newArr = expenses.filter(
        (expense) => expense.date !== this.state.date
      );
      removeDateFromExpenses(newArr);
      this.setState({ date: "" });
    } else alert("Choose the date");
  };

  getSumInEUR = () => {
    const { expenses } = this.props;
    const { rates } = this.state;
    let sumInEur = 0;
    for (let i = 0; i < expenses.length; i++) {
      console.log(expenses[i].currency, expenses[i].money);
      if (expenses[i].currency === "EUR") sumInEur += Number(expenses[i].money);
      if (expenses[i].currency === "USD")
        sumInEur += Number(expenses[i].money) / rates.USD;
      if (expenses[i].currency === "PLN")
        sumInEur += Number(expenses[i].money) / rates.PLN;
    }
    return Number(sumInEur.toFixed(2));
  };

  getTotal = (e) => {
    e.preventDefault();
    const { currency, rates } = this.state;
    if (currency) {
      switch (currency) {
        case "USD":
          return this.setState({
            total: (this.getSumInEUR() * rates.USD).toFixed(2),
          });
        case "PLN":
          return this.setState({
            total: (this.getSumInEUR() * rates.PLN).toFixed(2),
          });
        default:
          return this.setState({ total: this.getSumInEUR() });
      }
    }
  };

  componentDidMount() {
    fetchApi(`${API_URL}/latest?access_key=${API_KEY}&base=EUR`).then((res) =>
      this.setState({ rates: res.rates })
    );
  }

  render() {
    const { expenses } = this.props;
    const { date, currency, total } = this.state;
    return (
      <div className="mt-2">
        <div className="my-2">
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
            Choose the currency
          </label>
          <div>
            <button
              className="btn btn-primary my-2 block"
              onClick={this.getTotal}
            >
              Total
            </button>
            <span className="ml-4">{total}</span>
          </div>
          <Field
            id="1"
            name="date"
            value={date}
            labelText="date"
            onChange={this.onChange}
            type="date"
            placeholder="YY-MM-DD"
          />
          <button className="btn btn-dark mt-2" onClick={this.removeDate}>
            Remove date
          </button>
        </div>

        {expenses.length > 0 ? (
          <div>
            <h1>Expenses List</h1>
            {expenses
              .sort(
                (a, b) =>
                  a.date.split("-").join("") - b.date.split("-").join("")
              )
              .map((expense, i) => (
                <ExpenseCard expense={expense} key={i} />
              ))}
          </div>
        ) : (
          <h2 className="text-center">Empty List</h2>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.mainReducer.expenses,
  };
};

const mapDispatchToProps = { updateExpenses, removeDateFromExpenses };

export default connect(mapStateToProps, mapDispatchToProps)(List);
