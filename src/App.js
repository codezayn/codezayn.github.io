import logo from './zaplogo.png';
import './App.css';
import React, { useState } from 'react';


function App() {
  let initNumber = () => Math.ceil(Math.random() * 12);

  const [answer, setAnswer] = useState();
  const [left, setLeft] = useState(initNumber());
  const [right, setRight] = useState(initNumber());

  const handleSubmit = (evt) => {
    evt.preventDefault();

    var cerectAnswer = left * right

    if (answer.toString() === cerectAnswer.toString()) {
      alert(`Correct answer ${answer}`)
      setLeft(initNumber())
      setRight(initNumber())
      setAnswer('')
    } else {
      alert('that is the wrong answer')
    }


  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p className={'welcome'}>welcome to zap</p>

        <form onSubmit={handleSubmit}>
            {left} x {right} = <input name={'answer'} type={'text'} value={answer} onChange={e => setAnswer(e.target.value)}/>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
