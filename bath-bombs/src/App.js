import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Cart />
        <NavMenu />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
