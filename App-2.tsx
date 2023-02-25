import * as React from 'react';
import './style.css';

// return (
//   <div>
//     <h1>Hello World! {1 * 1}</h1>
//     <WithoutJSX />
//     <WithJSX />
//   </div>
// );

// return (
//   <>
//     <h1>hello world</h1>
//     <h2>Hello world 2</h2>
//   </>
// );

// return (
//   <div>
//     <h1>hello world</h1>
//     <h2>Hello world 2</h2>Y
//   </div>
// );

function WithoutJSX() {
  return React.createElement('h1', { style: { color: 'red' } }, 'Without JSX');
}

function WithJSX() {
  return <h1 style={{ color: 'green' }}>Without JSX</h1>;
}

class HelloWorld extends React.Component {
  render() {
    return <h1> {this.props.title} Class Compenent</h1>;
  }
}

function HelloWorldFunc(props) {
  return <h1> {props.title} Func Compenent</h1>;
}

const HelloWorldCont = ({ Title }) => {
  return (
    <h1>
      <Title title="Hello From Hello world Const" /> Const Compenent
    </h1>
  );
};

// const HelloWorldConst = <h1> Const Compenent</h1>; // เหมือนจะใช้ไม่ได้

export default function App2() {
  const title = 'Hello World';
  const a = Number('123') + 1;

  return (
    <React.Fragment>
      {/* <h1>hello world</h1>
      <h2>Hello world 2</h2> */}
      <HelloWorld title={title} />
      <HelloWorldFunc title="Hello World 2" />
      <HelloWorldCont Title={HelloWorld} />
      {/* <HelloWorldConst /> */}
    </React.Fragment>
  );
}
