import React from "react";
import Kanban from "./pages/Kanban";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Kanban />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
