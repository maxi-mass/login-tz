import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route component={AboutPage} path="/" exact />
            <Route component={LoginPage} path="/login" />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
