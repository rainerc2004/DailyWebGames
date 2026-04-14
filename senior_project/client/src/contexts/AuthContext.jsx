// src/contexts/AuthContext.js
import { createContext, useContext, useState } from "react";
 
// Create context with default value (optional)
const AuthContext = createContext(undefined);
 
// Create a provider component
export const AuthProvider = ({ children }) => {
  const [current_user, setCurrentUser] = useState(null); // Reactive global state
 
  const login = (userData) => setCurrentUser(userData);
  const logout = () => setCurrentUser(null);
 
  return (
    <AuthContext.Provider value={{ current_user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 
// Custom hook to use the context (avoids repeating useContext)
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};