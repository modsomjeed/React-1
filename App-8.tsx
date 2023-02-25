import * as React from 'react';
import './style.css';

function Car(props) {
  if (props.isHonda) {
    return <h1>Hondo</h1>;
  }
  if (props.isToyota) {
    return <h1>Toyota</h1>;
  }
  return <h1>No Name</h1>;
}

export default function App8() {
  return (
    <React.Fragment>
      <Car isHonda={true} isToyota={false} />
      <Car isHonda={false} isToyota={true} />
      <Car isHonda={false} isToyota={false} />
    </React.Fragment>
  );
}
