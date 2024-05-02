import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isdarkMode, setDarkMode] =useState(false)

function handleClick(){
   setDarkMode(( isDarkMode) => !isDarkMode) ;
}
const appClass = !isdarkMode ? "App light" : "App dark"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {(isdarkMode)? "Dark" : "Light" }  Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
