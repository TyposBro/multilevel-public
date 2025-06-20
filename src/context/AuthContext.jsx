// {PATH_TO_PROJECT}/src/context/AuthContext.jsx

import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("admin_token"));
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    // If a token exists, we consider the user logged in.
    // A robust app would verify the token with the backend here.
    if (token) {
      // You could decode the token to get admin info if needed
      setAdmin({ loggedIn: true });
    }
  }, [token]);

  const login = async (email, password) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    localStorage.setItem("admin_token", data.token);
    setToken(data.token);
    setAdmin(data);
    return data;
  };

  const logout = () => {
    localStorage.removeItem("admin_token");
    setToken(null);
    setAdmin(null);
  };

  const value = { token, admin, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
