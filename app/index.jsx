import React from 'react';
import {render} from 'react-dom';
import {ProblemPage, ProblemList} from './problem.jsx'

class Index extends React.Component {
  render () {

    return (
      <div>
      <p>Hey there!</p>
      <a href="/problems">View problems</a>
      </div>
    );
  }
}

function renderComponent(id, Component) {
  let $component = document.getElementById(id);
  if ($component)
    render(<Component />, $component);
}

renderComponent('problems', ProblemList)
renderComponent('problem', ProblemPage);
renderComponent('index', Index);
// let $problem = document.getElementById('problem');
// if ($problem) render(<Problem />, problem);