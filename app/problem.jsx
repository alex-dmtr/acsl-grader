import React from 'react';
import {render} from 'react-dom';
export class ProblemData extends React.Component {
  render() {
     let inputLines = this.props.input.map((input,index) => {
      return (
        <p key={index}>{input}</p>
      );
    })
    let outputLines = this.props.output.map((output,index) => {
      return (
        <p key={index}>{output}</p>
      );
    })
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sample Input</th>
              <th>Sample Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {inputLines}
              </td>
              <td>
                {outputLines}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export class Problem extends React.Component {

  render() {
    return (
      <div>
        
      <ProblemData
        name={this.props.name}
        description={this.props.description}
        input={this.props.input}
        output={this.props.output}
      />
        <form onSubmit={
          () => {

            alert('submitting stuff!');
          } 
        }>
          <input type="file" name="source"></input>
          <input type="submit"></input>
        </form>

      </div>
    )
  }
   
}

function render() {
  
}

// =====================================================================================
// export class ProblemPage extends React.Component {
//   render() {


//     return (
//       <div>
//         <Problem
//           name={name}
//           description={description}
//           input={input}
//           output={output}
//           />
//       </div>
//     )
//   }
// }

// export class ProblemList extends React.Component {
//   render() {
//     return (
//       <div>
//         <a href="/problems/1">A+B</a>
//       </div>
//     )
//   }
// }