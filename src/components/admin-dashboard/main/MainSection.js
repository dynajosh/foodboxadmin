import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./main-component/home/Home";
import Orders from "./main-component/orders/Orders";
import SubscriptionHistory from "./main-component/subscription-history/SubscriptionHistory";
import AllFoods from "./main-component/foods/AllFoods";
import AddFood from "./main-component/foods/AddFood";
import Subscribe from "./main-component/subscribe/Subscribe";

export default function MainSection() {
  return (
    
    <div className="main-section">
      <Switch>
        <Route exact path="/dashboard" component={Home} />
        <Route  path="/dashboard/orders" component={Orders} />
        <Route  path="/dashboard/subscription-history" component={SubscriptionHistory} />
        <Route  path="/dashboard/all-foods" component={AllFoods} />
        <Route  path="/dashboard/add-food" component={AddFood} />
        <Route  path="/dashboard/top-up" component={Subscribe} />
      </Switch>
    </div>
    
  );
}
