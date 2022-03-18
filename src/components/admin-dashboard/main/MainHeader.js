import React from "react";

export default function MainHeader() {
  return (
    <div className="main-header">
      <div className="heading">Home</div>
      <div className="header-icons">
        <span>
          <i className="las la-bell"></i>
        </span>
        <span>
          <i className="las la-user-circle"></i>
        </span>
      </div>
    </div>
  );
}
