import * as React from 'react';
import './style.css';

function Example() {
  const [state, setState] = React.useState({
    date: new Date(),
    name: 'Tom',
    count: 0,
  });
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
      <div> Count: {state.count}</div>
      <button
        onClick={() => {
          setState((prevState) => ({
            ...prevState,
            count: prevState.count + 1,
          }));
          setState((prevState) => ({
            ...prevState,
            count: prevState.count + 1,
          }));
        }}
      >
        Click
      </button>
    </div>
  );
}

export default function App7() {
  return (
    <React.Fragment>
      <Example></Example>
    </React.Fragment>
  );
}
