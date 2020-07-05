import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 10px 0;
`;

const Header = () => (
  <header>
    <Wrapper>
      <Link to="/" className="mr-2">
        Main
      </Link>
      <Link to="/list">List</Link>
    </Wrapper>
  </header>
);

export default Header;
