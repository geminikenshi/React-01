import React from "react";

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:

// don't change the Component name "App"
export default function App() {
  const [deleteState, setDeleteState] = React.useState("normal");

  function buttonHandler(state) {
    if (state === "delete") {
      setDeleteState("delete");
    } else {
      setDeleteState("normal");
    }
  }

  return (
    <div>
      {deleteState === "delete" ? (
        <div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={buttonHandler}>Proceed</button>
        </div>
      ) : null}
      {deleteState === "normal" && (
        <button onClick={() => buttonHandler("delete")}>Delete</button>
      )}
    </div>
  );
}
