import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Login from "./Login";

function App() {
  const user = null;
  return (
    //BEM
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
