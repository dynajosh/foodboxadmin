import React from "react";
import { NavLink } from "react-router-dom";
import "./Aside.css";
import { useAuthContext } from "../../auth/auth-context/AuthContext";
import { Toast } from "../../styled-components/Toast";

export default function AsideMenu() {
  const { signout } = useAuthContext()

  const logOut = async () => {
    await signout()
    Toast.fire({
      icon: "info",
      title: "You are Logged Out",
    });
  }
  return (
    <div className="aside-menu">
      <div className="nav-links">
        <NavLink exact to='/dashboard' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-home"></i>
          </span>
          Home
        </NavLink>
      </div>
      <div className="aside-menu-title">ORDERS</div>
      <div className="nav-links">
        <NavLink to='/dashboard/orders' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-user-alt"></i>
          </span>
            View Orders        </NavLink>
      </div>
      <div className="aside-menu-title">FOOD</div>
      <div className="nav-links">
        <NavLink to='/dashboard/all-foods' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-credit-card"></i>
          </span>
          All Foods
        </NavLink>
        <NavLink to='/dashboard/add-food' activeClassName='aside-active' className="nav-link">
          <span>
            <i className="las la-piggy-bank"></i>
          </span>
          Add Food
        </NavLink>       
      </div>
      <div className="aside-footer">
        <div className="separator"></div>
        <div className="nav-links">
          <li className="nav-link" onClick={logOut}>
            <span>
              <i className="las la-power-off"></i>
            </span>
           Log Out
          </li>
        </div>
      </div>
    </div>
  );
}
