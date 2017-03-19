import * as React from "react";
import * as ReactDOM from "react-dom";
import {Router, Route, IndexRoute} from 'react-router';
import{About} from './components/menu/About';
import{Repos} from './components/menu/Repos';
import {Menu} from './components/menu/Menu';
import {Home} from './components/menu/Home';
import {Contacts} from './components/contacts/Contacts';
import {KanbanBoardContainer} from './components/KanbanBoardContainer';
import createBroswerHistory from 'history/lib/createBrowserHistory';

export var routes = (  
  
  <Router history={createBroswerHistory()}>
    <Route path="/" component={KanbanBoardContainer}>
      <IndexRoute component={KanbanBoardContainer}/>
      <Route path="repos" component={Repos}/>
      <Route path="contacts" component={Contacts}/>
      <Route path="about" component={About}/>
    </Route>
  </Router>

  
);