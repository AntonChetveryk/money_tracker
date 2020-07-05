import React from "react";
import styled from "styled-components";
const Wrapper = styled.div``;

export default class ExpenseCard extends React.Component {
  render() {
    const {
      expense: { date, currency, product, money },
    } = this.props;

    return (
      <Wrapper>
        <div className="card mb-2">
          <div className="card-body">
            <div className="card-text">{`Date: ${date}`}</div>
            <div className="card-text">{`Currency: ${currency}`}</div>
            <div className="card-text">{`Product: ${product}`}</div>
            <div className="card-text">{`Money: ${money}`}</div>
          </div>
        </div>
      </Wrapper>
    );
  }
}
