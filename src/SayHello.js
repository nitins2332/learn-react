import React from "react";

function SayHello() {
  const sayHello = () => {
    console.log("say hello");
  };

  return (
    <div>
      <button onClick={sayHello}>Hey</button>
    </div>
  );
}

export default SayHello;
