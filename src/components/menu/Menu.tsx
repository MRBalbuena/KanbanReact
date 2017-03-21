import * as React from 'react';
import {Router, Route, Link} from 'react-router';

export class 
Menu extends React.Component < {}, {} > {
  render() {
    return (
      <div>
        <header>App</header>
        <menu>
          <ul>
            <li>
              <Link to="/kanban">Kanban</Link>
            </li>            
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/repos">Repos</Link>
            </li>
          </ul>
        </menu>
        {this.props.children}
      </div>
    );
  }
}
