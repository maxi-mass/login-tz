import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { Provider } from "react-redux";
import store from "./store";
import { useDispatch, useSelector } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route component={LoginPage} path="/" exact />
            <Route component={AboutPage} path="/about" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
