import React, { Component } from "react";
import "./Node.css";
export class Node extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      col,
      isStart,
      isFinish,
      isWall,
      row,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
    } = this.props;
    const extraClassName = isFinish
      ? "node-finish"
      : isStart
      ? "node-start"
      : isWall
      ? "node-wall"
      : "";
    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => {
          onMouseDown(row, col);
        }}
        onMouseEnter={() => {
          onMouseEnter(row, col);
        }}
        onMouseUp={() => {
          onMouseUp();
        }}
      ></div>
    );
  }
}

export default Node;

export const DEFAULT_NODE = {
  row: 0,
  col: 0,
};
