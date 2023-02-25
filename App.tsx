import * as React from 'react';
import './style.css';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function EventOrOdd(event) {
//   if (event.value % 2 == 0) {
//     alert('ODD');
//   }
//   alert('EVEN');
// }

export default function App() {
  console.log('TSTEST');
  return (
    <React.Fragment>
      <div>Even Or Odd</div>
      {items.map((a) => {
        return <button>{a}</button>;
      })}
    </React.Fragment>
  );
}
