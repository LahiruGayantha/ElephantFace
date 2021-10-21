import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Landing_page from "./pages/Landing_page";
import Shop_page from "./pages/Shop_page";
import Item_page from "./pages/Item_page";
import Basket_page from "./pages/Basket_page";
import { useSelector } from "react-redux";
import SellerPages from "./pages/seller/RoutePage";

function App() {
  const logedInUser = useSelector((state) => state.user.authSuccess);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing_page />
        </Route>
        {logedInUser && (
          <Route exact path="/shop">
            <Shop_page />
          </Route>
        )}
        {logedInUser && (
          <Route exact path="/item/:id">
            <Item_page />
          </Route>
        )}
        {logedInUser && (
          <Route exact path="/basket">
            <Basket_page />
          </Route>
        )}
        <Route path="/seller">
          <SellerPages />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
