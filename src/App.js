import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing_page from "./pages/Landing_page";
import Shop_page from "./pages/Shop_page";
import Item_page from "./pages/Item_page";
import Basket_page from "./pages/Basket_page";
import { useSelector } from "react-redux";

function App() {
  const logedInUser = useSelector((state) => state.userFirstName);
  console.log(logedInUser);
  return (
    <div>
      <Switch>
        <Route path="/shop">
          <Shop_page />
        </Route>
        <Route path="/item/:id">
          <Item_page />
        </Route>
        <Route path="/basket">
          <Basket_page />
        </Route>
        <Route path="/">
          <Landing_page />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
