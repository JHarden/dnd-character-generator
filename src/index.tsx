import * as React from "react";
import * as ReactDOM from "react-dom";
import './styles/sass/main.scss';

import { Content } from "./containers/Content";


ReactDOM.render(
    <span>
        <Content/>
    </span>,
    document.getElementById("example")
);