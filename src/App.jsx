import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Home from "./components/Home";
import Success from "./components/Success";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({});

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route
          path="/order"
          render={() => <Form setFormData={setFormData} />}
        ></Route>
        <Route
          path="/success"
          render={() => <Success formData={formData} />}
        >
          
        </Route>
      </Switch>
    </>
  );
}

export default App;