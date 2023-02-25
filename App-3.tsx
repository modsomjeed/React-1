import * as React from 'react';
import './style.css';

const Example = (props) => {
  return <div>{props.children}</div>;
};

class ExampleClass extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}

const Test = ({
  childrenExample,
  childrenExampleTwo,
  childrenExampleThree,
}) => {
  return (
    <div>
      {childrenExample} + {childrenExampleTwo} + {childrenExampleThree}
    </div>
  );
};

export default function App3() {
  return (
    <React.Fragment>
      <h1>
        <Example children="Example Hello" />
      </h1>
      <Example />
      <Example>This is Example</Example>
      <ExampleClass>This is ExampleClass</ExampleClass>
      <Test
        childrenExample={<h1>Hello</h1>}
        childrenExampleTwo={'xx'}
        childrenExampleThree={'ccc'}
      />
    </React.Fragment>
  );
}
