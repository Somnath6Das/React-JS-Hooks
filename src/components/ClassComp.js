import React, { Component } from 'react'

export default class ClassComp extends Component {

    constructor() {
        super();
        this.state = {
            name: "Class Component short cut -> rcc"
        }
    }

  render() {
    const {name} = this.state;
    return (
      <div>
        <h1>{name}</h1></div>
    )
  }
}
