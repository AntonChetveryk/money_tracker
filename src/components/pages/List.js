import React from "react";
import { connect } from "react-redux";
import ExpenseCard from "../ExpenseCard";
import {
  updateExpenses,
  removeDateFromExpenses,
} from "../../redux/actions/mainActions";
import Field from "../Field";

class List extends React.Component {
  state = {
    date: "",
    total: "",
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState((state) => ({
      [name]: value,
    }));
  };

  onClick = (e) => {
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

  render() {
    const { expenses } = this.props;
    const { date } = this.state;
    return (
      <div className="mt-2">
        <div className="my-2">
          <Field
            id="1"
            name="date"
            value={date}
            labelText="date"
            onChange={this.onChange}
            type="date"
            placeholder="YY-MM-DD"
          />
          <button className="btn btn-dark mt-2" onClick={this.onClick}>
            Remove date
          </button>
        </div>

        {expenses.length > 0 ? (
          expenses
            .sort(
              (a, b) => a.date.split("-").join("") - b.date.split("-").join("")
            )
            .map((expense, i) => <ExpenseCard expense={expense} key={i} />)
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
