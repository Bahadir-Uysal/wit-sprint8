import "./App.css";
import OrderConfirm from "./components/OrderConfirm";
import OrderPage from "./components/OrderPage";
import MainPage from "./components/MainPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/orderPage">
          <OrderPage />
        </Route>
        <Route path="orderConfirm">
          <OrderConfirm />
        </Route>
      </Switch>
    </>
  );
}

export default App;
