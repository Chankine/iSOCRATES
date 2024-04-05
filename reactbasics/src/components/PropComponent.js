// import { useState } from "react"

// function ChildComponent(props) {
//     return <p>Received Prop from Parent:{props.message}</p>;
// }

// export default function ParentComponent() {
//     const [message, setMessage] = useState('Hello from Parent');
//     const updateMessage = () => {
//         setMessage('New Message from Parent');
//     };
//     return (
//         <div>
//             <ChildComponent message={message} />
//             <button onClick={updateMessage}>Update Message</button>

//         </div>
//     )
// }


//Couter App
import React, { useState } from "react";

function ChildComponent(props) {
  return <p>Received prop from Parent: {props.counter}</p>;
}

function ParentComponent() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div>
      <button onClick={incrementCounter}>Update Counter</button>
      <ChildComponent counter={counter} />
    </div>
  );
}

export default ParentComponent;
