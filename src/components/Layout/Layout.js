import React from "react";
import Aux from "../../hoc/Auxiliar";
import styled from "styled-components";
import Toolbar from "../Navigation/Toolbar";

const Main = styled.main`
  margin-top: 56px;
`;

const Layout = props => {
  return (
    <Aux>
      <Toolbar />
      <Main>{props.children}</Main>
    </Aux>
  );
};

export default Layout;
