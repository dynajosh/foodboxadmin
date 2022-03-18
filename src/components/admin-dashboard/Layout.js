import React from "react";
import Aside from "./aside/Aside";
import Main from "./main/Main";
import "./Dashboard.css";

export default function Layout() {
  return (
    <div className="layout">
      <Aside />
      <Main />
    </div>
  );
}
