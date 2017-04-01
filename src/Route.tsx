import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, IndexRoute} from 'react-router';
import {About} from './components/menu/About';
import {Repos} from './components/menu/Repos';
import {RepoDetails} from './components/menu/RepoDetails';
import {Menu} from './components/menu/Menu';
import {Home} from './components/menu/Home';
import {ServerError} from './components/menu/ServerError';
import {Contacts} from './components/contacts/Contacts';
import {KanbanBoardContainer} from './components/KanbanBoardContainer';
import createBroswerHistory from 'history/lib/createBrowserHistory';

export var routes = (
  <Router history={createBroswerHistory()}>
    <Route path="/" component={Menu}>
      <IndexRoute component={Home}/>
      <Route path="kanban" component={KanbanBoardContainer}/>
      <Route path="repos" component={Repos}>
        {/* Add the route, nested where we want the UI to nest*/}
        <Route path="details/:repo_name" component={RepoDetails}/>
      </Route>
      <Route path="contacts" component={Contacts}/>
      <Route path="about" component={About}/>
      <Route path="error" component={ServerError}/>
    </Route>
  </Router>

);