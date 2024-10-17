import React from "react";

import './App.css';

class Animal extends React.Component {
  render(){
  return (
    <div className="card">
     <h1>My favourite animal</h1>
     <img src="img/lion.jpeg" alt ="Lion is my favourite animal"></img>
     
    </div>
  );
}
}

export default Animal;
