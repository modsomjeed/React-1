import * as React from 'react';
import './style.css';

// const Example = (props) => {
//   const children = React.Children.toArray(props.children).filter(
//     (child) => child.type == 'h1'
//   );
//   return <div>{children}</div>;
// };

// const Example = (props) => {
//   const children = React.Children.toArray(props.children).filter(
//     (child) => child.props['data-name'] == 'header-1'
//   );
//   return <div>{children}</div>;
// };

const Example = (props) => {
  const title = 'abc';
  const abc = () => {
    alert('Hello World');
  };
  return <div>{props.children({ name: 'test', title, abc })}</div>;
};

export default function App4() {
  {
    /* <h1 data-name="header-1">Header 1</h1> */
  }
  {
    /* <span>Span 1</span> */
  }
  {
    /* <h2>Header 2</h2> */
  }
  {
    /* <h1>Header 1 1</h1> */
  }
  // <div>
  //   {name} {title}
  // </div>
  return (
    <React.Fragment>
      <Example>
        {({ name, title, abc }) => {
          return (
            <div onClick={abc}>
              {name} {title}
            </div>
          );
        }}
      </Example>
    </React.Fragment>
  );
}
