import * as React from 'react';

const styles = {
  root: {
    textAlign: 'center'
  },
  alert: {
    fontSize: 80,
    fontWeigth: 'bold',
    color: '#e9a2b'
  }
};

export class ServerError extends React.Component < {}, {} > {
  render() {
    return <div style={styles.root}>
      <div style={styles.alert}>&#9888;</div>
      {/* &#9888; is the html entity code for the warning character: ⚠ */}
      <h1>Ops, we have a problem</h1>
      <p>Sorry, we could't access the repositories. Please try again in a few moments.</p>
    </div>
  }
}