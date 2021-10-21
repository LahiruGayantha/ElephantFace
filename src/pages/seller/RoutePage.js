import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ShopPage from "./Shop_page";
import Landing_business_page from "./Landing_business_page";
import Item_page from "./Item_page";
import { useSelector } from "react-redux";

const RoutePage = (props) => {
  const { path, url } = useRouteMatch();
  const useAuth = useSelector((state) => state.user.authSuccess);
  return (
    <Switch>
      {useAuth && (
        <Route exact path={`${path}/shop`}>
          <ShopPage />
        </Route>
      )}
      {useAuth && (
        <Route exact path={`${path}/item/:id`}>
          <Item_page />
        </Route>
      )}
      <Route path={path}>
        <Landing_business_page />
      </Route>
    </Switch>
  );
};

export default RoutePage;
