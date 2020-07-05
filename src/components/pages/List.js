import React from "react";
import { connect } from "react-redux";
import ExpenseCard from "../ExpenseCard";
import { updateExpenses } from "../../redux/actions/mainActions";

class List extends React.Component {
  state = {
    clear: "",
    total: "",
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

  render() {
    const { expenses } = this.props;
    return (
      <div className="mt-2">
        {expenses.length > 0
          ? expenses
              .sort(
                (a, b) =>
                  a.date.split("-").join("") - b.date.split("-").join("")
              )
              .map((expense, i) => <ExpenseCard expense={expense} key={i} />)
          : "Empty List"}
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
