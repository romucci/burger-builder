import React from "react";
import Aux from "../../hoc/Auxiliar";
import styled from 'styled-components'

const Main = styled.main`
  margin-top: 20px
`;

const Layout = props => {
  return (
    <Aux>
      <div>Toolbar, Drawer, Backdrop</div>
      <Main>{props.children}</Main>
    </Aux>
  );
};

export default Layout;
