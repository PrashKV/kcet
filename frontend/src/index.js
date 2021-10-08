import React from "react";

import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Display from "./components/Display";
import List from "./components/List";
import No from "./components/No";

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/display" exact component={Display} />
                <Route path="/list" component={List} />
                <Route component={No} />
            </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<Routes />, document.getElementById("root"));
