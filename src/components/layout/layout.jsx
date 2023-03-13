import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

const LayoutContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}

export default Layout;