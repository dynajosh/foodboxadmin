import React from "react";
import "./AuthPage.css";
import Signup from "./Signup";

export default function AuthPage() {
  return (
    <main className="auth-wrapper">
      <section className="auth-sidebar">
        <div className='auth-sidebar-overlay'></div>
        <div className='auth-sidebar-over'></div>
      </section>
      <section className="auth-main-div">
        <Signup />
      </section>
    </main>
  );
}
