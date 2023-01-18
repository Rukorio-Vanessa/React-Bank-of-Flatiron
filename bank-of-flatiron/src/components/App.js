import './App.css';
import React from 'react';
import MainContainer from './MainContainer';

function App(){
  return (
    <div className="App">
        <h3>
          Bank of Flatiron
        </h3>
        <h5>
          Transactions
        </h5>        
        <div>
          <MainContainer/>
        </div>
    </div>
  )
}


export default App;
