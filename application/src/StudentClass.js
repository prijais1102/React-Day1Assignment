import React, { Component } from 'react'

class StudentClass extends Component {
  state={
    name:"Priya",
    address:"Mzp1",
    scores:"55"
  }
  render() {
    return (
      <div>
          Using class Component 
          <br></br>
          Name={this.state.name}
          <br></br>
          Address={this.state.address}
          <br></br>
          Score={this.state.scores}
      </div>
    )
  }
}
export default StudentClass;
