import * as React  from 'react';
import * as reqPromise from 'request-promise';
import {Link} from 'react-router';

interface IReposState {
  repositories: any[];
}

export class Repos extends React.Component<{}, IReposState> {
  public state: IReposState
  constructor(){
    super();
    this.state = {
      repositories: []
    }
  }

  componentDidMount(){
    let req = {
      uri: 'https://api.github.com/users/pro-react/repos',
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      json: true
    };
    reqPromise(req).then((responseData: any) => {      
      this.setState({repositories: responseData});
    })
  }

  render() {
    let repos = this.state.repositories.map((repo: any) => {
      return <li key={repo.id}>
        <Link to={"/repos/details/" + repo.name}> {repo.name}</Link>
        </li>
    });
    return (
      <div>
        <h1>GitHub Repos</h1>
        <ul>{repos}</ul>
        {this.props.children}
      </div>
    );
  }
}
