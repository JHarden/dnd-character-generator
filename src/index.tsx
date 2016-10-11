import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/sass/main.scss';

import { About } from "./components/About";
import { Content } from "./containers/Content";
import { Navigation } from "./components/Navigation";

ReactDOM.render(
    <span>
        <Navigation/>
        <Content/>
    </span>,
    document.getElementById("example")
);