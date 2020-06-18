import React from 'react';
import './App.css';
import  Diner from "./diner" ;



function App() {
  return (
    <div className="App">
      <Diner dishName="Nehari" sweetdish = 'kheer'/>

      <hr/>

      <Diner dishName="biryani" sweetdish = 'khoya'/>

      <hr/>
      <Diner dishName="karahi" sweetdish = 'gajer ka halwa'/>
      {/* <Diner></Diner> */}
     </div>
  );
}

export default App;
