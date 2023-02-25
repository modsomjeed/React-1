import * as React from 'react';
import './style.css';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), name: 'Tom' };
  }
  render() {
    return (
      <div>
        <div>
          It is {this.state.date.toLocaleTimeString()} name {this.state.name}
        </div>
        <input
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
        />
        <div> Count: {this.state.count}</div>
        <button
          onClick={() => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
            this.setState((prevState) => ({ count: prevState.count + 1 }));
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default function App5() {
  return (
    <React.Fragment>
      <Example></Example>
    </React.Fragment>
  );
}
