import React from "react";
import "./Widgets.css";
import { FacebookProvider, Page } from "react-facebook";

function Widgets() {
  return (
    <div className="widgets">
      <FacebookProvider appId="rohan.dangi.31">
        <Page
          href="https://www.facebook.com/Marvel-Fanclub-Nepal-2296318483968802"
          tabs="timeline"
        />
      </FacebookProvider>
    </div>
  );
}

export default Widgets;
