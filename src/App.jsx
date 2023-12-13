import { useState } from "react";

import componentImage from "./assets/components.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import TabButton from "./components/TabButton";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {
  console.log("APP component executing");

  return (
    <>
      <Header />
      <main>
        <CoreConcepts></CoreConcepts>
        <Examples></Examples>
      </main>
    </>
  );
}

export default App;
