import Pages from "./pages/pages";
import Category from "./components/category";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Category />
    <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
