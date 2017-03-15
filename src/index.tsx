import * as React from "react";
import * as ReactDOM from "react-dom";
import {KanbanBoardContainer} from "./components/KanbanBoardContainer";
import {routes} from './Route';
import {render} from "react-dom";

render(<KanbanBoardContainer />, document.getElementById('root'));