import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {About} from './components/menu/About';
import {Repos} from './components/menu/Repos';
import {RepoDetails} from './components/menu/RepoDetails';
import {Menu} from './components/menu/Menu';
import {Home} from './components/menu/Home';
import {ServerError} from './components/menu/ServerError';
import {Contacts} from './components/contacts/Contacts';
import {KanbanBoardContainer} from './components/KanbanBoardContainer';
import {NewCard} from './components/NewCard';
import {EditCard} from './components/EditCard';

import createBroswerHistory from 'history/createBrowserHistory';
//const browserHistory = createBroswerHistory();

export var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Menu}>
      <IndexRoute component={Home}/>
      <Route path="kanban" component={KanbanBoardContainer}/>
      <Route path="repos" component={Repos}>
        {/* Add the route, nested where we want the UI to nest*/}
        <Route path="details/:repo_name" component={RepoDetails}/>
      </Route>
      <Route path="new" component={NewCard} />
      <Route path="edit/:card_id" component={EditCard} />
      <Route path="contacts" component={Contacts}/>
      <Route path="about" component={About}/>
      <Route path="error" component={ServerError}/>
    </Route>
  </Router>

);