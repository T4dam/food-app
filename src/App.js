import Pages from "./pages/pages";
import Category from "./components/category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/search";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Search />
      <Category />
    <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
