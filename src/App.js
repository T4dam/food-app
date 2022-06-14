import Pages from "./pages/pages";
import Category from "./components/category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/search";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {GiForkKnifeSpoon} from 'react-icons/gi'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav>
        <GiForkKnifeSpoon style={{fontSize: '1.8rem',}}/>
        <Logo to={"/"}>Foodly</Logo>
      </Nav>
      <Category />
      <Search />
    <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
text-decoration: none;
font-size: 2rem;
font-weigth: 400;
font-family: Pacifico, cursive;
`
const Nav = styled.div`
padding-top: 4rem;
padding-bottom: 1.3rem
`

export default App;
