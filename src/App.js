// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import SayHello from "./SayHello";
import Tweet from "./Tweet";

function App() {
  // const sayHello = () => {
  //   console.log("Hello");
  // };

  const [users, setUsers] = useState([
    { name: "Ed", message: "Hello there" },
    { name: "John", message: "this is john's now" },
    // { name: "traversy", message: "I am fine" },
    // { name: "traversy", message: "I am fine" },
    // { name: "traversy", message: "I am fine" },
  ]);

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  // const [(user, setUser)] = useState({
  //   name: "ED",
  //   age: 24,
  //   posts: ["my first post", "my lovely summer"],
  // });

  const Increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  const counter = 0;

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}

      {/* <h1 className={isRed ? "red" : ""}>change my color!</h1>
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1> */}
      {/* <SayHello /> */}
      {/* <Tweet name="Dev Ed" Message="This is a randum tweet" />
      <Tweet name="John Snow" Message="I am the true king" />
      <Tweet name="Traversy Media" Message="700K my dudes" />
      <Tweet name="Mosh" Message="My new course is available" /> */}
      {/* <h2>lets go</h2> */}
      {/* <button onClick={sayHello}>Hello</button> */}
    </div>
  );
}

export default App;
