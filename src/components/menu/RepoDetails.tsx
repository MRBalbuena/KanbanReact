import * as React from 'react';
import * as reqPromise from 'request-promise';

interface IRepoDetailsState {
  repository : any
}
interface IRepoDetailsProps {
  params : any
}
export class RepoDetails extends React.Component < IRepoDetailsProps,
IRepoDetailsState > {
  public state : IRepoDetailsState;
  constructor() {
    super();
    this.state = {
      repository: {}
    }
  }

  getData(repo_name : string) {
    let req = {
      uri: 'https://api.github.com/repos/pro-react/' + repo_name,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      json: true
    };
    reqPromise(req).then((responseData : any) => {
      this.setState({repository: responseData});
    })
  }
  componentDidMount() {
    // Router injects the key "repo_name" inside the params prop
    let repo_name = this.props.params.repo_name;
    this.getData(repo_name);
  }
  componentWillRecieveProps(nextProps : any) {}
  render() {
    let stars = [];
    for (var i = 0; i < this.state.repository.stargazers_count; i++) {
      stars.push('');
    }
    return (
      <div>
        <h2>{this.state.repository.name}</h2>
        <p>{this.state.repository.description}</p>
        <span>{stars}</span>
      </div>
    );
  }
}
