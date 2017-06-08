import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return (
      <div>
        <p>Hello there!</p>
        <p>General {this.props.name}.</p>
      </div>
    );
  }
}


render(<App name="Kenobi"/>, document.getElementById('app'));