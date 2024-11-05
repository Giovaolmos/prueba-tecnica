import React, { createContext, useState, useContext, useEffect } from "react";
import { jwtDecode, JwtPayload } from "jwt-decode";

interface AuthContextType {
  isLoggedIn: boolean;
  isAdmin: boolean;
  login: (token: string) => void;
  logout: () => void;
}

interface CustomJwtPayload extends JwtPayload {
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode<CustomJwtPayload>(token);
        setIsLoggedIn(true);
        setIsAdmin(decodedToken.isAdmin);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    try {
      const decodedToken = jwtDecode<CustomJwtPayload>(token);
      setIsLoggedIn(true);
      setIsAdmin(decodedToken.isAdmin);
    } catch (error) {
      console.error("Error al decodificar el token:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
