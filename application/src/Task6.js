import React, { Component } from "react";

class Task6 extends Component {
  hello() {
    document.getElementById("result").innerHTML="Hello";
  }
  bye() {
    document.getElementById("result").innerHTML="Bye";
  }
  render() {
    return (
      <div>
        <button onClick={this.hello}> Hello </button>
        <button onClick={this.bye}>Bye</button>
        <i id="result"></i>
      </div>
    );
  }
}

export default Task6;
