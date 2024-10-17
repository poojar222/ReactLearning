import React from "react";

import './App.css';

class Animal extends React.Component {
  render(){
  return (
    <div className="card">
      <div className="texts">
      <h1>My favourite animal</h1>
      <p>
      Lions have strong, compact bodies and powerful forelegs, teeth and jaws for pulling down and killing prey. Their coats are yellow-gold, and adult males have shaggy manes that range in color from blond to reddish-brown to black. The length and color of a lion's mane is likely determined by age, genetics and hormones.
      </p>

      </div>
     
     <img src="img/lion.jpeg" alt ="Lion is my favourite animal"></img>
    </div>
  
  );
}
}

export default Animal;
