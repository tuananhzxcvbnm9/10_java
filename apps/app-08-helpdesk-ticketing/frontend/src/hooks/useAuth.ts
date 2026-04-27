import { useState } from "react";
export const useAuth = () => {
  const [isAuthenticated, setAuthenticated] = useState(Boolean(localStorage.getItem("token")));
  const login = () => { localStorage.setItem("token", "demo-token"); setAuthenticated(true); };
  const logout = () => { localStorage.removeItem("token"); setAuthenticated(false); };
  return { isAuthenticated, login, logout };
};
