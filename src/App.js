import Pages from "./pages/pages";
import Category from "./components/category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/search";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {GiKnifeFork} from 'react-icons/gi'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={"/"}>Foodly</Logo>
      </Nav>
      <Search />
      <Category />
    <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weigth: 400;
font-family: 'Lobster Two', cursive;
`
const Nav = styled.div`
padding: 4rem 0rem;
`

export default App;
