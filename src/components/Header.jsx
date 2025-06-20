import React from "react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { logout } = useAuth();
  return (
    <header className="dashboard-header">
      <h1>Content Management</h1>
      <button onClick={logout} className="btn-secondary">
        Logout
      </button>
    </header>
  );
};

export default Header;
