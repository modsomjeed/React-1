import * as React from 'react';
import './style.css';

function Example() {
  const [state, setState] = React.useState({ date: new Date(), name: 'Tom' });
  return (
    <div>
      <div>
        It is {state.date.toLocaleTimeString()} name {state.name}
      </div>
      <input
        value={state.name}
        onChange={(event) =>
          setState((prevState) => ({ ...prevState, name: event.target.value }))
        }
      />
    </div>
  );
}

export default function App6() {
  return (
    <React.Fragment>
      <Example></Example>
    </React.Fragment>
  );
}
