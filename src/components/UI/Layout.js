import React from "react";
import Header from "./Header";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

class Layout extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Layout;
