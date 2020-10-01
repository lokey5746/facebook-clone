import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    //BEM
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;
