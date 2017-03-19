import * as React from "react";
import * as ReactDOM from "react-dom";
import {KanbanBoardContainer} from "./components/KanbanBoardContainer";
//import createBroswerHistory from 'history/lib/createBrowserHistory';
import {routes} from './Route';
import {render} from "react-dom";
import {Router, Route, IndexRoute} from 'react-router';

render((routes),
document.getElementById('root'));