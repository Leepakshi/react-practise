import React from "react";
import ReactDOM from "react-dom/client";

{
  /* <div id="parent">
  <div id="child1">
    <h1>I am h1 tag of child 1</h1>
    <h2>I am h1 tag of child 1</h2>
  </div>
  <div id="child2">
    <h1>I am h1 tag of child 2</h1>
    <h2>I am h1 tag of child 2</h2>
  </div>
</div>; */
}

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "I am h1 tag of child 1"),
    React.createElement("h2", {}, "I am h2 tag of child 1"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading2" }, "I am h1 tag of child 2"),
    React.createElement("h2", {}, "I am h2 tag of child 2"),
  ]),
]);

//create Element gives object => React.render(convert object to)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//when we have one child
// const heading = React.createElement(
//   "h1",
//   {
//     id: "heading",
//     xyz: "abc",
//   },
//   "Hello World from React!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
