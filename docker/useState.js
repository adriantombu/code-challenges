import React from "react";
import ReactDOM from "react-dom";

const MyReact = {
  render(el, root) {
    this.component = el;
    this.root = root;
    ReactDOM.render(<this.component />, this.root);
  },
  state: [],
  stateElements: 0,
  useState(initialState) {
    const current = this.stateElements;
    if (MyReact.state[MyReact.stateElements] === undefined) {
      MyReact.state[MyReact.stateElements] = initialState;
    }

    MyReact.stateElements++;

    return [
      this.state[current],
      (value) => {
        this.state[current] = value;
        MyReact.stateElements = 0;
        ReactDOM.render(<this.component />, this.root);
      }
    ];
  }
};

function App() {
  const [number, setNumber] = MyReact.useState(0);
  const [str, setStr] = MyReact.useState("a");

  return (
    <div className="App">
      <div>{number}</div>
      <button onClick={() => setNumber(number - 1)}>Sub</button>
      <button onClick={() => setNumber(number + 1)}>Add</button>
      <div>{str}</div>
      <button onClick={() => setStr(str + "a")}>Add</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
MyReact.render(App, rootElement);
