import React from "react";
import { log } from "./utils/myLogger";

const styles = {
  childBorder: {
    borderStyle: "dotted",
    borderColor: "blue",
    margin: "0.4em"
  }
};

class Hello2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    log("Constructor from Child");
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    log("getDerivedStateFromProps from Child");
    log(nextProps);
    log(prevState);
    return null;
  }

  componentDidMount() {
    log("componentDidMount from Child");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    log("ComponentDidUpdate");
  }

  componentWillUnmount() {
    log("componentWillUnmount from Child");
  }

  shouldComponentUpdate(nextProps, nextState) {
    log("shouldComponentUpdate from Child");
    return false;//true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    log("getSnapshotBeforeUpdate from Child");
    return null;
  }
  render() {
    log("render from Child");
    return (
      <div style={styles.childBorder}>
        <h4>Child Component</h4>
        <div>
          <button onClick={this.updateCount}>Update Child Component</button>
        </div>
      </div>
    );
  }

  updateCount = () => {
    log("----------- Update Child component------------------");
    this.setState(state => ({ count: state.count + 1 }));
  };
}
export default Hello2;