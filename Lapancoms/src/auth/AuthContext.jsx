import React, { createContext, useState, useEffect } from "react";
import * as authApi from "../api/authApi";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const raw = localStorage.getItem("user");
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    async function init() {
      try {
        const token = localStorage.getItem("access_token");
        if (token && !user) {
          // token exists, try fetch current user
          const res = await authApi.me();
          const data = res.data || res;
          if (data && data.user) {
            setUser(data.user);
            localStorage.setItem("user", JSON.stringify(data.user));
          } else if (data && data.name) {
            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
          }
        }
      } catch (e) {
        // token invalid or request failed
        console.debug("Auth init failed", e);
      }
    }
    init();
  }, []);

  async function login(credentials) {
    const data = await authApi.login(credentials);
    // data may contain token and user
    const token =
      data.access_token || data.token || data.accessToken || data.access;
    if (token) {
      try {
        localStorage.setItem("access_token", token);
      } catch (e) {}
    }

    const userObj = data.user || data;
    if (userObj && (userObj.user || userObj.name || userObj.id)) {
      // if backend returned wrapper { user: {...} }
      const u = data.user || data;
      setUser(u.user || u);
      try {
        localStorage.setItem("user", JSON.stringify(u.user || u));
      } catch (e) {}
      return u.user || u;
    }

    // If no user in response, try fetching /user
    try {
      const res = await authApi.me();
      const d = res.data || res;
      const finalUser = d.user || d;
      setUser(finalUser);
      localStorage.setItem("user", JSON.stringify(finalUser));
      return finalUser;
    } catch (e) {
      return null;
    }
  }

  async function logout() {
    try {
      await authApi.logout();
    } catch (e) {
      // ignore server errors
    }
    setUser(null);
    try {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    } catch (e) {}
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
