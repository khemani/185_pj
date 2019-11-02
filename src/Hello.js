import React from "react";
import { log } from "./utils/myLogger";
import Hello2D from './Hello2';

const styles = {
  childBorder: {
    borderStyle: "dotted",
    borderColor: "blue",
    margin: "0.4em"
  }
};

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      show:false,
      show2: false,
      count2:0
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
  toggleComponent = () => {
    log(`------>${this.state.show ? "Unmounting" : "Mounting"}`);
    this.setState(state => ({
      show2: !state.show2
    }));
  };

  updateCount = () => {
    log("----------- Update Parent component------------------");
    this.setState(state => ({ count: state.count + 1 }));
  };
  render() {
    log("render from Child");//const { show } = this.state;
    const { show2,show } = this.state;
    return (
      
      <div style={styles.childBorder}>
        <h4>Child Component</h4>
        <div>
          <button onClick={this.updateCount}>Update Child Component</button>
          {/* {log("added sub Child")}
          <button onClick={this.toggleComponent}>
              {show2 ? "Remove" : "Add"} Sub Child Component
            </button>
            {(show2 && <Hello2D />)}
            {log("added sub Child")} */}
        </div>
      </div>
    );
  }

  updateCount = () => {
    log("----------- Update Child component------------------");
    this.setState(state => ({ count: state.count + 1 }));
  };
}
export default Hello;