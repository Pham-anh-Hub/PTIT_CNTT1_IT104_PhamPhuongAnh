import React, { Component } from "react";

type PropTypes = {
  username: string;
};

export default class ChildrenComp extends Component<PropTypes> {
  render() {
    return <div>Họ và tên bên component con: {this.props.username}</div>;
  }
}
