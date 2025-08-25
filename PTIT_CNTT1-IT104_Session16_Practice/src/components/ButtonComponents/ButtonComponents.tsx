import React, { Component } from "react";
import "./ButtonComponents.css";

export default class ButtonComponents extends Component {
  render() {
    return (
      <div className="btn-components">
        <button className="primary">Primary</button>
        <button className="secondary">Secondary</button>
        <button className="success">Success</button>
        <button className="warning">Warning</button>
        <button className="danger">Danger</button>
        <button className="info">Info</button>
        <button className="light">Light</button>
        <button>
          <a href="">Link</a>
        </button>
      </div>
    );
  }
}
