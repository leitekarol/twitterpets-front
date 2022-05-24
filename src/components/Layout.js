import { Link, Outlet } from "react-router-dom";
import React from "react";
import AuthStatus from "./AuthStatus";

function Layout() {
  return (
    <div>
      <AuthStatus />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/protected">Login</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Layout;
