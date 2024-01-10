import React, { Component } from "react";

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.name,
      address: props.address,
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleEvent}>Name</button>
        <input type="text" defaultValue={this.state.name} />
        <button onClick={this.handleEvent}>Address</button>
        <input type="text" defaultValue={this.state.address} />
        
      </div>
    );
  }
}
export default Display;
