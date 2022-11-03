import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const week = [
  { id: 1, name: 'mon', cool: 8 },
  { id: 2, name: 'fri', cool: 10},
  { id: 3, name: 'sun', cool: 9}
]

// JSX
function MyButton({ count, onClick}) {

  return (
    <button onClick={onClick}> clickec { count } times</button>
  );
}

function myComponent({ props1, props2 }) {
  //logic
  return (
    //appareance
    <>
      <p></p>
      <p></p>
    </>
  );
}

function App() {

  //useState
  const [count, setCount] = useState(0);

  // event handler
  function handleClick() {
    // if else
    count == 5 ? setCount(100) : setCount(count + 1)
    // if
    count == 101 && setCount(500)
  }

  //passing an array to a 'li' tag
  const listDays = week.map( day => 
    <li
      key={day.id}
      style={{ color:'red' }}
    >
      {day.name + "day"}
    </li>
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {listDays}
          <MyButton count={count} onClick={handleClick} />
        </ul>
        <MyButton count={count}  onClick={handleClick} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
