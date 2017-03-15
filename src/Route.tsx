import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Router from 'react-router';
import  {IndexRoute} from 'react-router';
import{About} from './components/menu/About';
import{Repos} from './components/menu/Repos';
import {Menu} from './components/menu/Menu';
import {Home} from './components/menu/Home';
import {Contacts} from './components/contacts/Contacts';
import {KanbanBoardContainer} from './components/KanbanBoardContainer';

var Route = Router.Route;

export var routes = (  
  
    <Route  path="/" component={Home}>
      <IndexRoute component={KanbanBoardContainer}/>      
      <Route path="repos" component={Repos}/>
      <Route path="contacts" component={Contacts}/>
      <Route path="about" component={About}/>
    </Route>  
  
);